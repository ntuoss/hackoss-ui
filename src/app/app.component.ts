import { Component } from "@angular/core";
import { CalendarService } from "./services/calendar/calendar.service";
import { EventsService, Event } from "./services/events/events.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  events: Event[];

  constructor(
    private calendarService: CalendarService,
    private eventsService: EventsService
  ) {}

  async getGoogleCalendarEvents() {
    console.log(await this.calendarService.getEvents());
  }

  async getEventbriteEvents() {
    this.events = await this.eventsService.getEvents();
  }
}
