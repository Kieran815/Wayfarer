import { Component, OnInit, Input } from '@angular/core';

import { CityService } from 'src/app/city-search/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  // empty vars for city service response object
  @Input() selectedCity: object | undefined;
  @Input() selectedCityId: string | undefined;
  @Input() selectedCityFullName: string | undefined;
  @Input() selectedCityShortName: string | undefined;
  @Input() selectedCityPhotos: any;
  @Input() selectedCityWebsite: string | undefined;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    // this.getData();
    // this.route.paramMap.subscribe(params => {
    //   this.selectedCityId = params.get('place_id');
    //   console.log(params.get('place_id'));
    // })
    console.log("City Data Import", this.selectedCityId);
  }

  // // Receive city Data from `city.service`
  // getData() {
  //   this.cityService.data.subscribe((response: any) => {
  //     console.log("City Component Get Data Response: ", response);
  //     this.selectedCity = response;
  //     this.selectedCityId = response.place_id;
  //     this.selectedCityFullName = response.formatted_address;
  //     this.selectedCityShortName = response.name;
  //     this.selectedCityPhotos = response.photos;
  //     this.selectedCityWebsite = response.website;
  //   })
  //   console.log("City ID: " + this.selectedCityId);
  // }

}
