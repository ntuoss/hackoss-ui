import { Component, OnInit } from '@angular/core';
import { PhotosService, Photo } from '../services/photos/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  photos: Photo[];

  constructor(private photosService: PhotosService) { }

  async getPhotos() {
    this.photos = await this.photosService.getPhotos();
  }

}
