import { NgModule } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';

const PAGES_COMPONENTS = [
  EventsComponent,
  DataComponent,
  PhotosComponent
];

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ... PAGES_COMPONENTS
  ]
})
export class PagesModule { }
