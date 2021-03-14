import {Component, OnInit} from '@angular/core';
import {FileHandle} from './drag-drop.directive';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-recognize-page',
  templateUrl: './recognize-page.component.html',
  styleUrls: ['./recognize-page.component.css'],
  providers: [ApiService]
})
export class RecognizePageComponent implements OnInit {
  isProcessingImage = false;
  saveButtonIsLocked = true;
  files: FileHandle[] = [];
  objectToRecognize = {id: -1, latitude: '', longitude: '', description: '', image: ''};
  recognizedObjectsList;

  constructor(private api: ApiService) {
    this.objectToRecognize = {id: -1, latitude: '', longitude: '', description: '', image: ''};
  }

  ngOnInit(): void {
  }

  setPicture(files: FileHandle[]): void {
    this.files = files;
  }

  getPicture(imageName): void {
    this.files[0].url = 'http://127.0.0.1:8000' + '/' +  imageName;
  }

  uploadPicture(image): void {
    this.isProcessingImage = true;
    this.api.upload(image).subscribe(
      data => {
        console.log(data);
        this.getPicture(data);
        this.isProcessingImage = false;
      }, error => {
        console.log(error);
      }
    );
  }

  saveToDatabase(lat, long, desc, image): void {
    this.objectToRecognize.latitude = lat;
    this.objectToRecognize.longitude = long;
    this.objectToRecognize.description = desc;
    this.objectToRecognize.image = image.file.name;
    // this.uploadPicture(image.file);
    // this.getPicture(this.objectToRecognize.image);
    this.isProcessingImage = true;
    console.log(this.objectToRecognize);
    this.createRecognizedObject();
    this.updateRecognizedObject();
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
        // console.log(data);
        this.recognizedObjectsList.push(data);
        console.log(this.recognizedObjectsList);
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
