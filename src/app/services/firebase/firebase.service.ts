import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  data: firebase.database.Database;
  storage: firebase.storage.Storage;

  constructor() {
    this.init();
  }

  init() {
    const config = {
      apiKey: environment.firebaseApiKey,
      authDomain: `${environment.firebaseAuthDomain}.firebaseapp.com`,
      databaseURL: `https://${environment.firebaseDatabaseName}.firebaseio.com`,
      projectId: environment.firebaseProjectId,
      storageBucket: `${environment.firebaseBucket}.appspot.com`,
      messagingSenderId: environment.firebaseSenderId,
    };
    firebase.initializeApp(config);
    this.data = firebase.database();
    this.storage = firebase.storage();
  }
}
