import { Component, Input, OnInit } from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';
@Component({
  selector: 'app-typing-stats',
  templateUrl: './typing-stats.component.html',
  styleUrls: ['./typing-stats.component.css']
})
export class TypingStatsComponent implements OnInit {
  @Input() timeInDs: number = 0; // Time in deciseconds
  errorCounter: number = 0;

  constructor(public statsService: TypingStatsService) { 
    this.statsService.startSubject.subscribe(() => {});
    this.statsService.stopSubject.subscribe(() => {});
    // this.statsService.errorData.subscribe(data => {  
    //   // Subscribe to error counter from the service
    //   this.errorCounter = data;
    // })
  }

  ngOnInit(): void { }
  
  onReset() {
    this.statsService.reset();
  }

}
