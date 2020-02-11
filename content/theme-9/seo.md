## Référencement naturel
*SEO (Search Engine Optimization)*

-----

## Petite historique
*Ce qui importe à Google*

![Ce qui est important pour Google](/img/seo-google.jpg)

[Source: Neil Patel](https://neilpatel-qvjnwj7eutn3.netdna-ssl.com/wp-content/uploads/2016/01/image31.jpg)

-----

## Quelques exemples

➡ Démonstration en classe

-----

## Quelques techniques

Bien évidemment, les algorithmes de Google, Bing, etc. sont secrets. Cependant, il y a des techniques universelles (souvent sous forme de bonnes pratiques) afin d'améliorer le référencement d'un site web.

À noter, il y a beaucoup de "charlatans" (produits, faux experts, etc.) dans ce domaine. Ma recommandation: il n'y a pas de recette magique. Un bon référencement prend du temps, du travail et surtout de bonnes pratiques saines et sans raccourcis.

-----

## Contenu

L'aspect le plus important d'une page est son contenu. Il doit être bien rédigé, récent, pertinent et surtout bien structuré. Afin d'aider les moteurs de recherche dans leur tâche d'analyse, vous pouvez utiliser les balises sémantiques et les balises meta et OG.

```html
<head>
  <title>Titre de la page</title>
  <meta name="description" content="Description de la page">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Titre de la page" />
  <meta property="og:description" content="Description de la page" />
  <meta property="og:image" content="/photo.jpg" />
  ...
</head>
```

-----

## Contenu (suite)

Au niveau de la structuration du contenu, les balises sémantiques sont toutes indiquées. Voici un exemple:

```html
<body>
  <h1>Titre de la page</h1>
  <article>
    <h2>Titre de l'article</h2>
    <p>Texte</p>
    <img src="photo.jpg" alt="Description de l'image">
  </article>
  ...
</body>
```

-----

## Vitesse

La vitesse de chargement des pages du site web joue un rôle crucial sur la conversion et par le fait même le SEO. Comment? Aux yeux de Google, un site web rapide à un taux de rebond plus bas, un meilleur taux de conversion et est donc plus pertinent.

Voici quelques outils afin de mesurer et améliorer la vitesse d'un site web:

* [Google Insights](https://developers.google.com/speed/pagespeed/insights/)
* [pingdom](https://tools.pingdom.com/)
* [GTmetrix](https://gtmetrix.com/)

-----

## HTTPS

Les certificats SSL étant désormais disponibles gratuitement via l'initiative de *Let's Encrypt*, de nombreux joueurs de l'industrie comme Mozzila et Google ont amorcé un mouvement pénalisant les sites n'utilisant pas le protocole HTTPS.

[Let's Encrypt](https://letsencrypt.org/)

-----

## Mobile

Les visites mobiles sont désormais prédominantes pour la majorité des sites web, particulièrement dans le commerce en ligne. Il n'est donc pas surprenant que les moteurs de recherches considèrent le bon fonctionnement d'un site sur mobile comme critère important de référencement.

* [Think with Google](https://www.thinkwithgoogle.com/feature/testmysite)
* [Google Mobile Friendly test](https://search.google.com/test/mobile-friendly)

-----

## Données structurées

Les données structurées sont une manière de structurer et communiquer de l'information aux outils automatisés (ex: Crawler) à propos de votre site web, vos produits et votre entreprise.

**➡ Exemple en classe**: recherche "films Sherbrooke" sur Google

[Référence complémentaire](https://developers.google.com/search/docs/guides/mark-up-content)

-----

## Données structurées
*JSON LD*

Un format populaire de données structurées. Voir [schema.org](https://schema.org/) pour des exemples d'utilisations. Exemple de code pour un produit quelconque:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Lampe XYZ",
    "image": [
      "https://example.com/photos/lampe.jpg"
     ],
    "sku": "lampe-12345",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "price": "119.99",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    }
  }
</script>
```

-----

## Minify et Uglify

Ces deux techniques sont très utiles afin de réduire la taille d'une page et surtout éliminer du code non utilisé. Le *boilerplate* utilisé dans le TP3 (avec Webpack) faisait ces opérations pour vous.

➡ Démonstration en classe

-----

## Outils intéressants

Voici quelques outils afin d'évaluer un site web ou encore suivre son rang et sa progression. Comment vérifier la pertinence d'un de ces outils? Vérifier son positionnement dans Google!

* [SEO SiteCheckup](https://seositecheckup.com/)
* [Neil Patel](https://neilpatel.com/seo-analyzer/)
* [Agency Analytics](https://agencyanalytics.com/)
* [SEMRush](https://www.semrush.com/)
* [Sitechecker](https://sitechecker.pro/)
* [SEO Tester Online](https://www.seotesteronline.com/)
* [Moz](https://moz.com/)
