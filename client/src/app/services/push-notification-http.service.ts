import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationPayload } from '../test-notif/notification-payload';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationHttpService {

  private url = 'http://localhost:8080/service-worker/push-subscription'

  constructor(private http: HttpClient) { }

  getPublicKey(): Observable<string> {
    return this.http.get<string>(`${this.url}/get-key`, {responseType : 'text' as 'json'});
  }

  saveSubscription(subscription: PushSubscription) {
    return this.http.post(`${this.url}/save-subscription`, subscription);
  }

  sendNotification(notificationPayload: NotificationPayload) {
    return this.http.post(`${this.url}/send-notification`, notificationPayload);
  }
}
