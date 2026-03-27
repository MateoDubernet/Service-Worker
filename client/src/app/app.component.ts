import { Component, OnInit } from '@angular/core';
import { PushNotificationHttpService } from './services/push-notification-http.service';
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'test-service-worker';

  constructor(private pushNotificationService: PushNotificationService) {}

  ngOnInit(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../custom-service-worker.js');
    }
  }
}