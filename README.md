# Joris Guyonnet — Site Vitrine

Site personnel de présentation pour la création de sites web.

---

## Structure du projet

```
joris-guyonnet-site/
│
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Tous les styles
├── js/
│   └── main.js         ← Interactions (menu, animations, formulaire)
├── assets/             ← Dossier pour tes images (logo, photo...)
└── README.md           ← Ce fichier
```

---

## Déployer sur GitHub + Netlify

### Étape 1 — GitHub

1. Va sur [github.com](https://github.com) et connecte-toi
2. Clique sur **"New repository"**
3. Nom du repo : `joris-guyonnet-site`
4. Laisse en **Public**, sans README (on en a déjà un)
5. Clique **"Create repository"**
6. Ensuite, upload tous les fichiers :
   - Clique **"uploading an existing file"**
   - Glisse tout le dossier `joris-guyonnet-site`
   - Clique **"Commit changes"**

### Étape 2 — Netlify

1. Va sur [netlify.com](https://netlify.com) et connecte-toi avec GitHub
2. Clique **"Add new site" > "Import an existing project"**
3. Choisis **GitHub** et sélectionne `joris-guyonnet-site`
4. Laisse tout par défaut, clique **"Deploy site"**
5. Ton site est en ligne en 30 secondes ! 🎉

---

## Activer le formulaire de contact (Netlify Forms)

Pour recevoir les messages du formulaire par email, remplace dans `index.html` :

```html
<form class="contact-form" id="contactForm">
```

par :

```html
<form class="contact-form" id="contactForm" name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
```

Ensuite dans `js/main.js`, supprime le `e.preventDefault()` de la soumission du formulaire.

Netlify enverra les messages directement sur ton email Netlify.

---

## Personnaliser le site

| Ce que tu veux changer | Où le modifier |
|---|---|
| Ton nom, description | `index.html` — section `.hero` |
| Tes tarifs | `index.html` — section `#tarifs` |
| Tes services | `index.html` — section `#services` |
| Les couleurs | `css/style.css` — variables `:root` |
| Ajouter une photo | `assets/` + ajouter une `<img>` dans le HTML |

---

## Couleurs principales

```css
--gold: #c9a84c        /* Or principal */
--gold-light: #e8c97a  /* Or clair (hover) */
--dark: #0e0d0b        /* Fond noir */
--text: #e8e2d6        /* Texte clair */
--muted: #8a8070       /* Texte secondaire */
```

---

Fait avec ❤️ par Claude pour Joris Guyonnet
