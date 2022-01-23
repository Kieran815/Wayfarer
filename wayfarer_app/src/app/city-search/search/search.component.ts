import { Component, OnInit } from '@angular/core';

import { CityService } from 'src/app/city-search/city.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city: string = '';
  currentCity: object = {};

  constructor(private cityService: CityService) { }

  handleCityChange(city: any) {
    this.currentCity = city;
    this.sendNewData(this.currentCity);
  }

  ngOnInit(): void {
    this.sendNewData(this.currentCity);
  }

  // send city object through city.service 
  sendNewData(sendCity: object) {
    this.cityService.sendData(sendCity);
  }

}
