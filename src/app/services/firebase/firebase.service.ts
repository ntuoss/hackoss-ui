import { Injectable } from '@angular/core';
import { FirebaseRepository } from 'hackoss';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService extends FirebaseRepository {

    constructor() {
        super(environment.firebase);
    }

}
