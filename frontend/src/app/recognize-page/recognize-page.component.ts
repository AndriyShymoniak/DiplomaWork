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

  setDroppedPicture(files: FileHandle[]): void {
    this.files = files;
  }

  getPicture(imageName): void {
    this.files[0].url = this.api.baseUrl + '/' + imageName;
  }

  uploadPicture(image): void {
    this.isProcessingImage = true;
    this.api.upload(image).subscribe(
      data => {
        this.getPicture(data);
        this.isProcessingImage = false;
        this.saveButtonIsLocked = false;
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
    console.log(this.objectToRecognize);
    this.createRecognizedObject();
  }

  createRecognizedObject = () => {
    this.api.createRecognizedObject(this.objectToRecognize).subscribe(
      data => {
        this.recognizedObjectsList.push(data);
      }, error => {
        console.log(error);
      }
    );
  }
}
