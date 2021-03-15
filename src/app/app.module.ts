import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBsdUR4At-KnqzEeuCnNUgj2rd0j11qMYs",
  authDomain: "atelier4-4e363.firebaseapp.com",
  projectId: "atelier4-4e363",
  storageBucket: "atelier4-4e363.appspot.com",
  messagingSenderId: "273314096871",
  appId: "1:273314096871:web:d2d001404d17fc64da2442"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule 
  ,AngularFireModule.initializeApp(firebaseConfig),
AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
