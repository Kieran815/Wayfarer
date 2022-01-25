import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { PhoneBookComponent } from './city-search/phone-book/phone-book.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'cities',
    component: PhoneBookComponent
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