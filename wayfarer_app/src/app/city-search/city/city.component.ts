import { Component, OnInit } from '@angular/core';

import { CityService } from 'src/app/city-search/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  // empty vars for city service response object
  selectedCity: object = {};
  selectedCityFullName: string | undefined;
  selectedCityShortName: string = '';
  selectedCityPhotos: any = [];
  selectedCityWebsite: string = '';

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getData();
  }

  // Receive city Data from `city.service`
  getData() {
    this.cityService.data.subscribe((response: any) => {
      console.log("City Component Get Data Response: ", response);
      this.selectedCity = response;
      // console.log(response.geometry.location.lat);
      this.selectedCityFullName = response.formatted_address;
      this.selectedCityShortName = response.name;
      this.selectedCityPhotos = response.photos;
      this.selectedCityWebsite = response.website;
    })
  }

}
