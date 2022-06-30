import { Component, OnInit } from '@angular/core';
import { TypingHelperService } from '../../typing-helper.service';
import { Subscription } from 'rxjs';
const txtgen = require('txtgen'); 

@Component({
  selector: 'app-sentences-source',
  templateUrl: './text-source.component.html',
  styleUrls: ['./text-source.component.css']
})

export class TextSourceComponent implements OnInit {
  charactersArr: Array<string> = [];
  resetEventSubscription: Subscription;

  constructor(private typingHelperService: TypingHelperService) {
    this.resetEventSubscription = this.typingHelperService.getResetEvent().subscribe(() => this.setSentence());
  }

  ngOnInit(): void {
    this.setSentence();
  }

  setSentence(): void {
    this.charactersArr.length = 0; 
    let text: string;
    while (true) {
      text = txtgen.paragraph(); 
      if ((text.length >= 300) && (text.length <= 340)) {
        text.split('').forEach(character => this.charactersArr.push(character)); 
        break;
      } else {
        continue;
      }
    }
  }
}