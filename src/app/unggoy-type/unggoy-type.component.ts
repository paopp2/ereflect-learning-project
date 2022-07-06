import { Component, OnInit } from '@angular/core';
import { InputData } from '../models/input-data.model';
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
    this.statsService.processInput(inputData);
  }
  
  resetOnTab(event: any) {
    if(event.key === "Tab") {
      this.statsService.reset();
      event.preventDefault();
    }
  }
}
