# Déploiement

Ce projet utilise une **pipeline GitHub Actions** pour déployer automatiquement sur `dmntkm.com` à chaque push sur `main`.

➡️ **Configuration initiale** : voir [.github/SETUP-PIPELINE.md](.github/SETUP-PIPELINE.md)

➡️ **Workflow** : [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

➡️ **Script de déploiement** (exécuté sur le VPS) : [scripts/deploy.sh](scripts/deploy.sh)

## Mise à jour du site

```bash
git add ...
git commit -m "..."
git push origin main
```

C'est tout. La pipeline se charge du reste. Suivi sur https://github.com/Balla1301/website-dmntkm/actions
