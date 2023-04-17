<div align="center">

<img alt="" class="bf hz ia c" width="650" height="366" loading="eager" role="presentation" src="https://miro.medium.com/v2/resize:fit:650/1*Hva7hcsFWulFUPhrEWui1A.jpeg">

## NEXT boilerplate

</div>

Ce starter est conçu pour vous aider à démarrer votre projet Next.js plus rapidement, en évitant de perdre du temps sur la configuration. Il contient les technologies, packages et scripts suivants :

---

#### `⚫ Technologies `

<br>

**📌 Yarn**
J'utilise Yarn plutôt que NPM dans ce starter pour ses fonctionnalités supplémentaires, sa vitesse accrue et sa gestion des dépendances plus précise.

**📌 Webpack**
Un build tool qui permet de transformer votre code en fichiers statiques. Il est souvent utilisé pour la gestion des assets, le transpilage du code (ES6, TypeScript, etc.), la gestion des modules, et bien d'autres choses.

**📌 Typescript**
Rendre le développement JavaScript plus fiable et maintenable avec Typescript

**📌 Sass**
Un préprocesseur CSS qui ajoute des fonctionnalités avancées au langage, telles que les variables, les fonctions, les mixins, etc. Cela permet de créer un code CSS plus facile à maintenir, plus flexible et plus rapide à écrire.

**📌 Prettier**
Un formateur de code (code formatter) qui vous aide à maintenir un code cohérent et propre en appliquant des règles de mise en forme à votre code. Il peut être intégré à votre environnement de développement pour formatter automatiquement votre code à chaque sauvegarde.

**📌 ESLint**
Un outil d'analyse statique du code qui vous aide à identifier et corriger les erreurs et les problèmes de style dans votre code JavaScript. Il peut être configuré pour suivre des règles spécifiques et peut également être intégré à votre environnement de développement.

**📌 Jest**
Un framework de test pour les applications JavaScript, qui fournit un ensemble de fonctionnalités pour écrire et exécuter des tests. Il peut être utilisé pour tester du code JavaScript, des composants React, des pages Next.js, etc.

---

#### `⚫ Packages`

<br>

**📌 Cross-env**
Définir des variables d'environnement de manière indépendante de la plateforme. Cela facilite la configuration de votre environnement de développement, quelle que soit la plateforme utilisée.

**📌 Grunt**
Un task runner qui permet d'automatiser des tâches répétitives, telles que la compilation, la minification, la génération de fichiers, etc. Il peut être utilisé pour automatiser les tâches liées à la construction de votre projet Next.js.

**📌 Sass-eo** | [github 🔗](https://github.com/RajaRakoto/sass-eo)
Personnalisez votre site Web plus rapidement avec SASS-EO, un ensemble d'outils optimisé par SASS (Syntactically Awesome Style Sheets). Vous trouverez la description détaillée du script npm utilisé dans le lien github ci-dessus

---

#### `⚫ Scripts NPM`

<br>

Ce starter contient des scripts NPM préconfigurés pour faciliter les tâches répétitives (Je ne montre ici que les scripts les plus utilisés dans ce starter mais vous pouvez voir tous les scripts dans le fichier package.json):

<li><code>dev</code>: démarre le serveur de développement Next.js avec hot reloading</li><li><code>build</code>: compile et construit le projet Next.js pour la production</li><li><code>test</code>: exécute les tests Jest pour votre projet</li><li><code>eslint</code>: exécute ESLint sur votre code Javascript/Typescript</li><li><code>format-check</code>: vérifie les codes non formatés avec Prettier</li><li><code>format-fix</code>: applique Prettier à votre code pour le formater</li><li><code>sseo-watch</code>: execute le mode watching du package sass-eo</li><li><code>sseo-docs</code>: visite rapide de la documentation de sass-eo avec sassdoc</li>

---

> #### Ouvert aux suggestions pour améliorer la structure de ce boilerplate & starter pour Next.js. Votre contribution est la bienvenue pour le rendre encore plus efficace et performant.
