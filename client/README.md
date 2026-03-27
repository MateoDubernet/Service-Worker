# Application Client – Notifications Push

## Contexte

### Description
Il s'agit d'un projet réaliser durant mon alternance dans le but de me former aux service worker et notification push.

Ceci est la partie client du projet, cette application front-end Angular permet à un utilisateur de recevoir des notifications push dans son navigateur via un service worker.

### Projet lié
Cette application est utilisé conjointement avec le projet serveur disponible ici :
https://github.com/MateoDubernet/service-worker-server

---

## Prérequis

- Node.js et npm installés
- Angular CLI installé globalement (`npm install -g @angular/cli`)
- Navigateur compatible Push API et Notifications API (Chrome ou Firefox recommandé)
- Service worker activé dans le navigateur

---

## Installation & Lancement
### 1. Cloner le projet
```bash
    git clone https://github.com/MateoDubernet/service-worker-client.git
```

### 2. Aller sur le projet
```bash
    cd service-worker-client
```

### 3. Installer les dépendances
```bash
    npm install
```
ou
```bash
    npm install --force
```

### 4. Lancer l’application côté client
```bash
    ng serve
```

### 5. Lancer l’application côté serveur
Lien serveur: https://github.com/MateoDubernet/service-worker-server

### 6. Ouvrir l'application
Aller à l'adresse localhost:4200 dans le navigateur (google chrome ou firefox)

---

## Fonctionnalités

1. **Activation des notifications**
   - L'utilisateur clique sur le bouton **"Activer notification"**.
   - Le navigateur demande la permission pour afficher les notifications.
   - Si l'utilisateur accepte, un service worker est enregistré et prêt à recevoir les notifications push.

2. **Envoi de la notification**
   - Après avoir activé les notifications, l'utilisateur peut cliquer sur le bouton **"Envoyer notification"**.
   - Cette action déclenche un appel au serveur qui envoie la notification push au navigateur.
   - Le service worker reçoit l'événement `push` et affiche la notification avec le titre et le message reçus.
