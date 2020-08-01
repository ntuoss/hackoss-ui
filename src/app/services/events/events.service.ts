import { Injectable } from '@angular/core';
import { EventsRepository, Event } from '@ntuoss/hackoss';
import { FirebaseService } from '../firebase/firebase.service';
import { PeopleService } from '../people/people.service';
import { LocationsService } from '../locations/locations.service';
import { OrganisationsService } from '../organisations/organisations.service';
import { ArtworksService } from '../artworks/artworks.service';


@Injectable({
  providedIn: 'root'
})
export class EventsService extends EventsRepository {

  constructor(
    firebaseService: FirebaseService,
    peopleService: PeopleService,
    locationsService: LocationsService,
    organisationsService: OrganisationsService,
    artworksService: ArtworksService) {
    super(firebaseService, peopleService, locationsService, organisationsService, artworksService);
  }

  async getFeaturedEvents(count: number = 3): Promise<Event[]> {
    const liveEvents = await this.getEvents([{
      fieldPath: 'status',
      opStr: '==',
      value: 'live'
    }], count);

    let completedEvents: Event[] = [];
    if (liveEvents.length < count) {
      completedEvents = await this.getEvents([{
        fieldPath: 'status',
        opStr: '==',
        value: 'completed'
      }], count - liveEvents.length);
    }

    return liveEvents.concat(completedEvents);
  }

}
