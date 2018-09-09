import { Component } from "@angular/core";
import { EventsService, Event } from "./services/events/events.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  events: Event[];

  constructor(private eventsService: EventsService) {}

  async getGoogleCalendarEvents() {
    this.events = await this.eventsService.getGoogleCalendarEvents();
  }

  async getEventbriteEvents() {
    this.events = await this.eventsService.getEventbriteEvents();
  }
}
