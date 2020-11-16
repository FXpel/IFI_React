# TP 1

## Objectif
On va développer une ToDoListe, c'est-à-dire une liste de tâches à effectuer.
Notre application comporte un champ pour entrer le nom de l'item, et la liste des items.

"MOCKUP/DEMO"

## Consignes
Le fichier à compléter est `src/components/ToDoList.jsx`.
On peut voir qu'un composant ToDoList fait appel à d'autres composants: InputForm et List.
Ces deux composants envoie des évènements que l'on doit intercepter au moyen de Handler.

1. En s'inspirant du `inputHandler()`, compléter le `submitHandler()`. Ce handler intercepte la valeur du submit de l'InputForm.
2. Compléter le `deleteHandler()`, appelé lors d'un clic sur le bouton supprimer d'un objet.
3. Afficher la liste des objets dans le composant List.