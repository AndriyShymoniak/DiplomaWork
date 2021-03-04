import { Component, OnInit } from '@angular/core';
import { FileHandle } from './dragDrop.directive';

@Component({
  selector: 'app-recognizepage',
  templateUrl: './recognizepage.component.html',
  styleUrls: ['./recognizepage.component.css']
})
export class RecognizepageComponent implements OnInit {

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
