## Conversion
*Comment la mesurer?*

-----

## Les objectifs (*goals*)

Quelques exemples de mesure de conversion selon les industries.

➡ Démonstration en classe

-----

## *Funnels* de conversion

L'analyse par funnel (entonnoir) consiste à définir et mesurer des étapes partielles vers la conversion finale. L'objectif est de mesurer et quantifier l'endroit où, s'il y a lieu, les visiteurs abandonnent. Par exemple, dans le cas du commerce électronique, on pourrait avoir:

* Consulter une page produit
* Ajouter un produit dans le panier
* Passer une commande

➡ Démonstration en classe

-----

## Mesurer par cohortes

![](/img/conversion.png)

-----

## *Goal* dans Google Analytics

➡ Démonstration en classe

```html
<script>
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', 'UA-91396034-1', 'auto');
  ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>

<button onclick="ga('send', 'event', 'category', 'action', 'label', 'value')">Acheter</button>
```
