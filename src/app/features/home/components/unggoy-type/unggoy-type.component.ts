import { Component, OnInit } from '@angular/core';
import { InputData } from 'src/app/core/models';
import { UserStats } from 'src/app/core/models/user-stats.model';
import { AuthService, UserStatsRepoService } from 'src/app/core/services';
import { TypingStatsService } from '../../services/typing-stats.service';

@Component({
  selector: 'app-unggoy-type',
  templateUrl: './unggoy-type.component.html',
  styleUrls: ['./unggoy-type.component.css'],
})
export class UnggoyTypeComponent implements OnInit {
  currentUserStats?: UserStats;
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
