import { Injectable } from '@angular/core';
import { EventsRepository } from 'hackoss';
import { FirebaseService } from '../firebase/firebase.service';
import { PeopleService } from '../people/people.service';
import { LocationsService } from '../locations/locations.service';


@Injectable({
    providedIn: 'root'
})
export class EventsService extends EventsRepository {

    constructor(firebaseService: FirebaseService, peopleService: PeopleService, locationsService: LocationsService) {
        super(firebaseService, peopleService, locationsService);
    }

}
