# CYBERCITY — Edition 2.0

**Portfolio académique de Jonathan Daniel Diakolo**  
Manager en ingénierie informatique, option Smart & Green Building — ESIEE-IT (2025–2027).

Ce projet a été réalisé dans le cadre du module de développement Web frontend/backend. Il présente mon parcours, mes compétences et mes projets académiques à travers une interface interactive inspirée des univers futuristes.

## Fonctionnalités

- Menu CYBERCITY navigable à la souris et au clavier, fond animé et transitions glitch.
- Présentation et frise chronologique du parcours académique.
- Liste des projets, recherche textuelle, filtrage par thème et pages détaillées.
- Compétences avec niveaux de maîtrise.
- Page À propos : profil, langues sur six étoiles, centres d'intérêt, galerie et téléchargement du CV.
- Modes clair et sombre mémorisés dans le navigateur, option de désactivation des animations.

## Projets académiques

| Projet | Année | Technologies |
| --- | --- | --- |
| Domo’Smart — Domotique connectée | 2026 | Flutter, MQTT, Domoticz, Z-Wave, Raspberry Pi |
| Simulation de l'éclairage d'une salle de classe | 2025 | DIALux evo |
| Alimentation électrique d'une voiture SNCF | 2024 | Statodyne, redresseur, régulateur, batterie 24 V |

Les illustrations des projets sont des représentations générées par IA, et non des photos ou captures originales des réalisations.

## Technologies utilisées

- **Frontend :** React, Vite, React Router, JavaScript, CSS.
- **Backend :** Node.js, Express, API REST et middleware CORS.
- **Données :** fichiers JSON versionnés, sans base de données.
- **Versionnement :** Git et GitHub.

## Structure du projet

```text
portfolio-sgb/
├── frontend/
│   ├── public/       # Illustrations, logo et CV
│   └── src/          # Pages React, composants, hooks et styles
├── backend/
│   ├── data/         # Profil, projets, compétences et parcours
│   ├── lib/          # Lecture des données
│   ├── routes/       # Routes de l'API
│   ├── server.js
│   └── tests.http
├── docs/             # Documentation et prompts
└── README.md
```

## Installation et lancement en local

Prérequis : Git, Node.js (version compatible : 22.22 ou supérieure ; par exemple Node 24) et npm.

Cloner le dépôt avec un compte GitHub disposant d'un accès au projet :

```bash
git clone https://github.com/jonathanddiakolo-ops/portfolio-sgb.git
cd portfolio-sgb
```

### Terminal 1 — Backend

Depuis la racine du dépôt :

```bash
cd backend
npm ci
npm run dev
```

API : [http://localhost:3000](http://localhost:3000).

### Terminal 2 — Frontend

Ouvrir un deuxième terminal à la racine du dépôt :

```bash
cd frontend
npm ci
npm run dev
```

Portfolio : [http://localhost:5173](http://localhost:5173).

Les deux serveurs doivent rester actifs. En développement, Vite redirige les requêtes /api vers le backend sur le port 3000.

Sous Windows, si PowerShell bloque les scripts npm, utiliser `npm.cmd` à la place de `npm`. Si Node est installé dans son dossier standard mais absent du PATH de la session :

```powershell
$env:Path += ";C:\Program Files\nodejs"
```

### Récupérer les modifications

Dans un terminal ouvert à la racine du dépôt :

```bash
git pull origin main
```

Après une modification des fichiers JSON, redémarrer le backend (Ctrl+C, puis `npm run dev` depuis backend/) et actualiser le portfolio.

## Routes de l'API

| Méthode | Route | Description |
| --- | --- | --- |
| GET | / | Vérifier le serveur |
| GET | /api/profil | Profil et informations personnelles |
| GET | /api/projets | Liste des projets |
| GET | /api/projets?tag=IoT | Filtrer par tag |
| GET | /api/projets/:slug | Détail d'un projet |
| GET | /api/competences | Compétences |
| GET | /api/parcours | Cursus académique |

Les routes inconnues et les projets inexistants renvoient un statut HTTP 404.

## Vérifications

Depuis le dossier frontend/ :

```bash
npm run lint
npm run build
```

Pour tester les routes HTTP, démarrer le backend puis utiliser [backend/tests.http](backend/tests.http) avec l'extension REST Client de VS Code.

## Documentation

- [Prompts et démarche de développement](docs/PROMPTS.md)
- [Gestion des images et du CV](docs/MEDIAS.md)

## État du projet

Le portfolio fonctionne en local. Le déploiement sur Vercel et les vérifications finales sont les prochaines étapes. Le dépôt reste privé : aucune publication du site n'est effectuée à ce stade.
