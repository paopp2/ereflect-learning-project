import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { InputData } from '../models/input-data.model';
import { UserStats } from '../models/user-stats.model';
import { UserStatsRepoService } from '../user-stats-repo/user-stats-repo.service';
import { TypingStatsService } from './services/typing-stats.service';

@Component({
  selector: 'app-unggoy-type',
  templateUrl: './unggoy-type.component.html',
  styleUrls: ['./unggoy-type.component.css'],
  providers: [TypingStatsService]
})
export class UnggoyTypeComponent implements OnInit {
  currentUserStats!: UserStats;
  switchType = 'mxblack';

  constructor(
    public statsService: TypingStatsService,
    private authService: AuthService,
    private userStatsRepo: UserStatsRepoService,
  ) { }

  ngOnInit() {
    const currentUser = this.authService.currentUser;
    if (currentUser) {
      this.userStatsRepo.getUserStats(currentUser.id)
        .subscribe((userStats) => {
          if (!userStats) {
            // Initialize if user has no stats data yet
            this.userStatsRepo.initUserStats(currentUser)
            return;
          };
          
          this.statsService.currentUserStats = userStats;
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
    if (event.key === "Tab") {
      this.statsService.reset();
      event.preventDefault();
    }
  }

}
