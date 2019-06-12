import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map as MapboxMap, Marker, LngLatBounds } from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  animations: [
    trigger('mapMoved', [
      state('centered', style({
        opacity: '0',
      })),
      state('notCentered', style({
        opacity: '1',
      })),
      transition('notCentered => centered', animate('200ms')),
      transition('* => notCentered', animate('200ms'))
    ])
  ]
})
export class LocationComponent implements OnInit {

  map: MapboxMap;
  readonly LOCATION_COORDINATES: mapboxgl.LngLatLike = [103.680461, 1.347392];
  readonly DEFAULT_ZOOM_LEVEL = 16;

  mapIsCentered = true;

  constructor() { }

  ngOnInit() {

    (mapboxgl as any).accessToken = environment.mapboxToken;

    const locationBound = 0.02;
    this.map = new MapboxMap({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: this.LOCATION_COORDINATES,
      zoom: this.DEFAULT_ZOOM_LEVEL,
      pitch: 0,
      minZoom: 12,
      maxZoom: 18,
      maxBounds: new LngLatBounds([this.LOCATION_COORDINATES[0] - locationBound, this.LOCATION_COORDINATES[1] - locationBound],
        [this.LOCATION_COORDINATES[0] + locationBound, this.LOCATION_COORDINATES[1] + locationBound]),
    });

    this.map.on('move', event => {
      if (event.originalEvent) {
        this.onMapInteract();
      }
    });

    const marker = new Marker().setLngLat(this.LOCATION_COORDINATES).addTo(this.map);
  }

  private onMapInteract() {
    this.mapIsCentered = false;
  }

  flyToLocation() {
    this.map.flyTo({
      center: this.LOCATION_COORDINATES,
      zoom: this.DEFAULT_ZOOM_LEVEL,
      speed: 1,
      curve: 1
    });
    this.mapIsCentered = true;
  }
}
