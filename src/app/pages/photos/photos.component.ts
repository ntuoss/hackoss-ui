import { Component } from '@angular/core';
import { PhotosService, Album } from '../../services/photos/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  albums: Album[];

  constructor(private photosService: PhotosService) { }

  async getPhotos() {
    this.albums = await this.photosService.getFacebookPageAlbums();
  }

}
