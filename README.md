# Projet Fullstack – Notifications Push (Angular & Spring Boot)

## Présentation
Ce projet a été réalisé dans un cadre d'étude et d'auto-formation durant mon alternance. L'objectif était de maîtriser le cycle de vie des Service Workers et l'implémentation du protocole Web Push.

### Architecture :
- **Front-end** : Angular & TypeScript (Gestion du cycle de vie du Service Worker, interception des événements Push, et gestion des permissions navigateurs).
- **Back-end** : Spring Boot (API REST, Java 11), gestion des Push Subscriptions et orchestration de l'envoi des payloads via la Web Push API..
- **Base de données** : PostgreSQL (Persistance des données).
- **Infrastructure** : Docker & Docker Compose.

**Prérequis pour ce projet :** Navigateur compatible avec les services workers et notifications push de préférence Chrome ou Firefox.

---

## Installation et Lancement
### 1. Clonage du dépôt
```bash
    git clone https://github.com/MateoDubernet/service-worker.git
```

### 2. Lancement (Docker)
**Prérequis :** [Docker Desktop](https://www.docker.com/products/docker-desktop) installé et lancé.

```bash
    cd ./service-worker
    docker-compose up --build
```

### 3. Accès
- Interface Client : http://localhost (Port 80)
- API Backend : http://localhost:8080

[!IMPORTANT]
Assurez-vous que les ports 80 et 8080 ne sont pas déjà utilisés par une autre application sur votre machine avant de lancer le conteneur.

---

## Fonctionnement du Système
1. Activation : L'utilisateur clique sur "Activer notification". Le navigateur demande la permission et enregistre le Service Worker.

2. Abonnement : Le client génère une Push Subscription (endpoint + clés) et l'envoie au serveur qui la stocke en base de données.

3. Déclenchement : L'utilisateur clique sur "Envoyer notification". Le client appelle le serveur.

4. Envoi : Le serveur récupère l'abonnement, crée un payload JSON encodé en UTF-8 et l'envoie via la Push API.

5. Réception : Le Service Worker reçoit l'événement push et affiche la notification même si l'onglet est fermé.
