import { NgModule } from '@angular/core';
import { EventsService } from './events/events.service';

const SERVICES = [
    EventsService
];

@NgModule({
  declarations: [],
  imports: [],
  providers : [
    ...SERVICES,
  ]
})
export class ServicesModule { }
