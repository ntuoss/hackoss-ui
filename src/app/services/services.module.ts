import { NgModule } from '@angular/core';
import { EventsService } from './events/events.service';
import { PhotosService } from './photos/photos.service';
import { FirebaseService } from './firebase/firebase.service';

const SERVICES = [
    EventsService,
    PhotosService,
    FirebaseService
];

@NgModule({
  declarations: [],
  imports: [],
  providers : [
    ...SERVICES,
  ]
})
export class ServicesModule { }
