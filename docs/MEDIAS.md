# Images et CV — séance 5

Le site sait afficher les images des projets et un CV PDF, mais aucun fichier fictif n’est ajouté.

## Ajouter une image
1. Déposer une photo ou capture du projet dans `frontend/public/images/projets/` (WebP ou JPEG, idéalement ≤ 200 Ko).
2. Dans `backend/data/projets.json`, ajouter les champs `image` (ex. `/images/projets/domo-smart.webp`) et `imageAlt` (description de la vraie image) au projet concerné.

## Ajouter le CV
1. Déposer le CV PDF dans `frontend/public/` (sans adresse personnelle ni autres données sensibles si le site est public).
2. Ajouter le champ `cv` dans `backend/data/profil.json` (ex. `/cv.pdf`). Le bouton apparaît automatiquement sur l’accueil et la page À propos.

## Compléter À propos
Les champs optionnels `apropos` (tableau de textes), `langues` (tableau d’objets `langue`, `niveau`) et `interets` (tableau de textes) peuvent être ajoutés à `backend/data/profil.json` uniquement avec les informations réelles de Jonathan.
