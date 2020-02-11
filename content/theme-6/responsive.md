## Design adaptatif

*Système de grille et librairies populaires*

-----

## Contexte et motivation

À l'heure actuelle (2019), la majorité du trafic web provient des mobiles et tablettes. Il est difficile d'avancer un chiffre exact, mais selon ce que je constate on pourrait estimer à 75%.

Comment alors pouvons-nous créer des pages web qui s'adaptent à l'infinité de tailles d'écrans et de densités de pixels?

-----

## Système de grille

Une approche populaire est d'utiliser un système de grille contenant des colonnes et des rangées. Cette approche permet de définir le nombre de colonnes à afficher selon la taille de l'écran. Traditionnellement, ces systèmes ont 12 colonnes (pourquoi?).

-----

## Bootstrap

Une des librairies les plus populaires est Bootstrap. L'approche retenue par cette librairie est basée sur l'ajout de balises HTML auxquelles on donne des classes CSS spécifiques.

Voici un exemple de deux colonnes avec Bootstrap:

```html
<div class="container">
  <div class="row">
    <div class="col-6">
      Colonne A
    </div>
    <div class="col-6">
      Colonne B
    </div>
  </div>
</div>
```

[Documentation officielle](https://getbootstrap.com/docs/4.2/layout/grid/)

-----

## Exemple du système de grille de Bootstrap

Voir le fichier `/exemples/theme-6/bootstrap.html`

-----

## Limitations de Bootstrap

Comme vous pouvez le constater, le balisage devient lourd et parfois complexe.

De plus, si vous voulez changer l'ordre des éléments, vous devrez changer l'ordre du DOM*.

[Article complémentaire](https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163)

-----

## Système de grille en CSS

L'idée d'un système de grille est en soit très bonne. Par contre, le style devrait être géré via le CSS et non le HTML.

C'est pourquoi le nouveau standard de grille CSS est apparu. Cependant, ce standard n'est pas encore supporté par tous les navigateurs, mais la situation évolue très rapidement!

[Voir l'état du support](https://caniuse.com/#feat=css-grid)

-----

## Exemple de grille en CSS

```html
<section>
  <article></article>
  <aside></aside>
</section>
```

```css
section {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(12, 1fr)
}

article {
  grid-column: span 8;
}

aside {
  grid-column: span 4;
}
```
