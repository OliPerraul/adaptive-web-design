## Gestion des dépendances
*NPM et Yarn*

-----

## Définition et contexte

Comment faire lorsque vous souhaitez utiliser une librairie ou du code d'une tierce partie?

Il vous faut gérer les versions, sources, droits d'auteur et idéalement utiliser un protocole standardisé.

-----

## Évolution

### Télécharger localement les sources
Droits d'auteur, mise è jour

### CDN
Disponibilité, révision du code

### Gestionnaires de paquets
Bower, NPM et Yarn

-----

## NPM

NPM vous permet d'installer et partager du code ainsi que de contribuer à différents projets. Une fois installé, il est utilisable via un terminal. Il est configurable à partir du fichier `package.json` et installe les paquets dans le dossier `node_modules`.

[Site officiel de NPM](https://www.npmjs.com/)

-----

## Yarn

NPM est une initiative géniale, mais pas parfaite. Il est difficile de gérer les versions avec exactitude entre les membres d'une même équipe. Yarn a donc été développé afin d'étendre les fonctionnalités de NPM. Il ajoute un fichier autogénéré `yarn.lock` qui gèle les versions des paquets. Il offre également un système de cache avancé et performant.

[Site officiel de Yarn](https://yarnpkg.com/en/)

-----

## Démonstration

Un petit exemple en classe afin d'initialiser un projet et installer quelques dépendances.

```sh
# Initialisation et installation des paquets
yarn

# Installation d'un paquet
yarn add bootstrap

# Installation d'un paquet pour développement
yarn add webpack --dev

# Supression d'un paquet
yarn remove webpack
```
