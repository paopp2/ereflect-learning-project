import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TypingStatsService {
  inputText: string = '';
  displayText: string = '';
  timeInDs: number = 0;
  isRunning: boolean = false;
  private errorCount: number = 0;
  private interval?: NodeJS.Timeout;

  constructor() { }
  // Signals to subscribe to
  public startSubject = new Subject<void>();
  public resetSubject = new Subject<void>();
  public stopSubject = new Subject<void>();

  get inputTextArr(): string[] { return this.inputText.split('') }
  get displayTextArr(): string[] { return this.displayText.split('') }

  start() { 
    this.isRunning = true;
    if(!this.interval) {
      // Increment every decisecond
      this.interval = setInterval(() => this.timeInDs++, 10);
    }
    this.startSubject.next(); 
  }

  reset() {
    this.stop();
    this.errorCount = 0;
    this.timeInDs = 0;
    this.inputText = '';
    this.displayText = '';
    this.resetSubject.next();
  }

  stop() { 
    clearInterval(this.interval);
    this.interval = undefined;

    this.isRunning = false;
    this.stopSubject.next(); 
  }

  processInput(inputData: {input: string, keyPressed: string}) {
    this.inputText = inputData.input;
    const inputLength = this.inputTextArr.length;
    const inputIndex = inputLength - 1;
    const isWrongInput = this.inputTextArr[inputIndex] !== this.displayTextArr[inputIndex];
    
    if(isWrongInput) {
      this.errorCount++;
    }

    if (inputLength === this.displayText.length) {
      this.stop();
    }
  }
  
  get wordsPerMin(): number {
    const wordCount = this.inputText.split(' ').length;
    const timeInMins = this.timeInDs / 6000;
    
    if(timeInMins === 0) return 0; // Avoid division by zero
    return wordCount / timeInMins;
  }
  
  get accuracy(): number {
    const inputLength = this.inputText.length;
    const totalLength = inputLength + this.errorCount;
    
    if(totalLength === 0) return 0; // Avoid division by zero
    return inputLength / totalLength;
  }
}
