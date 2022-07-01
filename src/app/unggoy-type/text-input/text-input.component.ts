import { Component } from '@angular/core';
import { TypingAnalyticsService } from '../services/typing-analytics.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  isTypeFinished = false;
  tries: number = 0;

  constructor(public analyticsService: TypingAnalyticsService) {
    analyticsService.resetEvent.subscribe(() => { this.isTypeFinished = false });
    analyticsService.stopEvent.subscribe(() => { this.isTypeFinished = true });
  }

  startTimer() {
    this.tries++;
    if (this.tries <= 1) {
      this.analyticsService.start();
    }
  }
  
  onInput(input: string) {
    this.analyticsService.inputText = input;
    this.analyticsService.stopOnFinish();
  }
}