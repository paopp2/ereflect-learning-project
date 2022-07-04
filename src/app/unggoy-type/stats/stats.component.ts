import { Component, OnInit } from '@angular/core';
import { TypingAnalyticsService } from '../services/typing-analytics.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  errorCounter: number = 0;

  constructor(public analyticsService: TypingAnalyticsService) { 
    this.analyticsService.startSubject.subscribe(() => {});
    this.analyticsService.stopSubject.subscribe(() => {});
    this.analyticsService.errorData.subscribe(data => {  //subscribe to error counter from the service
      this.errorCounter = data;
    })
  }

  ngOnInit(): void { }

}
