import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { FirebaseConfig } from './firebase.config';
export class FirebaseRepository {

    firestore: firebase.firestore.Firestore;

    constructor(config: FirebaseConfig) {
        this.init(config);
    }

    private init(config: FirebaseConfig) {
        firebase.initializeApp(config);
        this.firestore = firebase.firestore();
    }
}
