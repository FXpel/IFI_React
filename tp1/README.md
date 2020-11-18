# TP 1

## Objectif
On va développer une ToDoListe, c'est-à-dire une liste de tâches à effectuer.
Notre application comporte un champ pour entrer le nom de l'item, et la liste des items.

![](../images/tp1.jpg)

## Consignes
Le fichier racine est `App.js`. Il fait appel au composant ToDoList.
Pour l'instant, le seul fichier à compléter est `src/components/ToDoList.jsx`. À chaque numéro de question correspond une TODO.
On peut voir dans la méthode `render()` qu'un composant ToDoList fait appel à d'autres composants: InputForm et List.
Ces deux composants envoie des évènements que l'on doit intercepter au moyen de Handlers.
Par exemple, l'InputForm fait remonter un évènement onInput lorsque la valeur du `form` change. Cet évènement est intercepté par le inputHandler.

1. En s'inspirant du `inputHandler()`, compléter le `submitHandler()`. Ce handler intercepte la valeur du onSubmit de l'InputForm.
2. Compléter de la même manière le `deleteHandler()`, appelé lors d'un clic sur le bouton delete d'un objet.
3. Afficher la liste des objets dans le composant List. Indication: regardez du côté du state du composant.