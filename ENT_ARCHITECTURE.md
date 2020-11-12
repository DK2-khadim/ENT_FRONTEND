# ENT  
L'espace numerique de travail de l'école 

## Architecture du projet (Frontend)

.
+-- _assets (css, fonts et img)
|
|
+-- _components(Les fichiers réutilisables)
|
|    +-- _FixedPlugin(Pour changer le background du sidebar)
|    +-- _Navbars(Le navbar horizontal)
|    +-- _PanelHeader(Le fond noir en haut)
|    +-- _Footer
|
+-- _modules(Les différents modules du projet)
|
|    +-- _Etudiant
|    |   +-- _components (Vos components: exemple -> Sidebar.js)
|    |   +-- _views (Les différentes views)
|    |   +-- router.js (Les différentes sous-routes du module)
|    |   +-- _index.js (Le dashboard complet)
|    |
|    +-- _Enseignant
|    |   +-- _components (Vos components: exemple -> Sidebar.js)
|    |   +-- _views (Les différentes views)
|    |   +-- router.js (Les différentes sous-routes module)
|    |   +-- _index.js (Le dashboard complet)
|    |
|    +-- ...
|
+-- _App.js (Les différentes routes du projet)
|
|
+-- _index.js (fichier de base du projet)



## Comment démarrer ? 

Clonez le projet et exécutez directement cette commande pour installer les dépendances 

```
npm install
```

## Ajouter une nouvelle fonctionnalité 

- Créer un nouveau component dans le dossier views de votre module
- NB: Au niveau du component, n'oubliez pas d'ajouter le <PanelHeader /> en haut avant le contenu
- Ajouter ce component dans le fichier du module concerné 