import {Component, OnInit} from '@angular/core';
import {FileHandle} from './drag-drop.directive';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recognizepage',
  templateUrl: './recognize-page.component.html',
  styleUrls: ['./recognize-page.component.css'],
  providers: [ApiService]
})
export class RecognizePageComponent implements OnInit {
  files: FileHandle[] = [];
  objectToRecognize = {id: -1, latitude: '', longitude: '', image: '', description: ''};
  isProcessingImage = false;
  recognizedObjectsList;

  constructor(private api: ApiService) {
    this.objectToRecognize = {id: -1, latitude: '', longitude: '', image: '', description: ''};
  }

  ngOnInit(): void {
  }

  setPicture(files: FileHandle[]): void {
    this.files = files;
  }

  upload(lat, long, desc): void {
    this.objectToRecognize.latitude = lat;
    this.objectToRecognize.longitude = long;
    this.objectToRecognize.description = desc;
    console.log(this.objectToRecognize);
    this.isProcessingImage = true;
    console.log(this.files);
    this.files[0].url = 'https://res.cloudinary.com/ddmivk4av/image/upload/v1615040123/diplomawork/not_found.jpg';
    this.createRecognizedObject();
  }

  updateRecognizedObject = () => {
    this.api.updateRecognizedObject(this.objectToRecognize).subscribe(
      data => {
        this.objectToRecognize = data;
      }, error => {
        console.log(error);
      }
    );
  }

  createRecognizedObject = () => {
    this.api.createRecognizedObject(this.objectToRecognize).subscribe(
      data => {
        console.log(data);
        this.recognizedObjectsList.push(data);
      }, error => {
        console.log(error);
      }
    );
  }

  getRecognizedObjects = () => {
    this.api.getAllRecognizedObjects().subscribe(
      data => {
        this.recognizedObjectsList = data;
      }, error => {
        console.log(error);
      }
    );
  }
}
