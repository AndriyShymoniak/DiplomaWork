import {Component, OnInit} from '@angular/core';

class LocationMarker {
  lat: string;
  long: string;

  constructor(lat: string, long: string) {
    this.lat = lat;
    this.long = long;
  }
}

const mapMarkers = [
  new LocationMarker('48.079616', '38.431955'),
  new LocationMarker('47.938272', '38.626634'),
  new LocationMarker('48.004201', '38.978330'),
  new LocationMarker('47.795377', '38.496495')
];

@Component({
  selector: 'app-mappage',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})

export class MapPageComponent implements OnInit {
  latitude = 48.079616;
  longitude = 38.431955;
  markers = mapMarkers;

  constructor() {
    console.log(this.markers);
  }

  ngOnInit(): void {
  }

}


