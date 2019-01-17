import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  videoUrl: string;

  constructor() { }

  ngOnInit() {
    const videoElement: any = document.getElementById('landing-background-video');
    videoElement.muted = 'muted';
  }

}
