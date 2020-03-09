/*
 1- Le server est le fichier lancé en premier
    Définit le port
    Gestion d'erreur
    Lancement du serveur http
    Ecoute du port défini

 2- L'app :
    Connection à la base de données
    CORS - Gestion du header
    Middlewares : bodyParser, paths statiques, gestion des routes

 3- Les scripts de routing (Un par type de donnée) :
    Import du controlleur
    Import des middlewares (Authentification, gestion de fichiers...)
    Définition des routes (get, post, delete...) et des actions associées

 4- Les scripts de controlleurs (Un par type de donnée) :
    Import du schéma de données utilisées
    Contient la logique métier, les actions réalisées pour chaque route.

 5- Les scripts de schema/modèles (Un par type de donnée) :
    Contiennent la définition des objets métier (Noms et types de données)

    

*/