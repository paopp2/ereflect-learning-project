import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { InputData } from '../models/input-data.model';
import { TypingStatsService } from './services/typing-stats.service';

@Component({
  selector: 'app-unggoy-type',
  templateUrl: './unggoy-type.component.html',
  styleUrls: ['./unggoy-type.component.css'],
  providers: []
})
export class UnggoyTypeComponent implements OnInit {
  switchType = 'mxblack';

  constructor(
    public statsService: TypingStatsService,
    public authService: AuthService,
  ) { }

  ngOnInit() { }

  onDisplayTextChange(text: string) {
    this.statsService.displayText = text;
  }

  onInput(inputData: InputData) {
    this.statsService.processInput(inputData);
  }
  
  resetOnTab(event: any) {
    if(event.key === "Tab") {
      this.statsService.reset();
      event.preventDefault();
    }
  }

}
