import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  videoUrl: string = environment.landingPageUrl;

  constructor() { }

  ngOnInit() {
    const videoElement: any = document.getElementById('landing-background-video');
    videoElement.muted = 'muted';
  }

}
