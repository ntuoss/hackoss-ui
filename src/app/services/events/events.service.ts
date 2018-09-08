import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Promise<Event[]> {
    return this.http.get(`https://${environment.eventbriteUrl}/v3/users/me/owned_events/`, {
      params: { token: environment.eventbriteToken }
    }).toPromise()
    .then((response: any) =>
      response.events.map(event => ({
        title: event.name.text,
        description: event.description.text,
        start: event.start.utc
      })));
  }

}

export interface Event {
  title: string;
  description: string;
  start: string;
}
