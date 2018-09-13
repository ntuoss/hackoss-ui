import { NgModule } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';

const PAGES_COMPONENTS = [
    EventsComponent
];

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
    PhotosComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class PagesModule { }
