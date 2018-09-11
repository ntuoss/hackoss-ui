import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../../environments/environment';
import '@firebase/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataRef: firebase.database.Reference;

  constructor() {
    this.initFirebase();
  }

  initFirebase() {
    const config = {
      apiKey: environment.firebaseApiKey,
      authDomain: `${environment.firebaseAuthDomain}.firebaseapp.com`,
      databaseURL: `https://${environment.firebaseDatabaseName}.firebaseio.com`,
      projectId: environment.firebaseProjectId,
      storageBucket: `${environment.firebaseBucket}.appspot.com`,
      messagingSenderId: environment.firebaseSenderId,
    };
    firebase.initializeApp(config);
    this.dataRef = firebase.database().ref('/');
  }

  getData() {
    this.dataRef.on('value', snapShot => {
      console.log(snapShot.val());
    });
  }
}
