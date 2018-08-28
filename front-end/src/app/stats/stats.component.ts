import { Component, OnInit } from '@angular/core';
import { Stat } from '../stat';
import { STATS } from '../mock-stats';
import { StatService } from '../stat.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  timePeriods = ['Today', 'This Week', 'This Month'];
  stats: Stat;
  timePeriod: String;

  constructor(public StatService: StatService) { }

  ngOnInit() {
    this.timePeriod = "Today";
    this.getStats(this.timePeriod);
    // this.displayedStats = this.stats[this.stats.findIndex(statObj => statObj["timePeriod"] === this.timePeriod)];
  }

  filterStat(timePeriod: String): void {
    // this.displayedStats = this.stats[this.stats.findIndex(statObj => statObj["timePeriod"] === timePeriod)];
  }

  getStats(timePeriod: String): void {
    this.StatService.getStats(timePeriod)
      .subscribe(stats => this.stats = stats[stats.findIndex(statObj => statObj["timePeriod"] === timePeriod)]);
      console.log(this.stats);
      console.log(this.timePeriod);
  }

}