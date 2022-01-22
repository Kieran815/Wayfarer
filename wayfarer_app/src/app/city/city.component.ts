import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getData();
  }

  // Recieve Service Data
  getData() {
    this.cityService.data.subscribe(response => {
      console.log(response); 
    })
  }

}
