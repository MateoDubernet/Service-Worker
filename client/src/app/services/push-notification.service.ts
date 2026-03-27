import { Injectable } from '@angular/core';
import { PushNotificationHttpService } from './push-notification-http.service';
import { NotificationPayload } from '../test-notif/notification-payload';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(
    private pushNotificationHttpService: PushNotificationHttpService,
  ) {}

  async subscribeToNotifications() {
    if (('Notification' in window)) {
      this.askNotificationPermission();
    }
  }

  private async askNotificationPermission() {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      this.registerServiceWorker();
    }
  }

  private async registerServiceWorker() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      let subscription = await registration.pushManager.getSubscription();

      if (!subscription) {
        this.pushNotificationHttpService.getPublicKey().subscribe(key => {
          registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: key
          })
          .then(subscription => {
            console.log('Subscription:', subscription);
            this.pushNotificationHttpService.saveSubscription(subscription).subscribe();
          })
          .catch(err => console.error('Subscription error:', err));
        });
      }
    }
  }

  sendNotification(notificationPayload: NotificationPayload) {
    this.pushNotificationHttpService.sendNotification(notificationPayload).subscribe();
  }
}