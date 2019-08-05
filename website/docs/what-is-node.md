---
id: getting-started
title: Qu'est-ce que NodeJs ?
---
*NodeJs est un framework qui va vous permettre d'utiliser JavaScript sur un serveur, pour cela il va utiliser le moteur V8 de google qui va compiler votre code javascript en code machine. NodeJs est une bibliothéque qui donne accés à un ensemble d'outils afin d'exécuter votre code JavaScript côté serveur.*

## Pourquoi utiliser NodeJs ?
Pourquoi les développeurs préferent confier leur back-end à NodeJs ? Il existe différentes raisons mais en voiçi les principales:

* **Flexbilité** - aujourd'hui de nombreux développeurs travaillent avec JavaScript pour gérer leurs interfaces le fait que NodeJs puisses nous faire écrire du code côté serveur permet aux développeurs d'apprendre un seul langage afin d'exécuter du code côté client et serveur.
* **Rapidité** - NodeJs utilise le moteur V8 pour compiler le JavaScript ce même moteur utilise un seul thread à l'inverse de certains langages de programmation de ce fait cela rend NodeJs très rapide lorsqu'il s'agit d'effectuer de l'asynchrone, voir la section [sur l'event loop](event-loop.md).
* **Modules** - La bibliothéque NodeJs est découpé en modules utilitaires ce qui rend le développement de votre application plus souple et rapide puisque vous pouvez incorporer seulement les modules que vous avez besoin et non la bibliothéque entiére.
* **NPM** -  NodeJs est livré avec un gestionnaire de paquet (NPM pour Node Package Manager) ce qui rend le stockage, le partage de code très facile. Ce package est livré avec un outil CLI qui va vous permettre trés facilement d'interagir avec ce service.
* Etc...

Malgré tous ses avantages NodeJs peut ne pas convenir à tout le monde en effet si vous venez d'un langage de programmation comme PHP vous devez repenser complétement votre façon de penser, le fait que NodeJs utilise seulement un seul thread pour gérer ses opérations peut rendre la compréhension un peu plus difficile.

NPM quant à lui peut parfois se trouver plus contraignant qu'utile, plus votre projet dépend de bout de code recuperé via NPM plus votre nombre de dépendances augmente ce qui peut rendre la maintenabilité du code difficile.

## Dois-je absolument apprendre NodeJs ?
ÀU moment où j'écris ces lignes la popularité de Node ne cesse d'augmenter comme mentionné plus haut le fait que certains développeurs front-end puissent "rapidement" exécuter du code côté serveur présente un énorme avantage en terme de temps pour les équipes de développement, ajoutez à cela son aspect non bloquant (one thread) qui le rend très rapide plus NPM, cela fait de NodeJs un sérieux concurrent aux autres langages de programmation déja en place.

Cependant les langages comme C++, Python etc.. Qui sont très utilisés et qui sont en place depuis un moment ne veut pas nécessairement dire qu'ils doivent être abandonnés, au contraire si votre application, projet, marche déja très bien avec ces langages pourquoi venir bousculer cette équilibre ?

NodeJs est un bon choix si vous désirez en apprendre un peu plus ou si vous vous lancez dans un projet tiers et que vous avez besoin d'un nouveaux langage de programmation pourquoi pas lancez vous un challenge de créer votre produit avec Node, mais cela n'indique pas que vous devez absolument le maitriser aujourd'hui.
