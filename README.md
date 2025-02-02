﻿## test_ionic_vue3
 Ce mini_projet est un static dashboard développé avec Vue 3, Ionic et Chart.js.Il permet à l'utilisateur de saisir le nom d'une ville et d'afficher les informations météorologiques correspondantes.. Ensuite, un graphique représentant l'évolution des températures à différents moments de la journée est affiché.
Le projet se connecte à l'API OpenWeatherMap pour récupérer les données météorologiques d'une ville donnée.

## Technologies utilisées
- **Vue 3** : Framework JavaScript pour créer l'interface utilisateur.
- **Ionic** : Framework pour créer des applications mobiles hybrides avec des composants UI natifs.
- **Chart.js** : Bibliothèque JavaScript pour créer des graphiques interactifs.
- **Axios** : Client HTTP pour effectuer des requêtes API.
- **OpenWeatherMap API** : Fournisseur d'informations météorologiques.
  
## Fonctionnalités
- L'utilisateur peut saisir le nom d'une ville et cliquer sur un bouton pour rediriger vers une autre page où les informations météorologiques de la ville sont affichées.
- Affichage des températures et de l'humidité pour la ville donnée.
- Visualisation graphique des températures sur un intervalle de temps.
- Changement dynamique de la ville pour obtenir les données météorologiques spécifiques.
  
 ## Installation
  Assurez-vous d'avoir installé les outils suivants sur votre machine :
Node.js (version 14.x ou supérieure). Vous pouvez le télécharger à partir de [Node.js](https://nodejs.org/).
- Ionic CLI pour créer et gérer des applications Ionic. Vous pouvez installer Ionic CLI en suivant les étapes de la documentation officielle : [Installation d'Ionic avec Vue](https://ionicframework.com/docs/vue/overview).

- Vous pouvez également suivre ce lien pour passer de TypeScript à JavaScript dans votre projet : [Changer de TypeScript à JavaScript](https://ionicframework.com/docs/vue/quickstart).




## Utilisation
### 1-Page principale :

- Ouvrez l'application dans un navigateur. Vous serez sur la page principale, où vous verrez un champ de saisie.
- Dans ce champ, entrez le nom d'une ville (par exemple, "Paris").
- Cliquez sur le bouton pour obtenir les informations météorologiques de cette ville. Vous serez redirigé vers la page "Temperature" où les informations météorologiques pour la ville choisie seront affichées.
- 
### 2-Page Temperature :

- Dans cette page, vous verrez deux boutons :
   - Graphique : Si vous cliquez sur ce bouton, vous serez redirigé vers la page "Graphique", où un 
   graphique montrant l'évolution des températures sur différents moments de la journée sera affiché.
- Retour à l'accueil : Si vous cliquez sur ce bouton, vous serez redirigé vers la page principale (Home).

## API utilisée

Le projet utilise l'API OpenWeatherMap pour récupérer les données météorologiques des villes. Vous devez obtenir une clé API gratuite depuis leur site pour pouvoir l'utiliser. Pour plus d'informations sur l'API et comment obtenir la clé, vous pouvez consulter leur [documentation officielle](https://openweathermap.org/api).
.

## Décisions prises

- Vue 3 a été choisi pour la gestion des composants réactifs et de l'état de l'application. Cela permet d'avoir une structure propre et modulaire pour le projet.
- Ionic est utilisé pour la création de l'interface mobile, garantissant une expérience utilisateur fluide avec des composants natifs.
- Chart.js est utilisé pour l'affichage graphique des températures, ce qui permet d'avoir un graphique interactif facile à personnaliser.
- Axios a été utilisé pour gérer les requêtes API et récupérer les données météorologiques en temps réel.

## Limitations
- Limites d'API : L'API OpenWeatherMap a une limite de requêtes pour les utilisateurs gratuits. Si cette limite est atteinte, vous devrez attendre avant de pouvoir effectuer une nouvelle requête.
- Prise en charge des villes : L'application ne prend en charge que les villes reconnues par l'API d'OpenWeatherMap. Certaines petites villes peuvent ne pas être disponibles.
- Graphiques : Le graphique montre l'évolution des températures, mais il peut ne pas afficher de données en temps réel si l'API est lente ou si la ville ne dispose pas de suffisamment de données horaires.
