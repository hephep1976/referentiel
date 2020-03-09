var div1 = document.createElement('div');
div1.id = 'divTP1';
div1.appendChild(document.createTextNode('Le '));
var strong1 = document.createElement('strong');
strong1.appendChild(document.createTextNode('World Wide Web Consortium'));
div1.appendChild(strong1);
div1.appendChild(document.createTextNode(', abrégé par le sigle'));
var strong2 = document.createElement('strong');
strong2.appendChild(document.createTextNode('W3C'));
div1.appendChild(strong2);
div1.appendChild(document.createTextNode(', est un'));
var a1 = document.createElement('a');
a1.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
a1.title = 'organisme de normalisation';
a1.appendChild(document.createTextNode(' organisme de standardisation'));
div1.appendChild(a1);
div1.appendChild(
    document.createTextNode(
        ' à but non-lucratif chargé de promouvoir la compatibilité des technologies du'
    )
);
var a2 = document.createElement('a');
a2.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
a2.title = 'World Wide Web';
a2.appendChild(document.createTextNode(' World Wide Web'));
div1.appendChild(a2);
div1.appendChild(document.createTextNode('.'));
document.body.appendChild(div1);