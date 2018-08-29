import { Injectable } from '@angular/core';
import { Observable, of, fromEventPattern } from 'rxjs';
import { STATS } from './mock-stats';
import { Stat } from './stat';

@Injectable({
  providedIn: 'root'
})
export class StatService {

    getStats(timePeriod: String): Observable<Stat[]> {
      // const retrievedStats = of(STATS);
      // console.log(retrievedStats.value);
      // const returnedStats = retrievedStats.value;
      // console.log(returnedStats);
      // return returnedStats;
      return of(STATS);
    }

    // [retrievedStats.findIndex(statObj => statObj["timePeriod"] === timePeriod)]
  constructor() { }
}

