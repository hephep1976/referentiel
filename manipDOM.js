// Manipulation du DOM en JavaScript
// Le DOM est un arbre avec une hiérarchie parents / enfants. Les éléments sont appelés des 'nodes' (Noeuds).
// Le texte d'une page est un noeud à part entière (Appelé 'text').

// L'objet 'window' représente la fenêtre du navigateur. Il est implicite, on n'a pas besoin de le citer (Par ex. dans window.alert()), sauf si on utilise des frames.
// Une variable globale est une propriété de l'objet 'window'
// Toute variable non déclarée est une propriété de l'objet 'window'

// L'objet 'document' est un sous-objet de 'window'. Il représente la page Web, plus précisément la balise <html></html>

// Accéder aux éléments :
document.getElementById('id_element');
document.getElementsByTagName('div'); // Renvoie une collection d'éléments
document.getElementsByName('toto'); // Renvoie une collection d'éléments qui ont un attribut name (Peu utilisé)
// Ces méthodes sont utilisables sur n'importe quel élément html.
// Si le paramètre est '*', la méthode renvoie TOUS les éléments.

document.querySelector('#menu .item span'); // Renvoie le premier élément correspondant au sélecteur
document.querySelectorAll('#menu .item span'); //Renvoie une collection de tous les éléments correspondant au sélecteur.
// Ces méthodes fonctionnent avec les sélecteurs CSS.

document.querySelector('#menu .item span').innerHTML; // Le contenu html de l'élement sélectionné.
document.querySelector('#menu .item span').textContent; //Le contenu texte de l'élément (Sans les balises). Pour IE < 9.0 : innerText

document.querySelector('#menu .item span').getAttribute('href'); // Permet de récupérer un attribut.
document
    .querySelector('#menu .item span')
    .setAttribute('href', 'http://www.google.fr'); // Permet de modifier un attribut.

// 'href' ou 'value' (Pour la valeur d'un formulaire) sont des propriétés d'éléments accessibles directement.
document.querySelector('#menu .item span').className; // Propriété donnant le nom de la classe.
// Si l'élément a plusieurs classes, alors il faut splitter le  résultat (Chaîne de caractères séparés par des espaces)

//Pour tester le navigateur :
txt = div.textContent || div.innerText || ''; // Si textContent existe, on l'utilise, sinon on essaie d'utiliser innerText (IE < 9.0) sinon, c'est que le texte est vide.

document.querySelector('#menu .item span').parentNode; //Permet de retrouver l'élément parent.
document.querySelector('#menu .item span').nodeType;
/* Renvoie le type de l'élément ciblé :
1 : Nœud élément
2 : Nœud attribut
3 : Nœud texte
4 : Nœud pour passage CDATA (relatif au XML)
5 : Nœud pour référence d'entité
6 : Nœud pour entité
7 : Nœud pour instruction de traitement
8 : Nœud pour commentaire
9 : Nœud document
10 : Nœud type de document
11 : Nœud de fragment de document
12 : Nœud pour notation 
 */
document.querySelector('#menu .item span').nodeName; // Renvoie le nom du noeud en majuscules

document.querySelector('#menu .item span').firstChild; // Premier enfant de l'élément (firstElementChild pour ne prendre en compte que les éléments HTML - pas les textes par ex.)
document.querySelector('#menu .item span').lastChild; // Dernier enfant de l'élément (lastElementChild pour ne prendre en compte que les éléments HTML - pas les textes par ex.)
document.querySelector('#menu .item span').nodeValue; // Récupère le contenutextuel de l'élement (Propriété data fonctionne de la même manière)
document.querySelector('#menu .item span').childNodes; // Récupère une collection d'éléments enfant
document.querySelector('#menu .item span').nextSibling; // Récupère le noeud suivant (previousElementSibling ne prend en compte que les éléments)
document.querySelector('#menu .item span').previousSibling; // Récupère le noeud précédent (previousElementSibling ne prend en compte que les éléments)

var elt = document.createElement('div'); // Crée un élément dans le document. Attention, il n'est pas encore placé ni affiché.
var eltText = document.createTextNode('Ceci est un texte'); // Crée un élément texte
elt.appendChild(eltText); // Ajoute l'élément texte au premier élément
document.querySelector('#menu .item span').appendChild(elt); // Ajoute un élement enfant au noeud. Il sera le dernier enfant.

document.querySelector('#menu .item span').cloneNode(true); //Clone le noeud avec (true) ou sans (false) les noeuds enfants et les attributs.
document.querySelector('#menu .item span').replaceChild(newNode, oldNode); // Remplace un noeud par un autre
document.querySelector('#menu .item span').removeChild(node); //Permet de supprimer un noeud. removeChild renvoie l'élément supprimé
document.querySelector('#menu .item span').hasChildNodes(); // Renvoie true si l'élément a des enfants, false sinon.
document.querySelector('#menu .item span').insertBefore(newNode, nodeBefore); // Insère le nouvel élément avant un autre.

function insertAfter(newElement, afterElement) {
    // La fonction insertAfer n'existe pas.
    var parent = afterElement.parentNode;

    if (parent.lastChild === afterElement) {
        // Si le dernier élément est le même que l'élément après lequel on veut insérer, il suffit de faire appendChild()
        parent.appendChild(newElement);
    } else {
        // Dans le cas contraire, on fait un insertBefore() sur l'élément suivant
        parent.insertBefore(newElement, afterElement.nextSibling);
    }
}