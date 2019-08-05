---
id: node-Repl
title: Node REPL
---
*NodeJs est livré avec un environnement virtuel qui s'appelle REPL pour Read Eval Print Loop, il permet d'effectuer du code JavaScript afin de tester le code que vous voulez. Cette environnement permet également de lancer des fichiers JavaScript.*

## Read Eval Print Loop
Lorsque vous lancez la commande `node` dans votre terminal (il faut bien entendu avoir teléchargé NodeJs sur son ordinateur) NodeJs va lancer son environnement virtuel dans lequel vous allez pouvoir exécuter du code JavaScript cela peut s'avérer pratique si vous désirez tester des petits bouts de code, en interne Node va exécuter son [module REPL](https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_repl) il va lire votre code l'évaluer renvoyer un résultat et attendre de nouvelles instructions. Essayez de rentrer cette suite d'instructions sur votre terminal.

```js
node // Lancement de l'environnement Node.
3 == "3" // Appuyez sur la touche entrée, Node va renvoyer true.
```

Par défaut NodeJs vous permet d'éxécuter du code ligne aprés ligne vous ne pouvez pas sauter de lignes pour cela nous allons voir une liste de commandes qui peuvent s'avérer utiles pour pallier certains problémes.

## Liste de commandes:
Il n'y a pas beaucoup de commandes dans l'environnement REPL de NodeJs cependant si vous êtes perdu vous poucez taper la commande `.help` qui vous listera l'ensemble des commandes disponibles.

* `.editor` - Permet de rentrer dans le mode éditeur qui vous permet d'écrire du code Js à la maniére d'un IDE.
* `.exit` - Permet de quitter l'environnement REPL de Node sous mac vous pouvez utiliser le raccourci `CTRL + d`.
* `.save <nom du fichier>` - Permet de copier le code Js préalablement écrit dans votre session REPL et de l'enregistrer dans un fichier js.
* `.load <nom du fichier>` - Permet de charger et d'éxecuter un fichier js dans votre session REPL.

## Tab et underscore
### Tab
Vous avez peut-être pour habitude d'utiliser votre touche tab dans des applications de traitements de textes, IDE afin d'organiser votre contenu ? Sous NodeJs vous pouvez utiliser cette touche d'une autre maniére en effet lorsque vous tapez tab dans votre session REPL Node va vous renvoyer une liste de toutes les méthodes disponibles. Exemple

```js
node // Lance l'environnement REPL
const arr = []; // Appuyez sur entrée, Node renvoie undefined car on ne retourne ou vérifie rien.
arr. // Appuyez sur la touche tab pour voir apparaitre une liste de méthodes disponibles pour notre tableau.
```

Cette fonctionnalité peut s'avérer utile lorsque vous cherchez une méthode, cela marche bien entendu avec tous types de données disponibles dans Node pas seulement les tableaux. Essayez le code suivant.

```js
node
. // Appuyez sur tab pour voir la liste des commandes disponibles.
```

### Underscore
Vous aurez peut-être remarqué la présence d'un `_` lorsque vous utilisez tab aprés avoir lancé votre session REPL (affiche la liste de toutes les functions, objets disponibles dans NodeJs) ? Si vous utilisez souvent la console JavaScript dans votre navigateur vous connaissez certainement l'utilité de `$` qui permet de stocker la derniére valeur et bien l'underscore dans NodeJs a la même utilité à savoir conserver la derniére valeur renvoyée.

```js
node
Math.random() // Renvoie un chiffre aléatoire entre 0 et 1.
0.66789123 // Fictif.
const t = _
t // Renvoie 0.66789123
```
