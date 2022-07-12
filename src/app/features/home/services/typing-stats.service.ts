import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { InputData, UserStats } from 'src/app/core/models';
import { UserStatsRepoService } from 'src/app/core/services';

@Injectable()
export class TypingStatsService implements OnDestroy {
  currentUserStats?: UserStats;
  isRunning: boolean = false;
  inputText: string = '';
  displayText: string = '';
  timeInDs: number = 0;
  errorCount: number = 0;
  private interval?: NodeJS.Timeout;
  
  constructor(private userStatsRepo: UserStatsRepoService) { }
  
  ngOnDestroy(): void {
    this.startSubject.complete();
    this.resetSubject.complete();
    this.stopSubject.complete();
  }

  private startSubject = new Subject<void>();
  private resetSubject = new Subject<void>();
  private stopSubject = new Subject<void>();
  
  // Signals to subscribe to
  public start$ = this.startSubject.asObservable();
  public reset$ = this.resetSubject.asObservable();
  public stop$ = this.stopSubject.asObservable();

  get inputTextArr(): string[] { return this.inputText.split('') }
  get displayTextArr(): string[] { return this.displayText.split('') }

  clearState() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.isRunning = false;
  }

  start() { 
    this.isRunning = true;
    if(!this.interval) {
      // Increment every decisecond
      this.interval = setInterval(() => this.timeInDs++, 10);
    }
    this.startSubject.next(); 
  }

  reset() {
    this.clearState();
    this.errorCount = 0;
    this.timeInDs = 0;
    this.inputText = '';
    this.displayText = '';
    this.resetSubject.next();
  }

  stop() { 
    const stats = this.currentUserStats!;
    const highestWpm = stats.highestWpm;
    if(highestWpm < this.wordsPerMin) {
      this.userStatsRepo.updateHighestWpm(
        stats.user.id,
        this.wordsPerMin,
      );
    }

    const fastestTime = stats.fastestTime;
    if(fastestTime == 0 || stats.fastestTime > this.timeInDs) {
      this.userStatsRepo.updateFastestTime(
        stats.user.id,
        this.timeInDs,
      );
    }
    
    this.clearState();
    this.stopSubject.next(); 
  }
  
  processInput(inputData: InputData) {
    this.inputText = inputData.input;
    const isBackspacePressed = inputData.keyPressed === null;
    const inputLength = this.inputTextArr.length;
    const inputIndex = inputLength - 1;
    const isWrongInput = this.inputTextArr[inputIndex] !== this.displayTextArr[inputIndex];

    // Start stats service if not yet running  
    if(!this.isRunning) this.start();
    
    // If last character of input is wrong and backspace
    // wasn't pressed, increment errorCount
    if(isWrongInput && !isBackspacePressed) {
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
