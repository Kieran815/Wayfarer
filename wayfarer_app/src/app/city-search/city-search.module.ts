import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    CityComponent,
    PostComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // import for Google Places api
    GooglePlaceModule
  ]
})
export class CitySearchModule { }
