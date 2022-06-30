import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypingHelperService } from '../../typing-helper.service';
import { Subscription } from 'rxjs';
const txtgen = require('txtgen');

@Component({
  selector: 'app-text-source',
  templateUrl: './text-source.component.html',
  styleUrls: ['./text-source.component.css']
})

export class TextSourceComponent implements OnInit {
  @Input() textInputArray: string[] = [];
  charactersArr: string[] = [];
  resetEventSubscription: Subscription;

  constructor(private typingHelperService: TypingHelperService) {
    this.resetEventSubscription = this.typingHelperService.getResetEvent().subscribe(() => this.setSentence());
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

    this.charactersArr = text.split('');
  }
  
  // Returns CSS class based on how arguments match:
  compareLetters(requiredLetter: string, typedLetter?: string, ): string {
    if(!typedLetter) return 'untyped';
    return (typedLetter === requiredLetter) ? 'correct' : 'wrong';
  }
}