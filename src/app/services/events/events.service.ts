import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) { }

  shorten(str, maxLen, separator = ' ') {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

  async getFeaturedEvent({ wordCount = 400 }): Promise<Event> {
    const eventList = await this.getEventbriteEvents(wordCount);
    const upcomingEvents = eventList.filter((e) => new Date(e.start).getTime() > Date.now());
    return upcomingEvents.length > 0 ? upcomingEvents[upcomingEvents.length - 1] : null;
  }

  getEventbriteEvents(wordCount: number): Promise<Event[]> {
    return this.http.get(`https://www.eventbriteapi.com/v3/users/me/owned_events/`, {
      params: {
        token: environment.eventbriteToken,
        expand: 'venue',
        order_by: 'start_desc'
      }
    }).toPromise()
      .then((response: { events: any[] }) =>
        response.events.map(event => ({
          title: event.name.text,
          description: event.description.text,
          summary: event.description.text.length < wordCount
            ? event.description.text
            : event.description.text.substr(0, event.description.text.lastIndexOf(' ', wordCount)) + '...',
          start: event.start.utc,
          url: event.url,
          logo: event.logo.url,
          original_logo: event.logo.original.url,
          location: event.venue.address.localized_multi_line_address_display
        }))
      );
  }

  // getGoogleCalendarEvents(limit: number = 10): Promise<Event[]> {
  //   return this.http.get(`https://www.googleapis.com/calendar/v3/calendars/${environment.googleCalendarId}/events`, {
  //     params: { key: environment.googleApiKey }
  //   }).toPromise()
  //     .then((response: { items: any[] }) =>
  //       response.items
  //         .reverse()
  //         .slice(0, limit)
  //         .map(event => ({
  //           title: event.summary,
  //           description: event.description,
  //           start: event.start.dateTime,
  //           url: event.htmlLink
  //         }))
  //     );
  // }
}

export interface Event {
  title: string;
  description: string;
  summary: string;
  start: string;
  url: string;
  logo: string;
  original_logo: string;
  location: string[];
}
