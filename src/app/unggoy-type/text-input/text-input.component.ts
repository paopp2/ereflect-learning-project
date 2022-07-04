import { Component, Inject } from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  isTypeFinished = false;
  tries: number = 0;

  constructor(public statsService: TypingStatsService) {
    statsService.resetSubject.subscribe(() => this.isTypeFinished = false);
    statsService.stopSubject.subscribe(() => this.isTypeFinished = true);
  }

  startTimer() {
    this.tries++;
    if (this.tries <= 1) {
      this.statsService.start();
    }
  }

  
  onInput(input: string) {
    this.statsService.inputText = input;
    this.statsService.stopOnFinish();
    this.statsService.errorChecker();
  }
}