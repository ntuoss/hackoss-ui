import { NgModule } from '@angular/core';
import { PhotosService } from './photos/photos.service';

const SERVICES = [
    PhotosService
];

@NgModule({
  declarations: [],
  imports: [],
  providers : [
    ...SERVICES,
  ]
})
export class ServicesModule { }
