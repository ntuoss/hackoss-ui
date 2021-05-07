import { Injectable } from '@angular/core';
import { FirebaseRepository } from 'src/app/model/hackoss';
import { environment } from 'src/environments/environment';
import Feedback from 'src/app/model/Feedback';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService extends FirebaseRepository {
  constructor() {
    super(environment.firebase);
  }

  public postFeedback(content: Feedback) {
    const time = Date.now();
    return this.firestore
      .collection('feedbacks')
      .doc(time.toString())
      .set(content);
  }
}
