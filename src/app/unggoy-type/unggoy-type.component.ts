import { Component, OnInit } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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

  constructor(
    public statsService: TypingStatsService,
    private authService: AuthService,
    private router: Router,
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
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
