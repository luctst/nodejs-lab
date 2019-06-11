---
id: global-object
title: Node global objet
---
*Dans les navigateurs l'objet `window` est le scope ayant le plus haut niveau autrement dit lorsque vous déclarez une variable en dehors d'une fonction vous créez une propriété dans l'objet `window`, avec Node l'objet au plus haut niveau est l'objet `global` vous pouvez afficher sa liste de proprietés et méthodes en utilisant.*

```js
node
global
```

Ou dans un fichier à exécuter

```js
console.log(global);
```

Il est bien entendu déconseillé de modifier quoi que ce soit dans cette objet étant donnée qu'il est au plus haut niveau de l'interface NodeJs.
