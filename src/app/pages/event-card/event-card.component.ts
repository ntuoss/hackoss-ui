import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/model/hackoss';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: Event;
  isPastEvent: boolean;

  constructor() { }

  ngOnInit() {
    this.isPastEvent = this.event.endTime.getTime() < Date.now();
  }

  openRegistrationPage() {
    window.open(this.event.eventbrite.url);
  }
}



