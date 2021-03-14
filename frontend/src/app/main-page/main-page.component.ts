import {Component, NgModule, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ApiService]
})
export class MainPageComponent implements OnInit {
  pictures = [];

  constructor(private api: ApiService) {
    this.getRecognizedObjects();
  }

  getRecognizedObjects = () => {
    this.api.getAllRecognizedObjects().subscribe(
      data => {
        this.pictures = data;
        console.log(this.pictures);
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }
}
