import { Component, OnInit } from '@angular/core';

import { CityService } from '../city.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city: string = '';

  currentCity: object = {};
  // places example
  userCity: string = ''
  cityLatitude: string = ''
  cityLongitude: string = ''
  cityPhotos: any = [];

  constructor(private cityService: CityService) { }

  handleCityChange(city: any) {
    this.userCity = city.name;
    this.cityLatitude = city.geometry.location.lat();
    this.cityLongitude = city.geometry.location.lng();
    this.cityPhotos = city.photos;
    this.currentCity = city;
    console.log(this.currentCity);
    this.sendNewData(this.currentCity);
  }

  findCity(city: string){
    console.log('finding ' + city);
  }

  ngOnInit(): void {
    this.sendNewData(this.currentCity);
  }

  sendNewData(sendCity: object) {
    this.cityService.sendData(sendCity);
  }

}
