import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getFacebookPageAlbums(): Promise<Album[]> {
    return this.http.get(`https://graph.facebook.com/v3.1/${environment.facebookPageId}`, {
      params: {
        'access_token': environment.facebookAccessToken,
        'fields': 'albums{name,photos{images,link}}'
      }
    }).toPromise()
    .then((response: any) => response.albums.data.map(album => ({
      name: album.name,
      photos: album.photos.data.map(photo => ({
        facebookUrl: photo.link,
        imageUrls: photo.images.map(image => image.source)
      }))
    })));
  }

}

export interface Album {
  name: string;
  photos: Photo[];
}

export interface Photo {
  imageUrls: string[];
  facebookUrl: string;
}
