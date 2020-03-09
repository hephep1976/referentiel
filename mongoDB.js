// Installer le package mongoose

const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority', //Chaine de connexion à MongoDB (A copier dans le compte MongoDB)
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));