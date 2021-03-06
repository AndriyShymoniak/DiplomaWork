import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { RecognizePageComponent } from './recognize-page/recognize-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { DragDirective } from './recognize-page/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecognizePageComponent,
    MapPageComponent,
    // FormsModule,
    DragDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD11pw-U4old6Bl-GonNGzZ6M7GvNX0PnI'
    }),
    MatProgressBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
