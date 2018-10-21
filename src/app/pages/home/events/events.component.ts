import { Component, OnInit } from '@angular/core';
import { EventsService, Event } from '../../../services/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  featuredEvent: Event;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEventbriteEvents();
  }

  // async getGoogleCalendarEvents() {
  //   this.events = await this.eventsService.getGoogleCalendarEvents();
  // }
  showDetails(event) {
    console.log(event);
  }

  async getEventbriteEvents() {
    this.events = await this.eventsService.getEventbriteEvents();
    this.featuredEvent = await this.eventsService.getFeaturedEvent();
    console.log(this.featuredEvent);
  }
  cardClick(url) {
    window.open(url);
  }

  getDateFromUTC(time) {
    return new Date(time).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  isPastEvent(time) {
    return (new Date(time).getTime() < Date.now());
  }
}
