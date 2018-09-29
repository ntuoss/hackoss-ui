import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { AboutComponent } from './home/about/about.component';
import { FooterComponent } from './home/footer/footer.component';
import { LocationComponent } from './home/location/location.component';
import { ContactComponent } from './home/contact/contact.component';
import { EventsComponent } from './home/events/events.component';

const PAGES_COMPONENTS = [
  EventsComponent,
  DataComponent,
  PhotosComponent,
  HomeComponent,
  LandingComponent,
  AboutComponent,
  FooterComponent,
  LocationComponent,
  ContactComponent,
  EventsComponent
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
