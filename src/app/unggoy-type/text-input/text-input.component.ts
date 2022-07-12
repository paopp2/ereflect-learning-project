import { 
  Component, 
  ElementRef, 
  EventEmitter,
  Input, 
  AfterViewInit,
  Output, 
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { InputData } from 'src/app/core/models/input-data.model';
import { TypingStatsService } from '../services/typing-stats.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements AfterViewInit {
  @ViewChild('textField') textField!: ElementRef;
  @Input() switchType = 'mxblack';
  @Output() inputChange = new EventEmitter<InputData>();
  isTypeFinished = false;

  private configSuccess: MatSnackBarConfig = {
    duration: 2000,
    panelClass: ['style-success'],    
    horizontalPosition:'start',
    verticalPosition: 'bottom',
  };
  
  constructor(
    public statsService: TypingStatsService, 
    private snackbar: MatSnackBar,
    public cdRef: ChangeDetectorRef
  ) {
    statsService.reset$.subscribe(() => {
      this.isTypeFinished = false;
      // Reset focus to textField on reset 
      this.textField.nativeElement.focus();
    });
    statsService.stop$.subscribe(() => this.isTypeFinished = true);
  }
  
  ngAfterViewInit(): void {
    this.textField.nativeElement.focus();
    this.cdRef.detectChanges();
  }

  onInput(inputEvent: {input: string, rawInputEvent: any}) {
    this.inputChange.emit({
      input: inputEvent.input, 
      keyPressed: inputEvent.rawInputEvent.data
    });
  }
  
  onKeydown(event: any) {
    // Play keyboard sound depending on selected switch type
    let audio = new Audio(`../../../assets/audio/${this.switchType}.mp3`);
    audio.play();

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
  }

  handlePaste(){
    this.snackbar.open("Type the words, please!", 'Okay', this.configSuccess);
  }

}