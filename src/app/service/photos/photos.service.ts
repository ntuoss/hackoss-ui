import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(): Promise<Photo[]> {
    return this.http.get(`https://${environment.facebookphotosUrl}`, {
      params: { token: environment.facebookphotosToken }
    }).toPromise()
    .then((response: any) =>
    //is this the correct way to make an api call?
      FB.api(
        "/{photo-id}",
        function (response) {
            if (response && !response.error) {
                link: link,
                name: name,
            }
        }
      );

      FB.api(
        "...?fields={fieldname_of_type_PlatformImageSource}",
        function (response) {
            if (response && !response.error) {
                image: source,
            }
        }
      );
    );
  } 
    
}

export interface Photo {
  image: string;
  link: string;
  name: string;
}
