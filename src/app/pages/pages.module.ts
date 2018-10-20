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
import { NavigationComponent } from './home/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

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
  EventsComponent,
  NavigationComponent
];

const FONTAWESOME_ICONS = [
  faLocationArrow
];

library.add(...FONTAWESOME_ICONS);

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ... PAGES_COMPONENTS
  ]
})
export class PagesModule { }
