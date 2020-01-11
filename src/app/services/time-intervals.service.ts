import { Injectable } from '@angular/core';

import { TimeInterval } from '../models/TimeInterval';

@Injectable({
  providedIn: 'root'
})
export class TimeIntervalService {

  constructor() { }

  getTimeIntervals(): TimeInterval[] {
    return [
      {
        value: 2,
        viewValue: '2 Seconds'
      },
      {
        value: 4,
        viewValue: '4 Seconds'
      },
      {
        value: 6,
        viewValue: '6 Seconds'
      },
      {
        value: 8,
        viewValue: '8 Seconds'
      },
      {
        value: 10,
        viewValue: '10 Seconds'
      },
      {
        value: 12,
        viewValue: '12 Seconds'
      },
      {
        value: 14,
        viewValue: '14 Seconds'
      }
    ]
  }

}
