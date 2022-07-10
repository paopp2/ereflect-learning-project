import { Component, OnInit } from '@angular/core';
import { UserStats } from '../models/user-stats.model';
import { UserStatsRepoService } from '../user-stats-repo/user-stats-repo.service';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {
  topUserStats: UserStats[]  = [];

  constructor(private userStatsRepo: UserStatsRepoService) { 
  }

  ngOnInit(): void {
    this.userStatsRepo.getTopUserStats().subscribe({
      next: (userStats) => this.topUserStats = userStats,
    });
  }
  
  userStatsById(index: number, userStats: UserStats) {
    return userStats.user.id;
  }

}
