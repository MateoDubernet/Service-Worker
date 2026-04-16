# Projet Fullstack – Notifications Push (Angular & Spring Boot)

## Présentation
Ce projet a été réalisé dans un cadre d'étude et d'auto-formation durant mon alternance. L'objectif était de maîtriser le cycle de vie des Service Workers et l'implémentation du protocole Web Push.

### Stack Technique
- **Angular**
- **Spring**
- **Docker**

---

## Installation et Lancement
### 1. Clonage du dépôt
```bash
    git clone https://github.com/MateoDubernet/service-worker.git
```

### 2. Lancement (Docker)
**Prérequis :** [Docker Desktop](https://www.docker.com/products/docker-desktop) installé et lancé.

[!IMPORTANT]
Assurez-vous que les ports 80 et 8080 ne sont pas déjà utilisés par une autre application sur votre machine avant de lancer le conteneur.

```bash
    cd ./service-worker
    docker-compose up --build
```

### 3. Accès
Ouvrir un navigateur web compatible avec les services workers et notifications push (ex: Chrome ou Firefox) et aller à l'adresse: http://localhost

---

## Fonctionnement du Système
1. **Activation** : L'utilisateur clique sur "Activer notification". Le navigateur demande la permission et enregistre le Service Worker.

2. **Abonnement** : Le client génère une Push Subscription (endpoint + clés) et l'envoie au serveur qui la stocke en base de données.

3. **Déclenchement** : L'utilisateur clique sur "Envoyer notification". Le client appelle le serveur.

4. **Envoi** : Le serveur récupère l'abonnement, crée un payload JSON encodé en UTF-8 et l'envoie via la Push API.

5. **Réception** : Le Service Worker reçoit l'événement push et affiche la notification même si l'onglet est fermé.
