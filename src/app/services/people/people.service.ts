import { Injectable } from '@angular/core';
import { PeopleRepository } from 'src/app/model/hackoss';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class PeopleService extends PeopleRepository {

    constructor(firebaseService: FirebaseService) {
        super(firebaseService);
    }

}
