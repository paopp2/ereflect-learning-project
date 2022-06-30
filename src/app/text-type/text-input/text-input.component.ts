import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TypingHelperService } from '../../typing-helper.service';
import { Subscription } from 'rxjs';


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
  // inputTries: number = 0;
  charactersTyped: number = 0;

  constructor(private typingHelperService: TypingHelperService) {
    this.tries = 0;
    this.resetEventSubscription = this.typingHelperService.getResetEvent().subscribe(() => { 
      // Clear typed text
      this.typedText = "";
      this.typedTextChange.emit([]);
    });
  }

  startTimer() {
    this.tries++;
    if (this.tries <= 1) {
      this.typingHelperService.startEvent();
    }
  }
  
  onInput(input: string) {
    this.typedTextChange.emit(input.split(''));
  }
}