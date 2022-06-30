import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypingAnalyticsService } from '../services/typing-analytics.service';
const txtgen = require('txtgen');

@Component({
  selector: 'app-text-source',
  templateUrl: './text-source.component.html',
  styleUrls: ['./text-source.component.css']
})

export class TextSourceComponent implements OnInit {
  displayTextArr: string[] = [];

  constructor(public analyticsService: TypingAnalyticsService) {
    analyticsService.resetEvent.subscribe(() => this.setSentence());
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

    this.analyticsService.displayText = text; // Store the text for analytics
    this.displayTextArr = text.split('');
  }

  // Returns CSS class based on how arguments match
  compareLetters(displayLetter: string, inputLetter?: string,): string {
    if (!inputLetter) return 'untyped';
    return (inputLetter === displayLetter) ? 'correct' : 'wrong';
  }
}