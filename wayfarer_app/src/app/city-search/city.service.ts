import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  // create a behavior subject to watch and assign initial value
  private dataSource: BehaviorSubject<object> = new BehaviorSubject<object>({testingDataTransfer: "Sending Initial Value from city.service"});
  // begin watching behavior subject
  data: Observable<object> = this.dataSource.asObservable();

  constructor() { }

  
  sendData(data: object) {
    // broadcast new data on update
    this.dataSource.next(data);
  }
}