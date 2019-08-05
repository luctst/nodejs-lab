---
id: node-architecture
title: Node architecture
---
*Les deux aspects les plus importants de NodeJs sont le moteur V8 et libuv (event loop).*

## Moteur V8
NodeJs utilise le moteur V8 crée par Google qui tourne également dans le navigateur Chrome pour compiler le code JavaScript, cependant il existe des alternatives comme Chakra (crée par microsoft, tourne dans IE) ou encore spidermonkey (tourne dans le navigateur firefox). Le code JavaScript qui vous écrivez dépend donc des fonctionnalités que supporte le moteur V8, ces fonctionnalités sont integrés suivant un processus de trois étapes:

* Shipping - Fonctionnalités présentes dans le moteur.
* Staged - En cours de traitement mais non incluses par défaut cependant vous pouvez les utiliser avec l'option `--v8-option --harmony`, lancer la commande `node --v8-options` pour voir la liste des fonctionnalités.
* In progress - Fonctionnalités non prises en charges.

## Comment Node intéragit avec V8 et l'event loop ?
Lorsque vous exécutez du code Node effectue ces actions en internes:

1. Interaction avec l'api de node via ses modules.
2. NodeJs utilise des fonctions du moteur V8 pour exécuter le code, à préciser que ce n'est pas le moteur V8 qui exécute ses fonctions içi NodeJs utilise l'API du moteur.
3. Lorsque des fonctions asynchrones doivent être effectuées NodeJs utilise la libraire Libuv (event loop) pour gérer ces opérations.
4. Une fois que les opérations asynchrones sont géres NodeJs envoie les fonctions callback à executer au moteur V8.
5. Quand les fonctions callback sont terminés le moteur V8 renvoie les résultats à NodeJs.
