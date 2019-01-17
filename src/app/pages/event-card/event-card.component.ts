import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'hackoss';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

  showDetails(event) {
    console.log(event);
  }

  cardClick(url) {
    window.open(url);
  }

  getDateFromUTC(time) {
    return new Date(time).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  isPastEvent(time) {
    return (new Date(time).getTime() < Date.now());
  }
}



