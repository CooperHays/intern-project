import { Component, OnInit } from '@angular/core';
import { Stat } from '../stat';
import { STATS } from '../mock-stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  timePeriods = ['Today', 'This Week', 'This Month'];

  stats = STATS;

  displayedStats: Stat;
  timePeriod: String;

  // today = {
  //   callsReceived:350,
  //   chatsReceived:162,
  //   emailsReceived: 243,
  //   emailsSolved: 255,
  //   callDistribution: 46,
  //   chatDistribution: 21,
  //   emailDistribution: 32,
  //   emailsSolvedPercentage: 105
  // };

  constructor() { }

  ngOnInit() {
    this.timePeriod = "Today";
    this.displayedStats = this.stats[this.stats.findIndex(statObj => statObj["timePeriod"] === this.timePeriod)];
  }

  filterStat(timePeriod: String): void {
    this.displayedStats = this.stats[this.stats.findIndex(statObj => statObj["timePeriod"] === timePeriod)];
    console.log(this.displayedStats);
  }

}
