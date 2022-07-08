import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InputData } from 'src/app/models/input-data.model';
import { UserStats } from 'src/app/models/user-stats.model';
import { UserStatsRepoService } from 'src/app/user-stats-repo/user-stats-repo.service';
@Injectable({
  providedIn: 'root'
})
export class TypingStatsService {
  currentUserStats!: UserStats;
  isRunning: boolean = false;
  inputText: string = '';
  displayText: string = '';
  timeInDs: number = 0;
  errorCount: number = 0;
  private interval?: NodeJS.Timeout;
  
  constructor(private userStatsRepo: UserStatsRepoService) { }

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

  clearState() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.isRunning = false;
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
    const stats = this.currentUserStats;
    const highestWpm = stats.highestWpm;
    if(highestWpm < this.wordsPerMin) {
      this.userStatsRepo.updateHighestWpm(
        stats.id,
        this.wordsPerMin,
      );
    }

    const fastestTime = stats.fastestTime;
    if(fastestTime == -1 || this.currentUserStats.fastestTime > this.timeInDs) {
      this.userStatsRepo.updateFastestTime(
        stats.id,
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
