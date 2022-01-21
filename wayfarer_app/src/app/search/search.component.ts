import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city: string = '';

  constructor(private https: HttpClient) { }

  findCity(city: string){
    console.log('finding ' + city);
    this.https.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Chicago, IL&key=AIzaSyBFbFHBJaQlcbbBde-_ryMc7TyfU7moNEo&inputtype=textquery&fields=name,photos')
    .subscribe((response) => console.log(response));
  }

  ngOnInit(): void {
  }

}
