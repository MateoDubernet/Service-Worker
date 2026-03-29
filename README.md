# Projet Fullstack – Notifications Push (Angular & Spring Boot)

## Présentation
Ce projet a été réalisé dans un cadre d'étude et d'auto-formation durant mon alternance. L'objectif était de maîtriser le cycle de vie des Service Workers et l'implémentation du protocole Web Push.

Points clés techniques :
- Frontend (Angular) : Gestion du cycle de vie du Service Worker, interception des événements Push, et gestion des permissions navigateurs.
- Backend (Spring Boot) : API REST pour la gestion des Push Subscriptions et orchestration de l'envoi des payloads via la Web Push API.
- Infrastructure : Conteneurisation complète avec Docker pour un déploiement agnostique.

---

## Installation et Lancement
### 1. Clonage du dépôt
```bash
    git clone https://github.com/MateoDubernet/service-worker.git
```

### 2. Installation Rapide
Le projet est entièrement conteneurisé. Une seule commande suffit pour lancer l'ensemble de l'architecture (Frontend, Backend, Base de données).

**Prérequis :** Docker Desktop installé et lancé.

#### 2.1 Lancement de l'application
```bash
    docker-compose up --build
```

#### 2.2 Accès
- Interface Client : http://localhost (Port 80)
- API Backend : http://localhost:8080

[!IMPORTANT]
Assurez-vous que les ports 80 et 8080 ne sont pas déjà utilisés par une autre application sur votre machine avant de lancer le conteneur.

### 3 Installation Manuelle
#### 3.1 Prérequis
**Client (Front-end) :**
  - Node.js & npm
  - Angular CLI (npm install -g @angular/cli)
  - Navigateur compatible (Chrome/Firefox)

**Serveur (Back-end) :**
  - Java 11 (Amazon Corretto recommandé)
  - PostgreSQL
  - IntelliJ IDEA (ou autre IDE Java)

#### 3.2 Configuration du Serveur (Back-end)
1. Base de données : Créez une base de données nommée service_worker dans PostgreSQL et chargez le fichier service_worker.sql.
2. Propriétés : Modifiez src/main/resources/application.properties avec vos identifiants de connexion.
3. IDE : Ouvrez le projet dans IntelliJ, configurez le SDK sur Java 11 et lancez la classe principale com.example.demo.DemoApplication.

#### 3.3 Configuration du Client (Front-end)
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
