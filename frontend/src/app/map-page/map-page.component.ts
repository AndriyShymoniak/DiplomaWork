import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mappage',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
  providers: [ApiService]
})

export class MapPageComponent implements OnInit {
  initialLatitude = 48.079616;
  initialLongitude = 38.431955;
  markers;

  constructor(private api: ApiService) {
    this.getRecognizedObjects();
  }

  getRecognizedObjects = () => {
    this.api.getAllRecognizedObjects().subscribe(
      data => {
        this.markers = data;
        console.log(this.markers);
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }
}
