import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private dataSource: BehaviorSubject<object> = new BehaviorSubject<object>({testingDataTransfer: "Empty City String"});
  data: Observable<object> = this.dataSource.asObservable();

  constructor() { }

  sendData(data: object) {
    this.dataSource.next(data);
  }
}