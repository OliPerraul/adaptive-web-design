## PHP et MySQL
*Hypertext Preprocessor*

-----

## Définition et contexte


Jusqu'à présent, nous avons vu comment concevoir un site web à l'aide de HTML, CSS et JS.

Mais que se passe-t-il si vous voulez le rendre dynamique ou encore confier l'édition à un non développeur?

PHP et MySQL sont deux technologies largement utilisées dans l'univers du web. Les grands CMS comme Wordpress et Magento ainsi que des sites web connus comme Facebook utilisent ces technologies.

-----

## Évolution

### PHP1 - Les débuts
1994

### PHP3 - Réécriture
1998

### PHP5 - Position dominante
2004

### PHP7 et HHVM - Performance
2014

-----

## Types primitifs

Type | Exemple
--- | ---
Boolean | `true` `false`
Integer | `1`
Float | `1.5`
String | `'hello'` `"world"`
Null | `null`
Array | `array(1, 2, 3)`
Object |

[Référence complémentaire](https://www.w3schools.com/php/php_datatypes.asp)

-----

## Variables

Les variables sont à typage dynamique et leur nom doit débuter par `$`.

```php
<?php
  $nom = "John";
  $age = 25;
?>
```

-----

## Comment écrire du PHP

Pour écrire du PHP, il suffit de créer un fichier avec l'extension `.php` et de l'interpréter avec un serveur.

Le code PHP doit se trouver à l'intérieur des balises `<?php` et `?>`. Sinon, tout le texte à l 'extérieur sera envoyé tel quel.

Code PHP
```php
<p>test</p>
<?php
  echo "<p>Hello world!</p>";
?>
```

Une fois interprété, le rendu HTML:
```html
<p>test</p>
<p>Hello world!</p>
```

-----

## Exemple simple

Code PHP
```php
<?php
  echo "<p>Hello world!</p>";
?>
```

Une fois interprété, le rendu HTML:
```html
<p>Hello world!</p>
```

-----

## Exemple conditions

Code PHP
```php
<?php
  $est_connecte = false;
  if ($est_connecte) {
    echo "<a href="logout.php">Se déconnecter</a>";
  } else {
    echo "<a href="signin.php">Se connecter</a>";
  }
?>
```

Une fois interprété, le rendu HTML:
```html
<a href="signin.php">Se connecter</a>
```

-----

## Exemple boucles

Code PHP
```php
<?php
  echo "<ul>";
  for ($i = 0; $i < 3; $i++) {
      echo "<li>" . $i . "</li>";
  }
  echo "</ul>";
?>
```

Une fois interprété, le rendu HTML:
```html
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ul>
```

-----

## MySQL

Système de gestion de bases de données relationnelles très utilisé dans l'univers du web, notamment par les CMS comme Wordpress.

Racheté en 2008 par Sun Microsystems, une nouvelle version open source du nom de MariaDB a été créée.

-----

## Exemple PHP et MySQL

Code PHP naïf utilisant MySQLi (pourquoi?)
```php
$connexion = new mysqli('servername', 'username', 'password');

$sql = "SELECT id, nom FROM usagers";
$resultats = $connexion->query($sql);

while($usager = $resultats->fetch_assoc()) {
  echo $usager["id"] . " - " . $usager["nom"];
}

$conn->close();
```
