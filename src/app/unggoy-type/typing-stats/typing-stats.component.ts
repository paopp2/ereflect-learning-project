import { Component, Input, OnInit } from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';
@Component({
  selector: 'app-typing-stats',
  templateUrl: './typing-stats.component.html',
  styleUrls: ['./typing-stats.component.css']
})
export class TypingStatsComponent implements OnInit {
  @Input() errorCount = 0;
  @Input() timeInDs: number = 0; // Time in deciseconds

  constructor(public statsService: TypingStatsService) { 
    this.statsService.startSubject.subscribe(() => {});
    this.statsService.stopSubject.subscribe(() => {});
  }

  ngOnInit(): void { }
  
  onReset() {
    this.statsService.reset();
  }

}
