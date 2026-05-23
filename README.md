# Dahira Madjmahoun Nourayi — Site Web

Site officiel de la **Dahira Madjmahoun Nourayi** de Keur Massar, fondée en 2004 sous le nom béni de Serigne Saliou Mbacké.

## Stack
- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)

## Démarrage

```bash
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Structure des pages

- `/` — Accueil
- `/histoire` — Histoire & Spiritualité
- `/bureau` — Dieuwrine + commissions
- `/activites` — Café Touba, sonorisation, bâches, matériel de cuisine
- `/galerie` — Photos & vidéos
- `/contact` — Formulaire et coordonnées

## À compléter

- [ ] Ajouter le logo officiel (remplacer le bloc « DM » du Header)
- [ ] Ajouter les photos de la dahira dans `/public` et la galerie
- [ ] Renseigner le téléphone et l'email de contact (footer + page contact)
- [ ] Brancher un service d'envoi d'email (Resend / Formspree / Nodemailer) dans `src/app/api/contact/route.ts`
- [ ] Ajouter les horaires précis des récitations et activités

## Build production

```bash
npm run build
npm start
```
