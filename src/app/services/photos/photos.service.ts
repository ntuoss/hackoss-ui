import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get(`https://${environment.facebookApiUrl}/${environment.facebookPageId}`, {
      params: {
        'access_token': environment.facebookAccessToken,
        'fields': 'albums{name,photos{images}}'
       }
    }).toPromise();
  }

}

export interface Photo {
  image: string;
  link: string;
  name: string;
}
