// Gestion des événements en Js

/* Liste des événements principaux  et actions associées
click : Cliquer (appuyer puis relâcher) sur l'élément
dblclick : Double-cliquer sur l'élément
mouseover : Faire entrer le curseur sur l'élément
mouseout : Faire sortir le curseur de l'élément
mousedown : Appuyer (sans relâcher) sur le bouton gauche de la souris sur l'élément
mouseup : Relâcher le bouton gauche de la souris sur l'élément
mousemove : Faire déplacer le curseur sur l'élément
keydown : Appuyer (sans relâcher) sur une touche de clavier sur l'élément
keyup : Relâcher une touche de clavier sur l'élément
keypress : Frapper (appuyer puis relâcher) une touche de clavier sur l'élément
focus : « Cibler » l'élément
blur : Annuler le « ciblage » de l'élément
change : Changer la valeur d'un élément spécifique aux formulaires (input,checkbox, etc.)
input : Taper un caractère dans un champ de texte (son support n'est pas complet sur tous les navigateurs)
select : Sélectionner le contenu d'un champ de texte (input,textarea, etc.)

-Spécifique à l'élément <form> : 
submit : Envoyer le formulaire
reset : Réinitialiser le formulaire
*/

// Utilisation des événements dans le code HTML 
/*
==> <span onclick="alert('Voici le contenu de l\'élément que vous avez cliqué :\n\n' + this.innerHTML);">Cliquez-moi !</span>

==> <a href="#" onclick="alert('Vous avez cliqué !'); return false;">Cliquez-moi !</a>

==> <input id="input" type="text" size="50" value="Cliquez ici !" onfocus="this.value='Appuyez maintenant sur votre touche de tabulation.';" onblur="this.value='Cliquez ici !';"/>
==> <a href="#" onfocus="document.getElementById('input').value = 'Vous avez maintenant le focus sur le lien, bravo !';">Un lien bidon</a>
*/

// Bloquer l'action par défaut grâce à 'return false' ('return true' ou rien du tout permet de l'exécuter)
/*
==> <a href="http://www.siteduzero.com" onclick="alert('Vous avez cliqué !'); return false;">Cliquez-moi !</a>
*/

// Utilisation des événements au travers du DOM-0

var element = document.getElementById('clickme');

//Tous les événements précédés de 'on' sont utlisables en js. On doit leur affecter une fonction.
element.onclick = function() {
    alert("Vous m'avez cliqué !");
};
// Pour supprimer un événement :
element.onclick = function() {};

// Utilisation du DOM-2 (Plus récent, plus de possiblités)
var element = document.getElementById('clickme');
//La méthode addEventListener prend 3 paramètres : 
// le nom de l'événement, la fonction à exécuter et un booléen optionnel pour utiliser la phase de capture ou celle de bouillonnement
element.addEventListener('click', function() {
    alert("Vous m'avez cliqué !");
});
// Différence capture / bouillonnement 
/*
Capture : L'évènement sera appliqué au(x) parent(s) AVANT de l'être à l'élément => Ca descend
Bouillonnement : L'évènement sera appliqué au(x) parent(s) APRES de l'être à l'élément (Par défaut) => Ca remonte
*/

// Il est possible de créer plusieurs événements pour un même élément.
element.addEventListener('click', myFunction); // On crée l'événement
element.removeEventListener('click', myFunction); // On supprime l'événement en lui repassant les mêmes paramètres

// Objet Event
// Accessible seulement quand un événement est déclenché.

//Utilisation avec DOM-0
element.onclick = function(e) { // L'argument « e » va récupérer une référence vers l'objet « Event »
    alert(e.type); // Ceci affiche le type de l'événement (click, mouseover, etc.)
};

//Utilisation avec DOM-2
element.addEventListener('click', function(e) { // L'argument « e » va récupérer une référence vers l'objet « Event »
    alert(e.type); // Ceci affiche le type de l'événement (click, mouseover, etc.)
});

// Fonctionnalités de l'objet Event
// ==> Récupérer l'élément de l'événement déclenché.
var clickme = document.getElementById('clickme');

clickme.addEventListener('click', function(e) {
    e.target.innerHTML = 'Vous avez cliqué !'
});


// ==> Récupérer l'élément à l'origine de l'événement déclenché.
var parent1 = document.getElementById('parent1'),
    result = document.getElementById('result');

parent1.addEventListener('mouseover', function(e) {
    result.innerHTML = "L'élément déclencheur de l'événement \"mouseover\" possède l'ID : " + e.currentTarget.id
});


// Récupérer la position de la souris.
var position = document.getElementById('position');

document.addEventListener('mousemove', function(e) {
    position.innerHTML = 'Position X : ' + e.clientX + 'px<br />Position Y : ' + e.clientY + 'px'
});


