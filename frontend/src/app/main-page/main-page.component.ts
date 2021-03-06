import {Component, NgModule, OnInit} from '@angular/core';
import {MapApiService} from '../map-page/map-api.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MapApiService]
})
export class MainPageComponent implements OnInit {

  pictures = [];

  constructor(private api: MapApiService) {
    this.getRecognizedObjects();
  }

  getRecognizedObjects = () => {
    this.api.getAllRecognizedObjects().subscribe(
      data => {
        this.pictures = data;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }
}
