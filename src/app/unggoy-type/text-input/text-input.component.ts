import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TypingAnalyticsService } from '../services/typing-analytics.service';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  typedText: string = '';
  tries: number = 0;
  @Output() typedTextChange = new EventEmitter<string[]>();
  resetEventSubscription: Subscription;
  
  constructor(private typingAnalyticsService: TypingAnalyticsService) {
    this.tries = 0;
    this.resetEventSubscription = this.typingAnalyticsService.resetEvent.subscribe(() => { 
      // Clear typed text
      this.typedText = "";
      this.typedTextChange.emit([]);
    });
  }

  startTimer() {
    this.tries++;
    if (this.tries <= 1) {
      this.typingAnalyticsService.start();
    }
  }
  
  onInput(input: string) {
    this.typedTextChange.emit(input.split(''));
  }
}