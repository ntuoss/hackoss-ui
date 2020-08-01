import { Injectable } from '@angular/core';
import { PeopleRepository } from '@ntuoss/hackoss';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class PeopleService extends PeopleRepository {

    constructor(firebaseService: FirebaseService) {
        super(firebaseService);
    }

}
