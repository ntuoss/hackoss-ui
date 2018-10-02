import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  map;
  ntuLocation = [103.680461, 1.347392];

  constructor() { }

  ngOnInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhcmVuY2VjYXN0aWxsbyIsImEiOiJjamtrbDQ4Y2EwaGRqM3FtZ3hmYTg0MXk0In0.GqNGJYtxVGWG0epXUtqILw';
    const locationBound = 0.017;
    this.map = new mapboxgl.Map({
      container: 'map',
      center: this.ntuLocation,
      zoom: 16,
      style: 'mapbox://styles/mapbox/light-v9',
      minZoom: 12,
      maxZoom: 18,
      maxBounds: new mapboxgl.LngLatBounds([this.ntuLocation[0] - locationBound, this.ntuLocation[1] - locationBound],
        [this.ntuLocation[0] + locationBound, this.ntuLocation[1] + locationBound]),
    });

    const marker = new mapboxgl.Marker().setLngLat(this.ntuLocation).addTo(this.map);
  }

  onClickBack() {
    this.map.flyTo({
      center: this.ntuLocation,
      zoom: 16,
      speed: 1,
      curve: 1,
    });
  }
}
