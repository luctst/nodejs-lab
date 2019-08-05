---
id: node-cli
title: NodeJs command line interface
---
*La ligne de commande NodeJs va vous permettre de mofidier le comportement de votre environnement NodeJs.*

## Options utiles:
Cette liste regroupe l'ensemble des options qui peuvent être susceptibles d'être utilisées réguliérement, bien que chaque projet à des specificités différentes certaines actions ressortent plus que d'autres, pour lancer une option avec NodeJs suivez simplement ce format `node [votre option]`.

* `node -v` - Affiche la version de NodeJs installé sur votre configuration.
* `node -h` - Affiche l'ensemble des options disponibles.
* `node -c` - Vérifie la syntax d'un script sans l'éxecuter.
* `node -p` - Evalue et renvoie le résultat, `node -p "3 === '3'"`.

> **Note** - Pour voir l'ensemble des options disponibles n'hésitez pas à consulter [la doc officielle](https://nodejs.org/dist/latest-v10.x/docs/api/cli.html#cli_command_line_options).

## Variables d'environnement
Si vous utilisez la commande `node -h`et que vous scrollez tout en bas vous arriverez sur une liste de variables que Node utilise pour certaines configurations n'hésitez pas à lire la [documentation](https://nodejs.org/dist/latest-v10.x/docs/api/cli.html#cli_environment_variables) pour en apprendre un peu plus sur ces variables d'environnement.
