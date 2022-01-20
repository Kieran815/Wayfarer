import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'city',
    component: CityComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: '**',
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }