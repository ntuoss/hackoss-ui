import { Injectable } from '@angular/core';
import { ArtworksRepository } from '@ntuoss/hackoss';
import { FirebaseService } from '../firebase/firebase.service';
import { PeopleService } from '../people/people.service';

@Injectable({
    providedIn: 'root'
})
export class ArtworksService extends ArtworksRepository {

    constructor(firebaseService: FirebaseService, peopleService: PeopleService) {
        super(firebaseService, peopleService);
    }

}
