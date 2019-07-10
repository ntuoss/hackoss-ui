import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { EventCardComponent } from './event-card/event-card.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { AboutComponent } from './home/about/about.component';
import { FooterComponent } from './home/footer/footer.component';
import { LocationComponent } from './home/location/location.component';
import { ContactComponent } from './home/contact/contact.component';
import { EventsComponent } from './home/events/events.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { MobileComponent } from './mobile/mobile.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
  faLocationArrow,
  faHeart,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelopeOpen,
  faCodeBranch,
  faUsers,
  faRocket,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

const PAGES_COMPONENTS = [
  DataComponent,
  EventCardComponent,
  PhotosComponent,
  HomeComponent,
  LandingComponent,
  AboutComponent,
  FooterComponent,
  LocationComponent,
  ContactComponent,
  EventsComponent,
  NavigationComponent,
  MobileComponent,
];

const FONTAWESOME_ICONS = [
  faLocationArrow,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelopeOpen,
  faHeart,
  faFacebookF,
  faTwitter,
  faInstagram,
  faCodeBranch,
  faUsers,
  faRocket,
  faHandshake,
];

library.add(...FONTAWESOME_ICONS);

@NgModule({
  declarations: [...PAGES_COMPONENTS, MobileComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, MomentModule, FormsModule],
  exports: [...PAGES_COMPONENTS],
})
export class PagesModule {}
