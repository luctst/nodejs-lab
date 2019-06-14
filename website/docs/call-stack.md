---
id: call-stack
title: Call stack
---
*Afin de comprendre en détails comment NodeJs fonctionne en interne il est primordial de maitriser les entités qui le gérent pour cela nous allons dans un premier temps définir ce qu'est un call stack.*

## À l'intérieur du moteur V8
NodeJs utilise le moteur V8 de google pour compiler le code JavaScript c'est à l'intérieur même de ce programme que l'on va trouver ce qu'on appelle le call stack ainsi que le heap. Ce dernier étant un espace de stockage pour les objets, functions crées.

La call-stack est quant à lui une liste qui stocke les functions executées, pour gérer cela on définit le call stack de LIFO ce qui signifie que la derniére entrée dans la call stack sera la premiére à partir, cette liste de donnée va permettre au moteur V8 de savoir exactement ou il se trouve dans l'exécution du script, de plus sachant qu'il est single-thread il ne va pouvoir exécuter qu'une seule chose.

Prenons le code suivant:
```js
const add = (a, b) => a + b;

const double = a => add(a, a);

const printDouble = a => {
	const output = double(a);
	console.log(a);
}

printDouble(9);
```

1. On crée trois fonctions qui vont être stockées en mémoire.
2. On appelle la fonction `printDouble`, pousse la fonction dans notre call-stack.
	* Call-stack = `1. printDouble`.
3. On crée une variable `output` qui est égale à la valeur retournée par `double`.
	* Call-stack = `1. printDouble(), 2. double()`.
4. On exécute la fonction `double` qui elle-même appelle la fonction `add()`.
	* Call-stack = `1. printDouble(), 2. double(), 3. add()`.
5. On exécute la fonction `add` qui retourne une valeur, il n'y a plus rien à exécuter à l'intérieur on la supprime de la call-stack.
	* Call-stack = `1. printDouble, 2. double()`.
6. De retour dans la fonction `double` il n'y a plus rien à exécuter, on peut la supprimer.
	* Call-stack = `1. printDouble`.
7. On exécute la suite de la fonction et on tombe sur la fonction `console.log()`.
	* Call-stack = `1. printDouble, 2. log`.
8. Exécute la fonction `log`.
	* Call-stack = `1. printDouble`.
9. Plus rien à exécuter dans la fonction, sors la de la call-stack.
	* Call-stack = Vide.
10. La fonction `printDouble` a été exécutée, continue le script comme il n'y a plus rien NodeJs arrête son process.
