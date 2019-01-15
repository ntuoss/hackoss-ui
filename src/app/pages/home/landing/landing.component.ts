import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  videoUrl: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.storage.refFromURL('gs://hackoss.appspot.com/videos/landing-background.mp4').getDownloadURL().then(url => {
      console.log(url);
    });
    const videoElement: any = document.getElementById('landing-background-video');
    videoElement.muted = 'muted';
  }

}
