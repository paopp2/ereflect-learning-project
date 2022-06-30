import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TypingHelperService } from '../typing-helper.service';

@Component({
  selector: 'app-unggoy-type',
  templateUrl: './unggoy-type.component.html',
  styleUrls: ['./unggoy-type.component.css']
})
export class UnggoyTypeComponent implements OnInit {
  textInputArray: string[] = [];

  startEventSubscription: Subscription;
  stopEventSubscription: Subscription;

  interval: any;
  running: boolean = false;
  storeDeciseconds: number = 0;
  deciseconds: string = "00"; //display
  storeSeconds: number = 0;
  seconds: string = "00"; //display
  storeMinutes: number = 0;
  minutes: string = "00"; //display
  totalTime: number = 0;

  constructor(private typingHelperService: TypingHelperService) { 
    this.startEventSubscription = this.typingHelperService.getStartEvent().subscribe(()=> this.onStart());
    this.stopEventSubscription = this.typingHelperService.getStopEvent().subscribe(()=> this.running = false);
  }

  ngOnInit(): void { }

  setInputText(textArr: string[]) {
    this.textInputArray = textArr;
  }

  onStart() {
    this.running = true;
    this.interval = setInterval(() => this.timer(), 10); // Update every decisecond
  }
  
  timer() {
    if (this.running) {
      this.storeDeciseconds++; // Increment deciseconds every time the stopwatch function is called

      if (this.storeDeciseconds / 100 === 1) {
        this.storeDeciseconds = 0;
        this.storeSeconds++;

        if (this.storeSeconds / 60 === 1) {
          this.storeSeconds = 0;
          this.storeMinutes++;
        }
      }

      // Set the variables for state management (using ternary operators as error trapping)
      this.deciseconds = (this.storeDeciseconds < 10) ? ("0" + this.storeDeciseconds.toString()) : (this.storeDeciseconds.toString());
      this.seconds = (this.storeSeconds < 10) ? ("0" + this.storeSeconds.toString()) : (this.storeSeconds.toString());
      this.minutes = (this.storeMinutes < 10) ? ("0" + this.storeMinutes.toString()) : (this.storeMinutes.toString());
      this.totalTime = this.storeSeconds + (this.storeMinutes * 60); // Can be used later? This just shows the total time - Displayed in the html
    }
  }
  onReset() {
    this.typingHelperService.resetEvent(); //resets the whole thing
    clearInterval(this.interval); //clears the interval in setInterval above
    this.storeDeciseconds = 0;
    this.deciseconds = "00";
    this.storeSeconds = 0;
    this.seconds = "00";
    this.storeMinutes = 0;
    this.minutes = "00";
    this.totalTime = 0;
  }
}
