import { Component, OnInit } from '@angular/core';
import { Event } from 'hackoss';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  featuredEvents: Event[] = [];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.fetchFeaturedEvents();
  }

  async fetchFeaturedEvents() {
    this.featuredEvents = await this.eventsService.getFeaturedEvents();
  }
}
