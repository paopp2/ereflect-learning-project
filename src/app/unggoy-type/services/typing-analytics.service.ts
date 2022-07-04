import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TypingAnalyticsService {
  inputText: string = '';
  displayText: string = ''; 
  phraseTextArray: Array<HTMLSpanElement> = [];
  errorCount: number = 0;

  constructor(@Inject(DOCUMENT) private _document: any){}
  // Signals to subscribe to
  public startSubject = new Subject<void>();
  public resetSubject = new Subject<void>();
  public stopSubject = new Subject<void>();
  private errorSubject = new Subject<number>();

  errorData = this.errorSubject.asObservable();
  
  get inputTextArr(): string[] { return this.inputText.split('') }
  get displayTextArr(): string[] { return this.displayText.split('') }

  start() { this.startSubject.next(); }

  reset() { 
    this.resetSubject.next(); 
    this.inputText = '';
    this.displayText = '';
    this.errorSubject.next(0);
  }

  stop() { this.stopSubject.next(); }
  
  stopOnFinish() {
    if(this.inputText.length === this.displayText.length) {
      this.stop();
    }
  }

  errorChecker() {
    let errorsMade: number = 0;
    this.phraseTextArray = this._document.getElementById('phraseContainer').querySelectorAll('span'); 

    this.phraseTextArray.forEach((currentCharacter: HTMLSpanElement, currentIndex: number) => {
      if (currentCharacter.innerText !== this.inputText[currentIndex] && this.inputText[currentIndex] != null){
        errorsMade++;
      }
    });

    this.errorSubject.next(errorsMade);
  }
}
