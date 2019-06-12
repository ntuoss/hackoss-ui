import { Injectable } from '@angular/core';
import { OrganisationsRepository } from 'hackoss';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class OrganisationsService extends OrganisationsRepository {

    constructor(firebaseService: FirebaseService) {
        super(firebaseService);
    }

}
