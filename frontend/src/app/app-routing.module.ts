import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { MainpageComponent} from './mainpage/mainpage.component';
import {MappageComponent} from './mappage/mappage.component';
import { RecognizepageComponent} from './recognizepage/recognizepage.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'recognize', component: RecognizepageComponent},
  {path: 'map', component: MappageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
