import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { InputData } from '../models/input-data.model';
import { UserStatsRepoService } from '../user-stats-repo/user-stats-repo.service';
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
    private authService: AuthService,
    private userStatsRepo: UserStatsRepoService,
  ) { }

  ngOnInit() { 
    const currentUser = this.authService.currentUser;
    if(currentUser) {
      const uid = currentUser.uid;
      this.userStatsRepo.getUserStats(uid)
        .pipe(take(1))
        .subscribe((userStats) => {
          // Initialize if user has no stats data yet
          if(!userStats) this.userStatsRepo.initUserStats(uid);
        });
    }
  }

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
