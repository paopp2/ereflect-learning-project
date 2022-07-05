import { Component, EventEmitter, Output } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { InputData } from 'src/app/models/input-data.model';
import { TypingStatsService } from '../services/typing-stats.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Output() inputChange = new EventEmitter<InputData>();
  isTypeFinished = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  private configSuccess: MatSnackBarConfig = {
    duration: 2000,
    panelClass: ['style-success'],    
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  };
  
  constructor(public statsService: TypingStatsService, private snackbar: MatSnackBar) {
    statsService.resetSubject.subscribe(() => this.isTypeFinished = false);
    statsService.stopSubject.subscribe(() => this.isTypeFinished = true);
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