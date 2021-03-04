import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RecognizepageComponent } from './recognizepage/recognizepage.component';
import { MappageComponent } from './mappage/mappage.component';
import { AppRoutingModule } from './app-routing.module';
import { DragDirective } from './recognizepage/dragDrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    RecognizepageComponent,
    MappageComponent,
    // FormsModule,
    DragDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
