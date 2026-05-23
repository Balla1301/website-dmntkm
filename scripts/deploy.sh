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
# 3. (Re)Copier les fichiers Docker à chaque run (idempotent)
#    Permet de bénéficier d'une mise à jour des templates VPS.
# ─────────────────────────────────────────────────────────────
log "Mise en place des templates Docker"
cp "${TEMPLATES_DIR}/nextjs.Dockerfile"      source/Dockerfile
cp "${TEMPLATES_DIR}/nextjs.dockerignore"    source/.dockerignore

if [ ! -f docker-compose.yml ]; then
  cp "${TEMPLATES_DIR}/nextjs.docker-compose.yml" docker-compose.yml
  sed -i "s/site-<nom>/site-${SITE_NAME}/g" docker-compose.yml
  # Pas de .env pour ce site : on retire env_file
  sed -i '/env_file:/,/- \.env/d' docker-compose.yml
fi

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
