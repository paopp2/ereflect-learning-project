import { 
  Component, 
  ElementRef, 
  EventEmitter,
  Input, 
  OnDestroy, 
  Output, 
  ViewChild
} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { InputData } from 'src/app/models/input-data.model';
import { TypingStatsService } from '../services/typing-stats.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnDestroy {
  @ViewChild('textField') textField!: ElementRef;
  @Input() switchType = 'mxblack';
  @Output() inputChange = new EventEmitter<InputData>();
  isTypeFinished = false;
  private resetSubscription: Subscription;
  private stopSubscription: Subscription;

  private configSuccess: MatSnackBarConfig = {
    duration: 2000,
    panelClass: ['style-success'],    
    horizontalPosition:'start',
    verticalPosition: 'bottom',
  };
  
  constructor(
    public statsService: TypingStatsService, 
    private snackbar: MatSnackBar,
  ) {
    this.resetSubscription = statsService.reset$.subscribe(() => {
      this.isTypeFinished = false;
      // Reset focus to textField on reset 
      this.textField.nativeElement.focus();
    });
    this.stopSubscription = statsService.stop$.subscribe(() => this.isTypeFinished = true);
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
  }
  
  onKeydown(event: any) {
    // Disable lateral cursor movement using arrow keys  
    if(event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      return;
    }
    
    // Prevent user from deleting input that is already correct
    if(event.key === "Backspace") {
      const inputText = this.statsService.inputText;
      const displayText = this.statsService.displayText;
      const inputLength = inputText.length;
      const inputAlreadyCorrect = inputText === displayText.slice(0, inputLength);
      
      if(inputAlreadyCorrect) event.preventDefault();
    }

    // Play keyboard sound depending on selected switch type
    let audio = new Audio(`../../../assets/audio/${this.switchType}.mp3`);
    audio.play();
  }

  handlePaste(){
    this.snackbar.open("Type the words, please!", 'Okay', this.configSuccess);
  }

}