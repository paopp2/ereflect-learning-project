import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypingAnalyticsService } from '../services/typing-analytics.service';
const txtgen = require('txtgen');

@Component({
  selector: 'app-text-source',
  templateUrl: './text-source.component.html',
  styleUrls: ['./text-source.component.css']
})

export class TextSourceComponent implements OnInit {
  @Input() textInputArray: string[] = [];
  charactersArray: string[] = [];

  constructor(private typingAnalyticsService: TypingAnalyticsService) {
    this.typingAnalyticsService.getResetEvent().subscribe(() => this.setSentence());
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

    this.charactersArray = text.split('');
  }

  // Returns CSS class based on how arguments match
  compareLetters(requiredLetter: string, typedLetter?: string,): string {
    if (!typedLetter) return 'untyped';
    return (typedLetter === requiredLetter) ? 'correct' : 'wrong';
  }
}