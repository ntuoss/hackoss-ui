import { Injectable } from '@angular/core';
import { LocationsRepository } from 'hackoss';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class LocationsService extends LocationsRepository {

    constructor(firebaseService: FirebaseService) {
        super(firebaseService);
    }

}
