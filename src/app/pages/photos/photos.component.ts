import { Component } from '@angular/core';
import { PhotosService } from '../../services/photos/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  constructor(private photosService: PhotosService) { }

  async getPhotos() {
    console.log(await this.photosService.getPhotos());
  }

}
