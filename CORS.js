//CORS = Cross Origin Resource Sharing
// Sécurité afin de bloquer les appels HTTP provenant de serveurs différents

// Solution : Ajouter un header à la réponse

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //Accepte les requêtes de toute adresse d'origine
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' //Ajoute les headers mentionnés à la requête anvoyée à l'API
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS' //Accepte ce type de requêtes
    );
    next();
});