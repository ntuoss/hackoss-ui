import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http
      .get(
        `https://${environment.googleApiUrl}/calendar/v3/calendars/${
          environment.googleCalendarId
        }/events`,
        {
          params: {
            key: environment.googleApiKey
          }
        }
      )
      .toPromise();
  }
}
