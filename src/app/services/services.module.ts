import { NgModule } from '@angular/core';
import { PhotosService } from './photos/photos.service';
import { FirebaseService } from './firebase/firebase.service';
import { EventsService } from './events/events.service';
import { PeopleService } from './people/people.service';
import { LocationsService } from './locations/locations.service';

const SERVICES = [
  FirebaseService,
  EventsService,
  PeopleService,
  LocationsService,
  PhotosService
];

@NgModule({
  declarations: [],
  imports: [],
  providers : [
    ...SERVICES,
  ]
})
export class ServicesModule { }
