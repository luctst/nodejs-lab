---
id: event-loop
title: NodeJs et l'asynchrone
---
*Quand NodeJs démarre il initialise l'event loop, lis le script ou lance le mode REPL, entrons un peu plus en détails sur ce qu'est l'event loop et comment Node gére l'asynchrone.*

## Comment NodeJs gére l'asynchrone.
Comme mentionné dans les premiéres sections de ce site NodeJs utilise ce qu'on appelle des [fonctions callback](helper/callback) pour gérer son code asynchrone mais en interne Node a besoin de ce qu'on appelle une call stack et d'une event loop pour exécuter correctement le code asynchrone voyons briévement les définitions de ces deux termes.

### L'event loop
L'event loop est un programme lancé dans le moteur V8 chargé d'éxecuter une boucle continuellement, de traiter les entrées qu'elle reçoit et de renvoyer le résultat à la call stack lorsque celle-çi est **vide**. Pour rester centré sur le fonctionnement de NodeJs nous n'allons pas rentrer dans les détails techniques du fonctionnement interne de ce programme cependant si vous êtes curieux vous pouvez retrouver la [documentation içi](http://docs.libuv.org/en/v1.x/).

Dans le monde de JavaScript l'event loop est un sujet qu'il est mieux de maitriser car c'est ce qu'il fait sa force en effet l'utilisation d'un seul thread demande aux machines moins de ressources et permet donc d'effectuer des opérations plus rapidement.

### Call stack
Vous le savez on le repéte assez JavaScript est single-thread pour gérer cela il va utiliser ce qu'on appelle une **call stack** c'est une structure de donnée qui stocke les informations que le programme doit executer, cette structure de donnée est ce qu'on appelle **LIFO** (Last In First Out) ce qui signifie que la derniére entrée dans la call stack sera la premiére à partir.

Prenons le code suivant:

```js
setTimeout(() => console.log("Asynchronous code"), 5000);

console.log("Hello world");
```

Ce code renvoie dans la console:

```js
Hello world
Asynchronous code // au bout de 5s.
```

Listons les étapes que le moteur V8 va exécuter:

1. Ajoute dans la call stack la fonction `setTimeout`.
	* Le moteur voit qu'on utilise une fonction callback qui doit être executée au bout de 5s.
	* En interne l'event loop exécute la fonction callback aprés les 5s.
2. La fonction ne fait rien d'autre donc supprime la de la call-stack.
3. Le moteur arrive sur la fonction log de l'objet console il n'y aucune callback il exécute directement le code et renvoie Hello world dans la console.
4. La fonction ne fait rien d'autre supprime `console.log` de la call-stack.
5. Notre call-stack est vide le moteur n'a plus de ligne à exécuter par contre l'event loop a exécuté la fonction callback et peut maintenant pousser le résultat dans le call-stack.
6. Notre call-stack se retrouve maintenant `console.log("asynchronous code")` il exécute la fonction et la supprime et termine le process Node il n'a plus rien à exécuter.

Si vous désirez des informations plus précises et techniques sur le fonctionnement de l'asynchrone en NodeJs consultez [cette documentation](https://nodejs.org/fr/docs/guides/event-loop-timers-and-nexttick/).
