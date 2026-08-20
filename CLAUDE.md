# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes

```bash
npm run dev      # serveur de développement (port 3000)
npm run build    # build de production, puis next-sitemap (postbuild)
npm run lint     # eslint (next/core-web-vitals)
npm start        # sert le build de production
```

Aucun framework de test n'est installé : il n'y a pas de tests à lancer. La
vérification se fait par `npm run lint` + `npm run build`, puis en inspectant le
HTML généré dans `.next/server/app/*.html` (utile pour contrôler les titres, les
canoniques et la hiérarchie des balises `h1`/`h2`).

**Ne jamais lancer `next build` pendant qu'un `next dev` tourne** : les deux
écrivent dans `.next` et se corrompent mutuellement (erreurs `Cannot find module
'./682.js'`, pages en 500). Pour vérifier un build sans toucher au serveur de
l'utilisateur, ajouter temporairement `distDir: process.env.NEXT_DIST_DIR ||
".next"` dans `next.config.mjs`, builder avec `NEXT_DIST_DIR=.next-verify npx
next build`, puis restaurer le fichier et supprimer le dossier.

## Architecture

Portfolio Next.js 14 (App Router), JavaScript sans TypeScript, Tailwind +
shadcn/ui (Radix), framer-motion, Swiper. Déployé sur https://monelcocou.com.

**Le contenu est du code.** Il n'y a pas de CMS : chaque page déclare ses données
dans des tableaux en haut de son propre fichier (`projects` dans
`app/realisations/page.jsx`, `expertises` dans `app/services/page.jsx`,
`about` / `experience` / `education` / `skills` dans `app/propos/page.jsx`).
Modifier le contenu = modifier ces tableaux.

**Toutes les pages sont des composants clients** (`"use client"`, imposé par
framer-motion et `useState`), donc aucune ne peut exporter `metadata`. Les
métadonnées passent par un `layout.jsx` serveur par route
(`app/{propos,services,realisations,contact}/layout.jsx`), qui appelle
`buildMetadata()` de `lib/metadata.js` et se contente de renvoyer `children`.
Next fusionne les métadonnées de façon **superficielle** : une page qui déclare
un `openGraph` partiel écrase celui du parent et perd l'image de partage — d'où
le helper, qui reconstruit l'objet complet. Toute nouvelle route a besoin de son
propre `layout.jsx`, sinon elle hérite du canonique de l'accueil et se déclare
comme un doublon.

**Échelle des z-index**, à respecter sous peine de casser les transitions :

| Couche | z |
|---|---|
| Overlay et flèches du slider (`app/realisations`) | 10 / 20 |
| Header collant (`components/Header.jsx`) | 30 |
| Animation d'escalier (`components/Stairs.jsx`) | 40 |
| Menu mobile (Radix Sheet) | 50 |

Le header doit rester **sous** l'escalier, sinon il flotte au-dessus du balayage
à chaque changement de page.

**Transitions.** `StairTransition` + `PageTransition` (montés dans le layout
racine) jouent un balayage d'environ 2,4 s à chaque navigation. C'est pourquoi
chaque page démarre son animation d'entrée avec `delay: 2.4` — toute nouvelle
page doit reprendre ce délai, sinon son contenu apparaît derrière le voile.

**Éléments collants.** La colonne d'onglets de `/propos` est en
`xl:sticky xl:top-40 xl:self-start`. Le `self-start` est indispensable : dans un
conteneur flex, un enfant est étiré en pleine hauteur par défaut et `sticky` n'a
alors aucun effet. Le `top-40` place la colonne sous le header collant (~140 px).

**Formulaire de contact.** `app/api/contact/route.js` envoie le message via
Resend, avec `replyTo` sur l'email du visiteur et un champ piège `website` contre
les robots. La clé vient de `RESEND_API_KEY` (voir `.env.example`) ; sans elle la
route répond 500 avec un message explicite et le formulaire affiche l'adresse
email en repli. L'expéditeur `onboarding@resend.dev` ne peut livrer qu'à
l'adresse du compte Resend ; passer à `contact@monelcocou.com` une fois le
domaine vérifié. **Cette route exige un runtime serveur** : un export statique
(`output: 'export'`) la casserait.

## Conventions de contenu

- **Le CV fait foi.** `public/assets/Monel-CV.pdf` est la source des faits
  (dates, intitulés, technologies, chiffres). Les affirmations du site doivent
  y correspondre : « plus de 8 ans », « 70 cliniques ». Une divergence entre le
  site et le CV décrédibilise la candidature.
- **Le site s'adresse à des recruteurs**, pas à des clients. La page `/services`
  a été transformée en page « Expertise » pour cette raison : on décrit des
  domaines de maîtrise adossés à des preuves, on ne vend pas de prestations.
  Éviter les superlatifs invérifiables (« expert », « passionné ») au profit de
  faits datés et chiffrés.
- **Une seule balise `h1` par page**, celle du bandeau de titre. Le logo du
  header est un `<span>` volontairement — il occupait autrefois le `h1` des cinq
  pages.
- **La police JetBrains Mono est monospace** : chaque caractère occupe exactement
  0,6 em, quel que soit le glyphe. À `text-[80px]`, cela fait 48 px par
  caractère. Un titre ou un libellé de bouton trop long déborde de façon
  parfaitement prévisible — calculer avant d'écrire (la colonne de texte du hero
  fait environ 600 px).

## Thème Tailwind

Couleurs personnalisées dans `tailwind.config.js` : `primary` (#1c1c22, le fond),
`accent` (#00ff99) et `accent-hover`. Classes utilitaires définies dans
`app/globals.css` : `.h1`, `.h2`, `.h3` (tailles de titres), `.text-outline` et
`.text-outline-hover` (contour de texte des grands numéros). Les variables CSS
shadcn de `globals.css` sont largement inutilisées : les composants de
`components/ui/` ont été restylés à la main avec ces couleurs.

## Divers

Le dossier `out/` est le résidu d'un ancien export statique (janvier 2025), il
n'est ni suivi par git ni régénéré — ne pas s'y fier comme référence.
