import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CityService } from '../city.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  closeResult = '';

  googlePlaceReviews: any[] = [];

  constructor(private cityService: CityService, private modalService: NgbModal) { }
  ngOnInit(): void {
    // get placeId for google reviews
    this.getData();
  }

  stampToTime(time: number): any {
    let date = new Date(time * 1000);
    return date.toLocaleString();
  }

  getData() {
    this.cityService.data.subscribe((response: any) => {
      this.googlePlaceReviews = [];
      // clear prior post data first
      this.googlePlaceReviews = [...response.reviews];
      if(this.googlePlaceReviews.length > 0) {
        this.stampToTime(this.googlePlaceReviews[4].time);
      };
    })
  }

  open(content: any) {
    this.modalService.open(content);
  }


}
