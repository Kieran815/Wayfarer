import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  @Input() selectedCityZipCode: string | undefined;
  @Input() selectedCityPhotos: any;
  @Input() selectedCityWebsite: string | undefined;

  weather: object | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  findWeather() {
    this.http
    .get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.selectedCityZipCode},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
    .subscribe((response) => {
      this.weather = response;
      console.log(this.weather);
    });
  }

}
