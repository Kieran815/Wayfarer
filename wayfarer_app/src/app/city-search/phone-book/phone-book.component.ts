import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  constructor(private cityService: CityService) { }

  selectedCity: object | null = null;
  selectedCityId: string | undefined = '';
  selectedCityFullName: string | undefined;
  selectedCityShortName: string = '';
  selectedCityPhotos: any = [];
  selectedCityWebsite: string = '';

  ngOnInit(): void {
    this.getData();
  }

  // Receive city Data from `city.service`
  getData() {
    this.cityService.data.subscribe((response: any) => {
      this.selectedCity = response;
      console.log("Phone Book Component Get Data Response: ", this.selectedCity);
      this.selectedCityId = response.place_id;
      console.log(this.selectedCityId);
      this.selectedCityFullName = response.formatted_address;
      console.log(this.selectedCityFullName);
      this.selectedCityShortName = response.name;
      console.log(this.selectedCityShortName);
      this.selectedCityPhotos = response.photos;
      console.log(this.selectedCityPhotos);
      this.selectedCityWebsite = response.website;
      console.log(this.selectedCityWebsite);
    })
    console.log("City ID: " + this.selectedCityId);
  }

}
