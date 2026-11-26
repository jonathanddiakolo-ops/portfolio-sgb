# Prompts du portfolio SGB

Ce document conserve les consignes données à l’IA et les reformule en prompts réutilisables. Il ne s’agit pas d’une transcription mot à mot de la conversation.

## Contexte du projet

> Accompagne-moi étape par étape dans la création de mon portfolio académique Smart & Green Building, en suivant les supports de cours. Utilise React et Vite pour le frontend, Node.js et Express pour le backend. Travaille sur mon dépôt GitHub existant, avec un code simple et lisible.

## Personnaliser le contenu

> Remplace les données fictives de portfolio.json par mon profil, mon cursus et mes projets académiques. Ne mentionne pas RMS Conseil et n’invente pas de formations ou de projets. Conserve la structure JSON du cours.

## Construire les composants React

> Crée les composants Navbar, Hero, ProjetCard, CompetenceGroupe et Footer en suivant les diapositives 15 et 16 de la séance 3. Fais passer les informations par les props, utilise map et key pour les listes, puis assemble les composants dans App.jsx. Ajoute une mise en page CSS responsive sans dépendance supplémentaire.

## Vérifier les modifications

> Indique les fichiers modifiés, explique leur rôle et donne les liens vers les commits GitHub. Distingue un aperçu visuel d’un site réellement compilé ou déployé.

## Séances 4 et 5 : API, recherche, thème et médias

> Connecte les pages React à Express avec useApi, Vite proxy et React Router. Conserve les données académiques dans le backend et gère les états de chargement et d’erreur.

> Ajoute une recherche contrôlée qui filtre le titre, le résumé, les tags et les technologies, combinée au filtre de thème, ainsi qu’un mode clair/sombre mémorisé dans localStorage. Prépare une page À propos et le support des médias réels sans inventer de CV ni d’images.
