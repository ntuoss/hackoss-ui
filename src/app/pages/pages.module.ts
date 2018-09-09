import { NgModule } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { CommonModule } from '@angular/common';

const PAGES_COMPONENTS = [
    EventsComponent
];

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class PagesModule { }
