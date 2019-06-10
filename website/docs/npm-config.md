---
id: npm-config
title: Packages.json et package-lock.json
---
*Par défaut npm a besoin d'un fichier `package.json` pour fonctionner correctement il permet à npm de configurer correctement le projet en lui affichant par exemple la liste de dépendances (liste des packages utilisés), le nom du projet, sa version, description etc..*

## Package.json
Comme mentionné plus haut ce fichier est le pilote de npm il peut contenir de nombreuses informations utiles ou pas que vous pourrez retrouver [içi](https://docs.npmjs.com/files/package.json) mais il n'a besoin que des champs `name` et `version` qui sont obligatoires, votre fichier peut très bien ressembler à ça.

```json
{
	"name": "test",
	"version: "1.0.0"
}
```

Cependant vous trouverez rarement des fichiers aussi vide, en effet l'intérêt principal de ce fichier est de voir la liste des dépendances, prenons l'exemple du package Express que vous pouvez retrouver sur [Github](https://github.com/expressjs/express).

```json
{
	"dependencies": {
		"accepts": "~1.3.7",
		"array-flatten": "1.1.1",
		"body-parser": "1.19.0",
		"content-disposition": "0.5.3",
		"content-type": "~1.0.4",
		"cookie": "0.4.0",
		"cookie-signature": "1.0.6",
		"debug": "2.6.9",
		"depd": "~1.1.2",
		"encodeurl": "~1.0.2",
		"escape-html": "~1.0.3",
		"etag": "~1.8.1",
		"finalhandler": "~1.1.2",
		"fresh": "0.5.2",
		"merge-descriptors": "1.0.1",
		"methods": "~1.1.2",
		"on-finished": "~2.3.0",
		"parseurl": "~1.3.3",
		"path-to-regexp": "0.1.7",
		"proxy-addr": "~2.0.5",
		"qs": "6.7.0",
		"range-parser": "~1.2.1",
		"safe-buffer": "5.1.2",
		"send": "0.17.1",
		"serve-static": "1.14.1",
		"setprototypeof": "1.1.1",
		"statuses": "~1.5.0",
		"type-is": "~1.6.18",
		"utils-merge": "1.0.1",
		"vary": "~1.1.2"
  }
}
```

Comme vous pouvez le voir l'objet `dependencies` pour le projet Express est assez conséquent, les champs à l'intérieur correspondent à différents packages que Express lui-même utilise pour faire fonctionner son package les numéros en face indiquent la version utilisée.

Grâce à cette liste de dependances n'importe qui peut par exemple la copier-coller dans son propre fichier `package.json` et entrer la commande `npm i ` qui installera automatiquement toutes les dépendances inscrites dans la liste.
