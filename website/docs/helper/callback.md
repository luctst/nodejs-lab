---
id: callback
title: Fonction callback
---
*Une fonction callback est une fonction qui est appellée plus tard dans notre programme. Vous rencontrerez des fonctions callback trés souvent lorsque vous utiliserez NodeJs car toute la bibliothéque est basée sur ce systéme, il est donc préferable de bien maitriser cette notion.*

## À quoi ressemble une fonction callback
Vous pouvez écrire les fonctions callback de plusieurs maniéres en voiçi une très simple.

```js
function doSomething(callback) {
	callback();
}

doSomething(() => console.log("Hello world !"));
```

Dans l'exemple ci-dessus on crée une premiére function qui va prendre un argument et qui sera notre function à appeler plus tard donc notre callback.<br>
Pour cela on appelle la fonction `doSomething` avec un argument une autre fonction anonyme (vous pouvez bien entendu créer une fonction et l'appeler par sa reférence) qui va simplement rendre un `Hello world !` dans la console.

Bien entendu cette exemple reste très simple et n'est pas bien utile pour notre cas mais le principe est le suivant une fonction qui prend en paramétres une autre fonction qui sera elle declenchée plus tard.

## Ressources:
* [Asynchronous Programming as Seen at Starbucks - Samer Buna](https://medium.com/edge-coders/asynchronous-programming-as-seen-at-starbucks-fc242cf16aa)
