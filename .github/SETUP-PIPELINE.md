# Configuration de la pipeline GitHub Actions

Ce guide explique comment configurer le déploiement automatique de `dmntkm.com` à chaque push sur `main`.

## Vue d'ensemble

```
git push origin main
        │
        ▼
GitHub Actions (.github/workflows/deploy.yml)
        │
        │  SSH avec clé dédiée au déploiement
        ▼
VPS (/tmp/deploy-dmntkm.sh)
        │
        ▼
git clone OU git pull dans /srv/sites/dmntkm/source
        │
        ▼
docker compose up -d --build
        │
        ▼
Smoke test sur https://dmntkm.com
```

Le workflow s'exécute en ~3-5 min (la majorité étant le `npm install` + `next build` sur le VPS).

---

## Étape 1 — Générer une clé SSH dédiée au déploiement

**Sur votre poste local (PowerShell)** :

```powershell
ssh-keygen -t ed25519 -f "$env:USERPROFILE\.ssh\github_actions_dmntkm" -N '""' -C "github-actions-dmntkm"
```

Vous obtenez 2 fichiers :
- `github_actions_dmntkm` → clé **privée** (ira dans les secrets GitHub)
- `github_actions_dmntkm.pub` → clé **publique** (ira dans le VPS)

## Étape 2 — Installer la clé publique sur le VPS

**Sur votre poste** :

```powershell
# Affiche la clé publique
cat "$env:USERPROFILE\.ssh\github_actions_dmntkm.pub"
```

**Sur le VPS** (via votre SSH habituelle) :

```bash
# Ajouter la clé publique aux authorized_keys
echo "ssh-ed25519 AAAA... github-actions-dmntkm" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Remplacez `ssh-ed25519 AAAA... github-actions-dmntkm` par le contenu exact de votre `.pub`.

## Étape 3 — Autoriser le script à utiliser sudo sans mot de passe

Le script de déploiement utilise `sudo mkdir -p /srv/sites/dmntkm` et `sudo chown ...` la première fois. Pour que la pipeline ne soit pas bloquée par un prompt de mot de passe, autorisez `balla` à lancer ces deux commandes sans password.

**Sur le VPS** :

```bash
sudo visudo -f /etc/sudoers.d/balla-deploy
```

Collez :

```
balla ALL=(ALL) NOPASSWD: /usr/bin/mkdir -p /srv/sites/dmntkm, /usr/bin/chown -R balla\:balla /srv/sites/dmntkm
```

Sauvegardez (`Ctrl+O`, `Enter`, `Ctrl+X`). `visudo` valide la syntaxe avant d'écrire — s'il rejette, corrigez et recommencez.

> Note : ces deux commandes ne sont nécessaires qu'au **premier déploiement**. Une fois `/srv/sites/dmntkm` créé et possédé par `balla`, le script ne fera plus appel à `sudo`.

## Étape 4 — Tester la connexion SSH manuellement

**Sur votre poste** :

```powershell
ssh -i "$env:USERPROFILE\.ssh\github_actions_dmntkm" balla@109.199.113.103 "echo OK"
```

Vous devez voir `OK`. Si ça demande un mot de passe ou refuse, c'est que la clé publique n'a pas été ajoutée correctement à l'étape 2.

## Étape 5 — Configurer les secrets GitHub

Allez sur https://github.com/Balla1301/website-dmntkm/settings/secrets/actions

Ajoutez **3 secrets** :

| Nom | Valeur |
|---|---|
| `VPS_HOST` | `109.199.113.103` |
| `VPS_USER` | `balla` |
| `VPS_SSH_KEY` | Le contenu **complet** du fichier `github_actions_dmntkm` (la clé privée, depuis `-----BEGIN OPENSSH PRIVATE KEY-----` jusqu'à `-----END OPENSSH PRIVATE KEY-----` inclus) |

**Pour récupérer le contenu de la clé privée** :

```powershell
cat "$env:USERPROFILE\.ssh\github_actions_dmntkm"
```

Copiez tout, y compris les lignes BEGIN/END, et collez dans le champ `VPS_SSH_KEY`.

## Étape 6 — (Optionnel) Créer l'environnement "production"

Pour ajouter une couche de sécurité (approval manuel, restriction de branche…) :

1. https://github.com/Balla1301/website-dmntkm/settings/environments
2. **New environment** → nom : `production`
3. Cochez **Required reviewers** → ajoutez `Balla1301` si vous voulez devoir approuver chaque déploiement
4. **Deployment branches** → "Selected branches" → `main`

Cette étape est **facultative** : le workflow référence `environment: production` même s'il n'est pas configuré (GitHub le crée à la volée).

## Étape 7 — Premier déclenchement

```bash
# Faire un petit commit
git commit --allow-empty -m "Trigger first CI deploy"
git push origin main
```

Suivez l'exécution sur https://github.com/Balla1301/website-dmntkm/actions

## Vérifier que ça marche

À la fin du job, l'étape **Smoke test** doit afficher `HTTP/2 200`. Sinon, ouvrez les logs des étapes précédentes pour identifier le blocage.

## Logs du déploiement (sur le VPS)

```bash
# Logs du conteneur applicatif
docker logs site-dmntkm --tail 100

# Logs Caddy si problème HTTPS
docker logs caddy --tail 50 | grep dmntkm
```

## Rollback manuel

Si un déploiement casse la prod :

```bash
ssh -i ~/.ssh/vps_hub_europe balla@109.199.113.103
cd /srv/sites/dmntkm/source
git log --oneline -5            # repérer le commit OK précédent
git reset --hard <sha>
cd ..
docker compose up -d --build
```

## Désactiver temporairement la pipeline

Renommez `.github/workflows/deploy.yml` en `.github/workflows/deploy.yml.disabled` puis push. Ou bien sur GitHub : Settings → Actions → Disable Actions.
