## CSS
*Cascade Style Sheets*

![](https://i.imgur.com/Q3cUg29.gif)

[Source](https://i.imgur.com/Q3cUg29.gif)

-----

## Définition et contexte


Le CSS a été créé afin de séparer la mise en forme (style) du contenu (HTML). Ainsi, un peut faire du code plus modulaire et dynamique.

Le CSS peut se retrouver imbriqué directement dans le HTML, mais idéalement il se retrouve dans des fichiers externes.

-----

## Évolution

### CSS1 - Les débuts
1996: environ 50 propriétés

### CSS2 - La consolidation
1998: environ 120 propriétés

### CSS3 - L'explosion
2010-2016: environ 300 propriétés

### CSS4 - Le futur
À venir dans un navigateur près de chez vous!

-----

## Un peu de vocabulaire

Terme | Définition | Exemple
--- | --- | ---
Propriété | Caractéristiques modifiables via le CSS (plus de 300) | color
Valeur | Donnée associée à une propriété | #ff0000
Déclaration | Association d'un couple propriété - valeur | color: #ff0000;
Sélecteur | Pointeur vers un ou des éléments HTML | .nom-pertinent
Classe | Identifiant CSS donné à des balises HTML | nom-pertinent
Bloc de déclaration | Regroupement de déclarations et sélecteurs

[Source et référence complémentaire](https://developer.mozilla.org/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/La_syntaxe)

-----

## Exemples

HTML
```html
<p style="color: #ff0000;">Hello world!</p>
<p class="nom-pertinent">Le CSS est incroyable!</p>
```

CSS
```css
.nom-pertinent {
  color: #00ff00;
}
```

Résultat
<p style="color: #ff0000;">Hello world!</p>
<p style="color: #00ff00;">Le CSS est incroyable!</p>

-----

## Feuille de style externe

```html
<!DOCTYPE html>
<html>

  <head>
    <title>Titre de ma page</title>
    <link href="url" type="text/css" rel="stylesheet" />
  </head>

  <body>
    <h1>Titre</h1>
    <p class="nom-pertinent">Paragraphe</p>
  </body>

</html>
```

-----

## Exemple de feuille de style

```css
/* Fichier externe, exemple style.css */
h1 {
  font-size: 24px;
}

.nom-pertinent {
  color: #00ff00;
}
```

-----

## Sélecteurs

```html
<ul id="identifiant-unique" class="ma-liste">
  <li class="mon-item">Item A</li>
  <li>Item B</li>
</ul>
```

Sélecteur | Exemple
--- | ---
Classe | `.mon-item`
ID | `#mon-item`
Élément | `li`
Combinaison | `.ma-liste, .mon-item`
Relationnel | `.ma-liste .mon-item`
... | [Liste des sélecteurs CSS](https://www.w3schools.com/cssref/css_selectors.asp)

-----

## Pseudo-sélecteurs

```html
<ul class="ma-liste">
  <li>
    <a href="http://google.com">Item A</a>
  </li>
</ul>
```

Sélecteur | Exemple
--- | ---
État | `a:hover`
Position | `.maliste:first-child`
Négation | `:not(.maliste:first-child)`
... | [Liste des pseudo-sélecteurs CSS](https://www.w3schools.com/cssref/css_selectors.asp)

-----

## Unités de valeurs

* Pourcentage: `10%`
* Pixel: `10px`
* Couleur HEXA: `#ff0000`
* Couleur RGBA: `rgba(255, 0, 0, 1)`
* ...: [Liste des unités](https://www.w3schools.com/cssref/css_units.asp)

-----

## Héritage

Quel ordre a préséance en cas de multiples déclarations?

1. Modificateur de priorité `!important` (à proscrire)
1. Style imbriqué (*inline*) dans le HTML
1. Feuilles de style en **ordre de traitement**
1. Paramètre par défaut du navigateur (cela implique quoi?)

-----

<div style="position: relative; display: inline-block; width: 60%; border: 2px dashed #000; padding: 5%; margin: 0 0 25px 0;">
<div style="position: absolute; left: 0; top: -60px;">Margin</div>
  <div style="position: relative; width: 80%; border: 3px solid #000; padding: 10%">
  <div style="position: absolute; left: 0; top: -60px;">Border</div>
    <div style="position: relative; width: 90%; padding: 5%; border: 2px dashed #000;">
    <div style="position: absolute; left: 0; top: -60px;">Padding</div>
      <h3 style="margin: 0;">Le modèle de boîte</h3>
    </div>
  </div>
</div>

[Référence complémentaire](https://developer.mozilla.org/fr/docs/Apprendre/CSS/Introduction_%C3%A0_CSS/Le_mod%C3%A8le_de_bo%C3%AEte)

-----

## Exemple du modèle de boîte et démonstration de la console de Google Chrome

Voir les fichiers `/exemples/theme-6/box.html` et `/exemples/theme-6/box.css`

-----

## Affichage (display)

* `inline`: sur la même ligne (`width` et `height` n'ont pas d'influence)
* `block`: conteneur sur une nouvelle ligne
* `inline-block`: conteneur sur la même ligne
* `flex`: conteneur basé sur des colonnes
* ...: [Liste complète](https://www.w3schools.com/cssref/pr_class_display.asp)

-----

## Dépassements

* Cas 1: l'enfant dépasse du parent
* Cas 2: le contenu dépasse de l'élément
* Cas 3: mauvaise compréhension de `width` et `height`

Voir les fichiers `/exemples/theme-6/depassements.html`

-----

## Position

* `static` (défaut): suit le flow normal de la page
* `relative`: par rapport à sa position normal
* `absolute`: par rapport à son parent le plus haut qui est positionné
* `fixed`: par rapport à la fenêtre, ne défile pas

Les positions `relative`, `absolute` et `fixed` sont déclarées de pair avec les propriété `top`, `right`, `bottom` et `left`

[Référence complémentaire](https://www.w3schools.com/css/css_positioning.asp)

-----

## Exemple du système de positionnement

Voir les fichiers `/exemples/theme-6/position.html` et `/exemples/theme-6/position.css`

-----

## Media queries

Permets de définir des styles différents selon des critères (média, taille d'écran, etc.). Respecte l'ordre en cascade.

Exemple

```css
/* Style général */
.nom-pertinent {
  color: #00ff00;
}

@media screen and (min-width: 480px) {
  /* Style pour petit écran */
  .nom-pertinent {
    color: #ff0000;
  }
}

```

[Référence complémentaire](https://www.w3schools.com/css/css3_mediaqueries.asp)
