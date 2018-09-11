import { NgModule } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';

const PAGES_COMPONENTS = [
    EventsComponent,
    DataComponent
];

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule { }
