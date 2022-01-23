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
  selectedCityName: string = '';
  selectedCityPhotos: any = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getData();
  }

  // Receive city Data from `city.service`
  getData() {
    this.cityService.data.subscribe((response: any) => {
      console.log("City Component Get Data Response: ", response);
      this.selectedCity = response;
      console.log(`Selected City Object: `, this.selectedCity);
      this.selectedCityName = response.name;
      this.selectedCityPhotos = response.photos;

    })
  }

}
