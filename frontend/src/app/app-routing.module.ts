import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { MainPageComponent} from './main-page/main-page.component';
import {MapPageComponent} from './map-page/map-page.component';
import { RecognizePageComponent} from './recognize-page/recognize-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'recognize', component: RecognizePageComponent},
  {path: 'map', component: MapPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
