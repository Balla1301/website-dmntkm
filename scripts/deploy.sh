#!/usr/bin/env bash
# Déploiement idempotent de dmntkm.com sur le VPS.
# Premier run : crée le dossier, clone, copie templates, build.
# Runs suivants : git pull + rebuild.
#
# Hypothèses :
#   - /srv/sites/ existe et est writable par $USER (ou via sudo NOPASSWD)
#   - /srv/templates/ contient nextjs.Dockerfile, nextjs.dockerignore, nextjs.docker-compose.yml
#   - Le réseau Docker "web" existe (créé par /srv/caddy)
#   - Caddy a déjà un bloc pour dmntkm.com → site-dmntkm:3000

set -euo pipefail

SITE_NAME="dmntkm"
SITE_DIR="/srv/sites/${SITE_NAME}"
REPO_URL="https://github.com/Balla1301/website-dmntkm.git"
CADDY_DIR="/srv/caddy"
TEMPLATES_DIR="/srv/templates"

log() { echo "==> $*"; }

# ─────────────────────────────────────────────────────────────
# 1. Préparer le dossier du site
# ─────────────────────────────────────────────────────────────
if [ ! -d "${SITE_DIR}" ]; then
  log "Création du dossier ${SITE_DIR}"
  sudo mkdir -p "${SITE_DIR}"
  sudo chown -R "$USER:$USER" "${SITE_DIR}"
fi

cd "${SITE_DIR}"

# ─────────────────────────────────────────────────────────────
# 2. Cloner ou mettre à jour le repo
# ─────────────────────────────────────────────────────────────
if [ ! -d "source/.git" ]; then
  log "Premier déploiement : clone du repo"
  rm -rf source
  git clone "${REPO_URL}" source
else
  log "Mise à jour du repo (git fetch + reset)"
  cd source
  git fetch origin
  git reset --hard origin/main
  cd ..
fi

# ─────────────────────────────────────────────────────────────
# 3. Arrêter un éventuel ancien conteneur (ex: site statique nginx)
#    On utilise le nom de conteneur pour le repérer, pas le compose.
# ─────────────────────────────────────────────────────────────
if docker ps -a --format '{{.Names}}' | grep -q "^site-${SITE_NAME}$"; then
  OLD_IMAGE=$(docker inspect "site-${SITE_NAME}" --format '{{.Config.Image}}' 2>/dev/null || echo "?")
  log "Conteneur existant détecté (image: ${OLD_IMAGE}). Arrêt et suppression."
  docker stop "site-${SITE_NAME}" >/dev/null 2>&1 || true
  docker rm "site-${SITE_NAME}" >/dev/null 2>&1 || true
fi

# ─────────────────────────────────────────────────────────────
# 4. (Re)Copier les fichiers Docker à chaque run (idempotent)
#    On force le compose Next.js à chaque déploiement pour qu'un
#    ancien compose (nginx statique, etc.) ne reste pas en place.
# ─────────────────────────────────────────────────────────────
log "Mise en place des templates Docker (force)"
cp "${TEMPLATES_DIR}/nextjs.Dockerfile"      source/Dockerfile
cp "${TEMPLATES_DIR}/nextjs.dockerignore"    source/.dockerignore

# Sauvegarder un ancien compose s'il existe et qu'il diffère du template
if [ -f docker-compose.yml ] && ! grep -q "context: \./source" docker-compose.yml 2>/dev/null; then
  mv docker-compose.yml "docker-compose.yml.backup-$(date +%Y%m%d-%H%M%S)"
fi

cp "${TEMPLATES_DIR}/nextjs.docker-compose.yml" docker-compose.yml
sed -i "s/site-<nom>/site-${SITE_NAME}/g" docker-compose.yml
# Pas de .env pour ce site : on retire env_file
sed -i '/env_file:/,/- \.env/d' docker-compose.yml

# ─────────────────────────────────────────────────────────────
# 4. Build + démarrage du conteneur
# ─────────────────────────────────────────────────────────────
log "Build et démarrage du conteneur site-${SITE_NAME}"
docker compose up -d --build

# ─────────────────────────────────────────────────────────────
# 5. Attendre que le conteneur soit healthy / responsive
# ─────────────────────────────────────────────────────────────
log "Attente du démarrage de l'app (max 90s)"
for i in $(seq 1 18); do
  if docker exec "site-${SITE_NAME}" wget -q --spider http://localhost:3000/ 2>/dev/null; then
    log "Conteneur opérationnel ✓"
    break
  fi
  sleep 5
done

# ─────────────────────────────────────────────────────────────
# 6. Vérifier que Caddy a un bloc pour dmntkm.com → on ne touche
#    pas au Caddyfile depuis la pipeline (action à risque),
#    on alerte juste si le bloc manque.
# ─────────────────────────────────────────────────────────────
if ! grep -q "^dmntkm.com" "${CADDY_DIR}/Caddyfile" 2>/dev/null; then
  log "⚠️  ATTENTION : pas de bloc 'dmntkm.com' dans ${CADDY_DIR}/Caddyfile"
  log "   Ajoutez-le manuellement puis : docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile"
fi

# ─────────────────────────────────────────────────────────────
# 7. Nettoyer les vieilles images Docker (gain de disque)
# ─────────────────────────────────────────────────────────────
log "Nettoyage des images Docker orphelines"
docker image prune -f >/dev/null 2>&1 || true

log "✅ Déploiement terminé"
docker ps --filter "name=site-${SITE_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
