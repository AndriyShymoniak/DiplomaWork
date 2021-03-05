import { Component, OnInit } from '@angular/core';
import { FileHandle } from './drag-drop.directive';

@Component({
  selector: 'app-recognizepage',
  templateUrl: './recognize-page.component.html',
  styleUrls: ['./recognize-page.component.css']
})
export class RecognizePageComponent implements OnInit {

  files: FileHandle[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    console.log(this.files);
    // get image upload file obj;
  }
}
