import { Component, OnInit } from '@angular/core';

import { CityService } from '../city.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  googlePlaceReviews: any[] = [];
  // authorName: string | undefined;
  // authorUrl: string | undefined;
  // authorPic: string | undefined;
  // rating: number | undefined;
  // reviewBody: string | undefined;

  constructor(private cityService: CityService) { }
  ngOnInit(): void {
    // get placeId for google reviews
    this.getData();
  }

  stampToTime(time: number): any {
    let date = new Date(time * 1000);
    return date;
  }

  getData() {
    this.cityService.data.subscribe((response: any) => {
      this.googlePlaceReviews = [...response.reviews];
      if(this.googlePlaceReviews.length > 0) {
        this.stampToTime(this.googlePlaceReviews[4].time);
      };
    })
  }


}
