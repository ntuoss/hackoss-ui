import { Component, OnInit } from '@angular/core';
import { EventsService, Event } from 'hackoss';

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

  async getEventbriteEvents() {
    this.events = await this.eventsService.getEvents();
    console.log(this.events);
  }
}
