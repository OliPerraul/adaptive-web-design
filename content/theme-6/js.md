## JavaScript
*JS pour les intimes*

-----

## Définition et contexte

Langage de programmation multiparadigmes (prototype, objet, impératif et fonctionnel) à typage dynamique faible. Sa syntaxe est inspirée de Java.

Initialement conçu pour faire des pages web dynamiques, il est maintenant aussi utilisé du côté serveur (NodeJS) et DB (MongoDB, CouchDB, etc.). Son écosystème est l'un des plus larges au monde notamment grâce à NPM.

-----

## Évolution

### Première version
1995

### ECMAScript - Premier standard
1997

### ES5 - Navigateurs modernes
2009

### ES6 et ES7 - Transpilage et NodeJS
2015+

-----

## Javascript côté client

Dans un fichier HTML
```html
<!-- Directement dans la page -->
<script>
  // Votre code JS
</script>

<!-- Fichier externe -->
<script src="script.js"></script>
```

Dans la console d'un navigateur (démonstration en classe)

-----

## Javascript côté serveur

Nécessite l'installation d'une librairie comme NodeJS. Dans un terminal:

```sh
# Exécution d'un fichier
node script.js

# Console interactive
node
```

[Référence complémentaire](https://nodejs.org/en/docs/guides/getting-started-guide/)

-----

## Types primitifs

Type | Exemple
--- | ---
Boolean | `true` `false`
Number | `1` `1.234` `+Infinity` `Nan`
String | `'hello'` `"world"`
Null | `null`
Undefined | `undefined`
Symbol (ES6) | `Symbol()` `Symbol(1)` `Symbol('foo')`

[Référence complémentaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es)

-----

## Opérateurs

Opérateurs | Exemples
--- | ---
Affectation | `a = 1;`
Mathématiques | `1 + 1` `1 - 1` `1 * 1` `1 / 1` `1 % 1`
Logiques | `true && false` `1 < 2` `!true`
typeof | `typeof 1`

[Référence complémentaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs)

-----

## Mise en garde

Pour rappel, JavaScript est un langage à typage dynamique faible. Qu'est-ce que cela implique? Il suffit d'interpréter les expressions suivantes dans une console afin de constater les pièges potentiels.

```js
'2' + 1
'2' - 1
1 + []
0 == '0'
true + true
3 > 2 > 1
null == undefined
typeof []
9999999999999999
0.1 + 0.2 == 0.3
0.1 + 0.2
```

[Vidéo complémentaire](https://www.youtube.com/watch?v=et8xNAc2ic8)

-----

## Déclaration de variables

```js
// Variable à portée de fonction
var a = 1;

// Constante
const b = 2;

// ES6: variable à portée de bloc
let c = 3;
```

-----

## Objets

Un objet peut être vu comme une collection de propriétés grâce à laquelle on associe une clé à une valeur afin de former une structure de données complète.

```js
var mon_objet = {
  nom: 'John Doe',
  age: 29,
  est_actif: true,
  adresse: {
    ville: 'Sherbrooke'
  },
  amis: []
}
```

[Référence complémentaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es)

-----

## Objets (suite)

Une fois une objet déclaré, il vous possible de le modifier ou de l'utiliser de la manière suivante:

```js
var mon_objet = {
  nom: 'John Doe',
  adresse: {
    ville: 'Sherbrooke'
  }
}

console.log(mon_objet.nom);
console.log(mon_objet.adresse.ville);

mon_objet.nom = 'Dr John Doe';
mon_objet.nouvelle_propriete = 123;
```

-----

## Tableaux

Les tableaux sont une collection de données vous permettant d'emmagasiner des valeurs dans un certain ordre et d'y accéder selon leur position (index).

```js
var mon_tableau = [1, false, {nom: 'John'}];

console.log(mon_tableau[0]);
console.log(mon_tableau[3]);

mon_tableau.push(4);
```

[Référence complémentaire](https://www.w3schools.com/js/js_arrays.asp)

-----

## Fonctions

En JavaScript, les fonctions peuvent être déclarées, affectées à des variables et même utilisées comme valeur ou argument.

```js
function ma_fonction (a, b) {
  return a < b;
}

var comparateur = ma_fonction;

var un_objet = {
  a: 1,
  b: 2,
  comparer: function () {
    return this.a < this.b;
  }
}
```

[Référence complémentaire](https://www.w3schools.com/js/js_functions.asp)

-----

## Fonctions anonymes ou fléchées (ES6)

Elles servent entre autres à déclarer de courtes fonctions utilitaires, car elles n'ont pas accès aux contextes comme `this`.

```js
let mots = [
  'hello',
  'world'
];

mots.map(mot => mot.length);
```

[Référence complémentaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)

-----

## Boucles

```js
// Méthode for traditionnelle (comme en Java ou C)
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Méthode while traditionnelle (comme en Java ou C)
var i = 0;
while (i < 10) {
  console.log(i++);
}

// Méthode for in
var mots = ['hello', 'world'];
for (var i in mots) {
  console.log(i);
  console.log(mots[i]);
}

// Méthode for of
for (var mot of mots) {
  console.log(mot);
}
```

[Référence complémentaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)

-----

## Boucles (suite)

```js
var mots = ['hello', 'world'];

// Itération via l'index
for (var i in mots) {
  console.log(i);
  console.log(mots[i]);
}

// Itération via la valeur
for (var mot of mots) {
  console.log(mot);
}

// Itération fonctionnelle
mots.forEach(mot => console.log(mot));
```

[Performance de ces mécanismes?](https://medium.com/kbdev/voyage-to-the-most-efficient-loop-in-nodejs-and-a-bit-js-5961d4524c2e)

-----

## Librairies populaires

Voici quelques librairies populaires:

[lodash](https://lodash.com/)

[Vue.js](https://vuejs.org/)

[Angular](https://angular.io/)

[React](https://reactjs.org/)

[jQuery](https://jquery.com/)

-----

## Comment exploiter le JS sur une page web?

Le JavaScript permet d'ajouter du dynamisme sur une page web. Comment? Il a accès au  DOM (éléments du HTML) et peut le modifier afin ajouter des éléments, modifier les classes CSS, changer l'ordre, etc.

Voici quelques exemples d'utilisations:

* Popup
* Validation de formulaire
* Sous-menu
* Chargement AJAX de données
* Et bien plus!

-----

## Exemple - Alerte

HTML
```html
<button onclick="ma_fonction()">Ouvrir une alerte</button>
```

JS
```js
function ma_fonction () {
  alert('Hello world!');
}
```

Démonstration:
<button onclick="ma_fonction()">Ouvrir une alerte</button>

-----

## Exemples supplémentaires

En classe
