import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';
const txtgen = require('txtgen');

@Component({
  selector: 'app-text-source',
  templateUrl: './text-source.component.html',
  styleUrls: ['./text-source.component.css']
})

export class TextSourceComponent implements OnInit {
  @Input() inputText = '';
  @Output() displayTextChange = new EventEmitter<string>();
  displayTextArr: string[] = [];

  constructor(public statsService: TypingStatsService) {
    statsService.resetSubject.subscribe(() => this.setSentence());
  }
  
  get inputTextArr() {
    return this.inputText.split('')
  } 

  ngOnInit(): void {
    this.setSentence();
  }

  setSentence(): void {
    let text: string = '';

    // Find text that fits length requirements
    while (!(text.length >= 300) && (text.length <= 340)) {
      text = txtgen.paragraph();
    }

    this.displayTextChange.emit(text);
    this.displayTextArr = text.split('');
  }

  // Returns CSS class based on how arguments match
  compareLetters(displayLetter: string, inputLetter?: string,): string {
    if (!inputLetter) return 'untyped';
    return (inputLetter === displayLetter) ? 'correct' : 'wrong';
  }
}