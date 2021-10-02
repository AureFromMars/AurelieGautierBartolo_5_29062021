# Orinoco, site Internet de e-commerce

Projet 5 du parcours Développeur Web d'OpenClassrooms.
Compétences utilisées/développées :
- Javascript
- Bootstrap5 / quelques snippet, mais j'ai préféré transformer en flex plutôt que grid
- scss
- Consommation d'API
- Planification de tests unitaires

### Installation et accès à Orinoco
- [Spécifications](<https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/P5_Spe%CC%81cifications%20fonctionnelles%20Orinoco%20(2).pdf>)
- [x] Activer WSL:Debian
- [x] Un dossier pour l'API (backend) : repository https://github.com/OpenClassrooms-Student-Center/JWDP5
- [x] Un dossier pour le site (frontend) : repository https://github.com/AureFromMars/AurelieGautierBartolo_5_29062021
- [x] Installer npm : npm install
- [x] Installer sass : npm run sass:watch
- [x] Installer Live Server
- [x] Lancer Live Server pour accéder à Orinoco (voir le port utilisé)
- [x] Activer l'API : npm run start
- [x] Accéder à la page d'accueil en modifiant le port du localhost selon celui utilisé par Live Server http://localhost:5500/public/index.html

### Reste à faire

- [x] Référencement naturel
- [x] Accessibilité
- [x] Refactorisation du code JS (surtout les fonctions de création de carte !)
- [x] Compte client
- [x] Page de contact
- [x] Lien vers les pages de réseaux sociaux
- [x] Créer des pages en lien dans le footer
- [x] Envisager un panier dropdown
- [x] Créer des pages en lien dans le footer
- [x] Finaliser la


/** 
PLAN DE TEST, pas TEST

excel avec les fichier et fonctions X (qui sert à quoi, résultat attendu), de la ligne Y, pour la tester quoi faire
pour tester la fonction d'affichage des produits de la page d'accueil, il faut l'appeler et vérifier que les produits s'affichent bien dans la page, causes possibles : variable furniture vide, n'existe pas, le appendchild n'existe pas si modif HTML
voir TDD

*/