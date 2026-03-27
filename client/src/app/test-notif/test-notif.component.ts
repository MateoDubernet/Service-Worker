import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from '../services/push-notification.service';
import { NotificationPayload } from './notification-payload';

@Component({
  selector: 'app-test-notif',
  templateUrl: './test-notif.component.html',
  styleUrl: './test-notif.component.scss',
})
export class TestNotifComponent implements OnInit {

  notificationPayload: NotificationPayload = { title: 'New notification', message: 'You have a new notification'};

  constructor(private pushNotificationService: PushNotificationService) {}

  ngOnInit(): void {}

  subscribeToNotifications() {
    this.pushNotificationService.subscribeToNotifications();
  }

  sendNotification() {
    this.pushNotificationService.sendNotification(this.notificationPayload);
  }
}