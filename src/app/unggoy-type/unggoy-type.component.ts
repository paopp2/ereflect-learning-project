import { Component, OnInit } from '@angular/core';
import { InputData } from '../models/input-data';
import { TypingStatsService } from './services/typing-stats.service';

@Component({
  selector: 'app-unggoy-type',
  templateUrl: './unggoy-type.component.html',
  styleUrls: ['./unggoy-type.component.css']
})
export class UnggoyTypeComponent implements OnInit {

  constructor(public statsService: TypingStatsService) { }

  ngOnInit() { }

  onDisplayTextChange(text: string) {
    this.statsService.displayText = text;
  }

  onInput(inputData: InputData) {
    if(!this.statsService.isRunning)  {
      this.statsService.start();
    }
    
    this.statsService.processInput(inputData);
  }
}
