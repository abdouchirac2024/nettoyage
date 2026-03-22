# ÉclatNet Pro - Site Web de Nettoyage Professionnel

Site web professionnel pour une entreprise de nettoyage commercial et résidentiel au Canada, développé avec React.js et Tailwind CSS.

## Technologies

- **React 19** avec Vite
- **Tailwind CSS v4** (via @tailwindcss/vite)
- **React Router v7** pour la navigation
- **Lucide React** pour les icônes
- **Bilingue** FR / EN

## Structure du Projet

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   └── ui/              # WhatsAppButton, ScrollToTop, WelcomePopup, SectionTitle, ServiceCard
├── pages/               # HomePage, ServicesPage, AboutPage, QuotePage, TestimonialsPage, ContactPage, BlogPage, FaqPage
├── data/                # services.js, testimonials.js, blogPosts.js
├── hooks/               # useLanguage.jsx, useScrollAnimation.js
├── i18n/                # translations.js (FR/EN)
└── assets/
```

## Pages

| Route           | Page                          |
|-----------------|-------------------------------|
| `/`             | Accueil                       |
| `/services`     | Tous les services             |
| `/about`        | À propos                      |
| `/devis`        | Tarifs & Devis                |
| `/temoignages`  | Témoignages & Réalisations    |
| `/contact`      | Contact                       |
| `/blog`         | Blog / Conseils               |
| `/faq`          | Questions fréquentes          |

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5173`

## Build Production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`.

## Prévisualisation du Build

```bash
npm run preview
```

## Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build command : `npm run build`
2. Publish directory : `dist`
3. Ajouter une règle de redirection : `/*  /index.html  200`

### Serveur classique (Apache/Nginx)
1. Exécuter `npm run build`
2. Copier le contenu de `dist/` vers le serveur web
3. Configurer la réécriture d'URL pour le SPA :

**Nginx :**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess) :**
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Personnalisation

### Informations de l'entreprise
- Modifier les coordonnées dans `src/i18n/translations.js`
- Modifier le numéro WhatsApp dans `src/components/ui/WhatsAppButton.jsx`
- Modifier les liens sociaux dans `src/components/layout/Footer.jsx`

### Services
- Éditer `src/data/services.js` pour ajouter/modifier des services

### Images
Remplacer les URLs Unsplash par vos propres images. Images recommandées :
- **Hero** : Photo de nettoyage professionnel (1920x1080)
- **Services** : Photos par catégorie (800x600)
- **Équipe** : Portraits professionnels (300x300)
- **Blog** : Photos thématiques (600x400)

Sources recommandées : [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)

### Couleurs
Les couleurs sont définies dans `src/index.css` via `@theme` (Tailwind CSS v4).

## Fonctionnalités

- Design responsive mobile-first
- Navigation bilingue FR / EN
- Bouton WhatsApp flottant
- Pop-up de bienvenue (10% de réduction)
- Carrousel de témoignages
- Formulaire de devis complet
- Animations au scroll
- SEO optimisé (balises meta, structure H1-H3)
- Accessible (WCAG 2.1)
