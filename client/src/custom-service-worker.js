self.addEventListener('install', () => {
    self.skipWaiting();
})

self.addEventListener('push', (event) => {
    let data = { title: "Notification", body: "Pas de contenu" };

    if (event.data) {
        try {
            data = event.data.json();
        } catch (err) {
            data = { title: "Notification", body: event.data.text() };
        }
    }

    console.log('Notification sent');
    
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.message,
            data: data,
        })
    )
})

self.addEventListener('notificationclick', (event) => {
    console.log('Clicked on notification' + event.notification.data);
})

