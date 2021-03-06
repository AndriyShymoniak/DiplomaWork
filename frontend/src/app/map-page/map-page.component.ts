import { Component, OnInit } from '@angular/core';
import { MapApiService } from './map-api.service';

class LocationMarker {
  lat: string;
  long: string;

  constructor(lat: string, long: string) {
    this.lat = lat;
    this.long = long;
  }
}

@Component({
  selector: 'app-mappage',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
  providers: [MapApiService]
})

export class MapPageComponent implements OnInit {
  latitude = 48.079616;
  longitude = 38.431955;
  markers;

  constructor(private api: MapApiService) {
    this.getRecognizedObjects();
  }

  getRecognizedObjects = () => {
    this.api.getAllRecognizedObjects().subscribe(
      data => {
        this.markers = data;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}


