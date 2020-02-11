# Notes de cours - IGE511 Université de Sherbrooke



## À propos

Ce projet contient les notes de cours interactive du cours IGE511 de l'Université de Sherbrooke.



## Comment débuter

Ce projet utilise la *stack* technologique suivante:

- [Yarn](https://yarnpkg.com), gestionnaire de dépendances
- [Webpack](https://webpack.js.org/), regrouper et transformer les fichiers sources
- [SASS](https://sass-lang.com/), couche dynamique pour générer du CSS
- [Babel](https://babeljs.io/), transpilage du code JavaScript
- [Reveal.js](https://github.com/hakimel/reveal.js), librairie de présentation

Ce projet nécessite l'utilisation d'un terminal (invite de commande).

Pour débuter, il vous faut d'abord (installer Yarn)[https://yarnpkg.com/fr/docs/install#mac-stable].

Une fois Yarn installé, rendez-vous dans le répertoire de votre projet à partir d'un terminal. Vous pouvez ensuite installer localement les dépendances et exécuter le projet (voir la section commandes ci-bas pour les détails).



## Hiérarchie des répertoires

### /content

Contiens tous les fichiers [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) qui compose cette présentation.

### /exemples

Contiens tous les fichiers sources des exemples présentés en classe.

### /src

Contiens tous les fichiers sources de votre projet (HTML, CSS, JS, ect.). C'est à partir de ce dossier que les outils *compileront* et *transpileront* votre projet.

### /dist

Contiens le code compilé de votre projet.



## Commandes

### Installer localement les dépendances

```sh
yarn
```

### Compiler les sources pour développement local

```sh
yarn start
```

### Compiler les sources pour déploiement

```sh
yarn build
```



## Licence

Le présent projet a été développé à des fins pédagogiques dans le cadre du cours IGE511 de l'Université de Sherbrooke. Il est distribué sous la licence MIT:

> La licence MIT donne à toute personne recevant le logiciel le droit illimité de l'utiliser, le copier, le modifier, le fusionner, le publier, le distribuer, le vendre et de changer sa licence. La seule obligation est de mettre le nom des auteurs avec la notice de copyright.

Source: [Wikipédia](https://fr.wikipedia.org/wiki/Licence_MIT)
