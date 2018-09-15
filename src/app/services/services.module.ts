import { NgModule } from '@angular/core';
import { EventsService } from './events/events.service';
import { PhotosService } from './photos/photos.service';

const SERVICES = [
    EventsService,
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
