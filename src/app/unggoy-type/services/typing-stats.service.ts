import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TypingStatsService {
  inputText: string = '';
  displayText: string = '';
  phraseTextArray: Array<HTMLSpanElement> = [];
  errorCount: number = 0;
  timeInDs: number = 0;
  running: boolean = false;
  interval: any;

  constructor(@Inject(DOCUMENT) private _document: any) { }
  // Signals to subscribe to
  public startSubject = new Subject<void>();
  public resetSubject = new Subject<void>();
  public stopSubject = new Subject<void>();
  // private errorSubject = new Subject<number>();

  // errorData = this.errorSubject.asObservable();

  get inputTextArr(): string[] { return this.inputText.split('') }
  get displayTextArr(): string[] { return this.displayText.split('') }

  start() { 
    this.running = true;
    this.interval = setInterval(() => this.timeInDs++, 10); // Update every decisecond
    this.startSubject.next(); 
  }

  reset() {
    this.timeInDs = 0;
    this.inputText = '';
    this.displayText = '';
    this.resetSubject.next();
    // this.errorSubject.next(0);
  }

  // timer() {
  //   if (this.running) {
  //     this.timeInDs++;
  //   }
  // }


  stop() { 
    clearInterval(this.interval);
    this.stopSubject.next(); 
  }


  stopOnFinish() {
    if (this.inputText.length === this.displayText.length) {
      this.stop();
    }
  }

  errorChecker() {
    let errorsMade: number = 0;
    this.phraseTextArray = this._document.getElementById('phraseContainer').querySelectorAll('span');

    this.phraseTextArray.forEach((currentCharacter: HTMLSpanElement, currentIndex: number) => {
      if (currentCharacter.innerText !== this.inputText[currentIndex] && this.inputText[currentIndex] != null) {
        errorsMade++;
      }
    });

    // this.errorSubject.next(errorsMade);
  }

  // onStart() {
  //   this.running = true;
  //   this.interval = setInterval(() => this.timer(), 10); // Update every decisecond
  // }
  
  // onReset() {
  //   this.statsService.reset(); //resets the whole thing
  //   clearInterval(this.interval); //clears the interval in setInterval above
  //   this.storeDs = 0;
  // }

}
