import { Component } from '@angular/core';
import { CalendarService } from './services/calendar/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private calendarService: CalendarService) { }

  async getEvents() {
    console.log(await this.calendarService.getEvents());
  }
}
