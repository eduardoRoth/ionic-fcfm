import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonHeader, IonContent, IonToolbar, IonTitle],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title> Home Page </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content> </ion-content>
  `,
})
export class HomeComponent {}
