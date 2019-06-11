---
id: node-module
title: Node module
---
*Lorsque vous utilisez NodeJs vous entendez souvent parler de module, car c'est ce qu'il va exécuter lors qu'il tourne mais au final qu'est-ce qu'un module en NodeJs ?*

## Qu'est-ce qu'un module ?
Un module avec NodeJs est simplement un fichier ou un dossier qui contient du code JavaScript un peu à la maniére d'un package. La plupart du temps vous utiliserez des fichiers Js que vous executerez avec l'environnement Node pour cela on utilise comme on a pu le voir la commande:

```js
node <nom du fichier>
```

En interne Node ne va pas seulement exécuter le fichier mais va englober tout le code dans une fonction
qui va devenir un module.

## Exécution d'un fichier
On a vu que Node englobe notre code dans une fonction lorsqu'il doit exécuter un fichier Js mais à quoi ressemble cette fonction ? Imaginons que nous avons un fichier `test.js` avec comme contenu `console.log("Hello world");` On sait que l'environnement va nous rendre dans la console `Hello world` mais en interne Node va exécuter cette fonction.

```js
// (function (exports, module, require, __filename, __dirname) {
	console.log("Hello world");
// })()
```

Par défaut comme on peut le voir Node nous fournit une liste d'arguments qu'on utilisera assez souvent nous n'allons pas dans ce chapitre décrire l'interêt de chaque arguments, mais nous les évoquerons dans une futur section.

Vous comprenez maintenant pourquoi vous pouvez utiliser la fonction `require` par exemple qui va chercher le code d'un autre module, il n'y a donc rien de magique vous utilisez juste un argument qui est caché par NodeJs.

De la même maniére lorsque vous déclarez une variable dans un fichier elle n'est pas global comme elle pourrait l'être sur un navigateur avec l'objet `window` mais se trouve bien dans le scope de la fontion que Node génere automatiquement.

## Valeur retournée
Les functions generés par NodeJs retourne automatiquement une valeur que vous utilisez ou non le mot-clé `return`, pour cela il utilise son argument `module` avec sa proprieté `exports` par défaut il retourne un objet mais vous pouvez à tout moment changer sa valeur en utilisant `module.exports = []` par exemple, dans ce cas la function de Node retournera un tableau vide lorsque que vous utiliserez `require`.

Prenons l'exemple de deux fichiers au même niveau:

```js
// index.js

// (function (exports, module, require, __filename, __dirname) {
	const tab = [1, 2, 3];
	module.exports = [...tab];
	// return module.exports;
//})();
```

Les commentaire affichent la fonction cachée que Node effectue lorsqu'on exécute le fichier `index.js`, imaginons maintenant qu'on a un deuxiéme fichier `getIndex.js`

```js
const getTab = require("./index.js"); // La fonction require retourne la valeur de module.exports du module index.js
console.log(getTab); // [1, 2, 3]
```

Içi notre module retourne un tableau mais vous pouvez à tout moment changer pour retourner la donnée que vous désirez objet, function, class etc..

En utilisant `module.exports` on indique la valeur que notre module doit retourner et pas nécessairement un objet, si on observe bien dans la liste des arguments que la fonction posséde on trouve en premiére position `exports` qui ressemble à `module.exports` alors quelle est la différence ?<br/>
De base un module retourne toujours un objet si on souhaite garder cette donnée on peut utiliser l'argument `exports` qui est un raccourcie qui permet d'ajouter des propriétes, méthodes à notre objet par contre il ne permet pas de changer la nature du module, `exports` servira toujours à retourner un objet.<br>

Cela peut s'avérer pratique si vous savez que votre module sera un objet vous pouvez donc utiliser l'argument `exports`.
