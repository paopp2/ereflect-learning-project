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
  private startSubject = new Subject<void>();
  private resetSubject = new Subject<void>();
  private stopSubject = new Subject<void>();
  private errorSubject = new Subject<number>();

  errorData = this.errorSubject.asObservable();
  
  get inputTextArr(): string[] { return this.inputText.split('') }
  get displayTextArr(): string[] { return this.displayText.split('') }

  start() { this.startSubject.next(); }
  get startEvent(): Observable<void> { return this.startSubject.asObservable() }

  reset() { 
    this.resetSubject.next(); 
    this.inputText = '';
    this.displayText = '';
  }
  get resetEvent(): Observable<void> { return this.resetSubject.asObservable(); }

  stop() { this.stopSubject.next(); }
  get stopEvent(): Observable<void>  { return this.stopSubject.asObservable(); }
  
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
