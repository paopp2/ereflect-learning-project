import { Component, OnInit } from '@angular/core';
import { TypingAnalyticsService } from '../services/typing-analytics.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  interval: any;
  running: boolean = false;
  storeDs: number = 0;
  errorCounter: number = 0;

  constructor(public analyticsService: TypingAnalyticsService) { 
    this.analyticsService.startEvent.subscribe(()=> this.onStart());
    this.analyticsService.stopEvent.subscribe(()=> this.running = false);
    this.analyticsService.errorData.subscribe(data => {  //subscribe to error counter from the service
      this.errorCounter = data;
    })
  }

  ngOnInit(): void { }

  onStart() {
    this.running = true;
    this.interval = setInterval(() => this.timer(), 10); // Update every decisecond
  }
  
  timer() {
    if (this.running) {
      this.storeDs++;
    }
  }
  onReset() {
    this.analyticsService.reset(); //resets the whole thing
    clearInterval(this.interval); //clears the interval in setInterval above
    this.storeDs = 0;
  }

}
