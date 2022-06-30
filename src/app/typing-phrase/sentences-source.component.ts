import { Component, OnInit } from '@angular/core';
import { TypingHelperService } from '../typing-helper.service';
import { Subscription } from 'rxjs';
const txtgen = require('txtgen'); 

@Component({
  selector: 'app-sentences-source',
  templateUrl: './sentences-source.component.html',
  styleUrls: ['./sentences-source.component.css']
})

export class SentencesSourceComponent implements OnInit {
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
      text = txtgen.paragraph(); // generate text using txtgen
      if ((text.length >= 300) && (text.length <= 340)) {
        text.split('').forEach(character => this.charactersArr.push(character)); 
        break;
      } 
      else {
        continue;
      }
    }
  }
}