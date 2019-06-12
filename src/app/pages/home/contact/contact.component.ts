import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  firebaseService: FirebaseService;

  constructor(firebaseService: FirebaseService) {
    this.firebaseService = firebaseService;
  }

  ngOnInit() {}

  sendFeedback(feedbackForm) {
    this.firebaseService.postFeedback(feedbackForm.value).then(() => {
      alert('Your message has been sent!');
      feedbackForm.reset();
    });
  }
}
