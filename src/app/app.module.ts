import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: "AIzaSyA7P8bOlfnK3QLLGUdNgXr6ZAuh3Pqf0gw",
  authDomain: "sidapp-88fbf.firebaseapp.com",
  databaseURL: "https://sidapp-88fbf.firebaseio.com",
  projectId: "sidapp-88fbf",
  storageBucket: "sidapp-88fbf.appspot.com",
  messagingSenderId: "583630570016"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


