import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Output() inputChange = new EventEmitter<{input: string, keyPressed: string}>();
  isTypeFinished = false;

  
  constructor(public statsService: TypingStatsService) {
    statsService.resetSubject.subscribe(() => this.isTypeFinished = false);
    statsService.stopSubject.subscribe(() => this.isTypeFinished = true);
  }

  onInput(inputData: {input: string, inputEvent: any}) {
    this.inputChange.emit({input: inputData.input, keyPressed: inputData.inputEvent.data});
    let audio = new Audio();
    audio.src = '../../../assets/audio/generic.mp3';
    audio.play();
  }

}