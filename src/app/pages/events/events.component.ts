import { Component, OnInit } from '@angular/core';
import { Event, EventsService } from '../../services/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
  }

  async getGoogleCalendarEvents() {
    this.events = await this.eventsService.getGoogleCalendarEvents();
  }

  async getEventbriteEvents() {
    this.events = await this.eventsService.getEventbriteEvents();
  }

}
