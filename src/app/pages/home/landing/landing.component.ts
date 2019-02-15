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

  SignUp(){
    location.href = "https://docs.google.com/forms/d/e/1FAIpQLScogpWz7GTiHglajjeQWmRn5shaQUcYgwj9btmf0APOmiY0CA/viewform";
  }

  Apply(){
    location.href = "https://docs.google.com/document/d/1RvR_HU7okK5EePfBbDGp_nCGNPPzxWLQJcLhgCLVcXk/edit";
  }
}
