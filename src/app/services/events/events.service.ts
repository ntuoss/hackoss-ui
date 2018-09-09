import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEventbriteEvents(): Promise<Event[]> {
    return this.http.get(`https://${environment.eventbriteApiUrl}/v3/users/me/owned_events/`, {
      params: { token: environment.eventbriteToken }
    }).toPromise()
      .then((response: { events: any[] }) =>
        response.events.map(event => ({
          title: event.name.text,
          description: event.description.text,
          start: event.start.utc,
          url: event.url
        }))
      );
  }

  getGoogleCalendarEvents(limit: number = 10): Promise<Event[]> {
    return this.http.get(`https://${environment.googleApiUrl}/calendar/v3/calendars/${environment.googleCalendarId}/events`, {
      params: { key: environment.googleApiKey }
    }).toPromise()
      .then((response: { items: any[] }) =>
        response.items
          .reverse()
          .slice(0, limit)
          .map(event => ({
            title: event.summary,
            description: event.description,
            start: event.start.dateTime,
            url: event.htmlLink
          }))
      );
  }
}

export interface Event {
  title: string;
  description: string;
  start: string;
  url: string;
}
