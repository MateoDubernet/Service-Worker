# Projet Fullstack – Notifications Push (Angular & Spring Boot)

## Contexte
Ce projet a été réalisé durant mon alternance dans le but de me former à l'utilisation des Service Workers et des Notifications Push.

L'architecture se compose de deux parties :
- Client (Angular) : Gère l'interface utilisateur, l'enregistrement du Service Worker et la demande de permissions.

- Serveur (Spring Boot) : Gère le stockage des abonnements (Push Subscriptions) dans une base PostgreSQL et l'envoi des payloads de notification.

---

## Prérequis
### Client (Front-end)
- Node.js & npm
- Angular CLI (npm install -g @angular/cli)
- Navigateur compatible (Chrome/Firefox)

### Serveur (Back-end)
- Java 11 (Amazon Corretto recommandé)
- PostgreSQL
- IntelliJ IDEA (ou autre IDE Java)

---

## Installation et Lancement
### 1. Clonage des dépôts
1. Cloner le client :
```bash
    git clone https://github.com/MateoDubernet/service-worker-client.git
```

2. Cloner le serveur :
```bash
    git clone https://github.com/MateoDubernet/service-worker-server.git
```

### 2. Configuration du Serveur (Back-end)
1. Base de données : Créez une base de données nommée service_worker dans PostgreSQL et chargez le fichier service_worker.sql.
2. Propriétés : Modifiez src/main/resources/application.properties avec vos identifiants de connexion.
3. IDE : Ouvrez le projet dans IntelliJ, configurez le SDK sur Java 11 et lancez la classe principale com.example.demo.DemoApplication.

### 3. Configuration du Client (Front-end)
1. Accédez au dossier : cd service-worker-client.
2. Installez les dépendances : npm install.
3. Lancez l'application : ng serve.
4. Ouvrez votre navigateur à l'adresse : http://localhost:4200.

---

## Fonctionnement du Système
### Flux de travail
1. Activation : L'utilisateur clique sur "Activer notification". Le navigateur demande la permission et enregistre le Service Worker.

2. Abonnement : Le client génère une Push Subscription (endpoint + clés) et l'envoie au serveur qui la stocke en base de données.

3. Déclenchement : L'utilisateur clique sur "Envoyer notification". Le client appelle le serveur.

4. Envoi : Le serveur récupère l'abonnement, crée un payload JSON encodé en UTF-8 et l'envoie via la Push API.

5. Réception : Le Service Worker reçoit l'événement push et affiche la notification même si l'onglet est fermé.
