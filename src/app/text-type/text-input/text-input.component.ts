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
  @Output() typedTextChange = new EventEmitter<string[]>();

  constructor(private typingHelperService: TypingHelperService) {
    this.typingHelperService.getResetEvent().subscribe(() => { 
      // Clear typed text
      this.typedText = "";
      this.typedTextChange.emit([]);
    });
  }

  onInput(input: string) {
    this.typedTextChange.emit(input.split(''));
  }
}