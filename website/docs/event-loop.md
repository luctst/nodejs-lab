---
id: event-loop
title: L'event loop
---
*L'event loop est un programme qui va boucler sur l'event queue qui va elle-même pousser les fonctions callback dans le call stack lorsque celui-ci est vide.*

## Event queue
L'event queue integré dans le moteur V8 est semblable à la call-stack elle permet de stocker des évenements généralement ce sont des functions callbacks mais contrairement à la call-stack elle est de type FIFO pour First In First Out la premiére entrée sera également la premiére à sortir, grâce à cette structure de donnée l'event loop va pouvoir effectuer une liaison entre l'event queue et le call-stack.

## Comment marche l'event loop ?
Le rôle de l'event loop est assez simple et peut se résumer facilement:

1. Quand le call-stack est vide lance le programme.
2. Si l'event queue est vide arrête le process.
3. Sinon Pousse le premier event (callback) dans la call-stack.

À ce moment du programme le moteur V8 devrait exécuter les fonctions asynchrones, le call-stack va de nouveau être vide et l'event loop repéte le même process jusqu'à que l'event queue soit vide.

> **Note** - Il est important de retenir que l'event loop pousse des fonctions seulement si la call-stack est VIDE ce qui veut dire qu'une fonction asynchrone trop longue peut empêcher l'event loop de faire son travail correctement.
