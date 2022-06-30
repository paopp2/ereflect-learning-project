import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TypingHelperService } from '../../typing-helper.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sentences-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  resetEventSubscription: Subscription;
  inputTries: number = 0;
  typedText: string = "";
  phraseTextArray: Array<HTMLSpanElement> = [];
  charactersTyped: number = 0;

  constructor(private typingHelperService: TypingHelperService, @Inject(DOCUMENT) private _document: any) {
    this.resetEventSubscription = this.typingHelperService.getResetEvent().subscribe(() => { // Defines the activity for this component when the reset function is called
      const textBox = this._document.querySelector('textarea');
      if (textBox !== null) textBox.value = "";
      this.phraseTextArray.forEach((currentCharacter: HTMLSpanElement, currentIndex: number) => currentCharacter.style.background = "transparent");
      textBox.disabled = false;
      this.inputTries = 0;
      this.charactersTyped = 0;
    });
  }
  startTimer() {
    this.inputTries++;
    if (this.inputTries <= 1) {
      this.typingHelperService.startEvent();
    }
  }

  trackTyping() {

    let errorsMade: number = 0;
    const typedTextArray = this.typedText.split('');
    this.phraseTextArray = this._document.getElementById('phraseContainer').querySelectorAll('span'); // Returns NodeList of found HTMLSpanElements in #phraseContainer
    this.charactersTyped = this._document.querySelector('textarea').value.length;

  
    this.phraseTextArray.forEach((currentCharacter: HTMLSpanElement, currentIndex: number) => {
      if (typedTextArray[currentIndex] == null) {
        currentCharacter.style.background = "transparent";
      } else if (currentCharacter.innerText === typedTextArray[currentIndex]) {
        currentCharacter.style.background = "#2e962e7c"; //green
      } else {
        currentCharacter.style.background = "#a321217c"; //red
        errorsMade++;
      }
    });

  }
}