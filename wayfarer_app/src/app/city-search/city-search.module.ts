import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneBookComponent } from './phone-book/phone-book.component';

@NgModule({
  declarations: [
    CityComponent,
    PostComponent,
    SearchComponent,
    PhoneBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    // import for Google Places api
    GooglePlaceModule
  ]
})
export class CitySearchModule { }
