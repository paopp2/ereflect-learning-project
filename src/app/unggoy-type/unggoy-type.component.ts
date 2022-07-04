import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  onInput(input: string) {
    this.statsService.inputText = input;
    this.statsService.stopOnFinish();
    this.statsService.errorChecker();
  }

}
