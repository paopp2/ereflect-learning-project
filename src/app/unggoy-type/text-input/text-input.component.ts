import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { InputData } from 'src/app/models/input-data.model';
import { TypingStatsService } from '../services/typing-stats.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnDestroy {
  @Output() inputChange = new EventEmitter<InputData>();
  isTypeFinished = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private resetSubscription: Subscription;
  private stopSubscription: Subscription;

  private configSuccess: MatSnackBarConfig = {
    duration: 2000,
    panelClass: ['style-success'],    
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  };
  
  constructor(public statsService: TypingStatsService, private snackbar: MatSnackBar) {
    this.resetSubscription = statsService.resetSubject.subscribe(() => this.isTypeFinished = false);
    this.stopSubscription = statsService.stopSubject.subscribe(() => this.isTypeFinished = true);
  }
  
  ngOnDestroy(): void {
    this.resetSubscription.unsubscribe();
    this.stopSubscription.unsubscribe();
  }

  onInput(inputEvent: {input: string, rawInputEvent: any}) {
    this.inputChange.emit({
      input: inputEvent.input, 
      keyPressed: inputEvent.rawInputEvent.data
    });
    let audio = new Audio();
    audio.src = '../../../assets/audio/generic.mp3';
    audio.play();
  }

  disableMovement(event: any){
    if(event.key === "ArrowRight" || event.key === "ArrowLeft") event.preventDefault();
  }

  handlePaste(){
    this.snackbar.open("Type the words, please!", 'Okay', this.configSuccess);
  }

}