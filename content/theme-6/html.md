## HTML
*Hypertext Markup Language*

-----

## Définition et contexte


Le HTML est un langage de balisage (et non de programmation) qui a été créé afin de concevoir des documents hypertextes (pages web). Il sert à structurer l'information de manière sémantique.

-----

## Évolution

### HTML1 et HTML2 - Les débuts
1991-1996

### HTML3 - La consolidation
1997

### HTML4 - Le dynamisme
1998

### HTML5 - Multimédia et application
2014

-----

## Un peu de vocabulaire

Terme | Exemple
--- | ---
Balise | `<p></p>`
Balise ouvrante | `<p>`
Balise fermante | `</p>`
Attribut | `<p class="a"></p>`
doctypes | `<!DOCTYPE html>`

[Référence complémentaire](https://developer.mozilla.org/fr/docs/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started)

-----

## Un document HTML simple

```html
<!DOCTYPE html>
<html>

  <head>
    <title>Titre de ma page</title>
  </head>

  <body>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </body>

</html>
```

-----

## Structure d'un document HTML

Balise | Description
--- | ---
`<html>` | Noeud racine (parent) du document HTML
`<head>` | Décris la page, ses méta données et son contexte technique (ex: encodage)
`<body>` | Tout ce qui se trouve à l'intérieur sera présenté par le navigateur

-----

## Quelques balises

Balise | Exemple
--- | ---
Entête | `<h1>texte</h1>` ... `<h6>texte</h6>`
Paragraphe | `<p>texte</p>`
Image | `<img src="url" />`
Lien | `<a href="url">texte</a>`
Conteneur | `<div></div>`

-----

## Listes

### Code

```html
<!-- Ordonnée -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>

<!-- Avec boulets -->
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
```

### Résultat

<div>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <ul>
    <li>Item A</li>
    <li>Item B</li>
  </ul>
</div>

-----

## Tableaux

### Code

```html
<table>
  <thead>
    <tr>
      <th>Colonne A</th>
      <th>Colonne B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
    </tr>
  </tbody>
</table>
```

### Résultat

<table>
  <thead>
    <tr>
      <th>Colonne A</th>
      <th>Colonne B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>B</td>
    </tr>
  </tbody>
</table>

-----

## Mise en garde
### D'un vieux routier

![](img/html-table.png)

[Source](https://imgflip.com/memegenerator)

-----

## Formulaires

### Code

```html
<form>
  <input type="text" placeholder="Nom" />
  <input type="email" placeholder="Courriel" />
  <input type="checkbox" />
  <input type="radio" />
  <select>
    <option>A</option>
    <option>B</option>
  </select>
  <input type="submit" placeholder="Envoyer" />
</form>
```

### Résultat

<form>
  <input type="text" placeholder="Nom" />
  <input type="email" placeholder="Courriel" />
  <input type="checkbox" />
  <input type="radio" />
  <select>
    <option>A</option>
    <option>B</option>
  </select>
  <input type="submit" value="Envoyer" />
</form>

-----

## Balises sémantiques

Balise | Description
--- | ---
`<header>...</header>` | Entête du document ou section
`<footer>...</footer>` | Pied de page du document ou section
`<nav>...</nav>` | Navigation via des liens (menu)
`<section>...</section>` | Regroupement thématique de contenu
`<article>...</article>` | Contenu indépendant et autonome
`<aside>...</aside>` | Section en dehors du contenu principal

[Référence complémentaire](https://www.w3schools.com/Html/html5_semantic_elements.asp)

-----

## Exemple de balises sémantiques

Code

```html
<nav></nav>
<header></header>
<section>
  <header></header>
  <article></article>
  <article></article>
</section>
<aside></aside>
<footer></footer>
```

Résultat

Varie selon le CSS!
