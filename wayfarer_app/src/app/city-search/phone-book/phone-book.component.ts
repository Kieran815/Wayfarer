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
  selectedCityZipCode: string | undefined = '';
  selectedCityPhotos: any = [];
  selectedCityWebsite: string = '';

  ngOnInit(): void {
    this.getData();
  }

  // Receive city Data from `city.service`
  getData() {
    this.cityService.data.subscribe((response: any) => {
      this.selectedCity = response;
      this.selectedCityId = response.place_id;
      this.selectedCityFullName = response.formatted_address;
      this.selectedCityShortName = response.name;
      if(response.address_components) {
        this.selectedCityZipCode = response.address_components[7].long_name;
      }
      this.selectedCityPhotos = response.photos;
      this.selectedCityWebsite = response.website;
    })
  }
}
