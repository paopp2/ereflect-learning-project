import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStats } from '../models/user-stats.model';
import { UserStatsRepoService } from '../user-stats-repo/user-stats-repo.service';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {
  statsType: string = 'wpm';
  topUserStats: UserStats[]  = [];

  constructor(
    private userStatsRepo: UserStatsRepoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        console.log(params);
        this.statsType = params['stats'] ?? 'wpm';
      },
    });

    this.userStatsRepo.getTopUserStats(this.statsType).subscribe({
      next: (userStats) => this.topUserStats = userStats,
    });
  }
  
  userStatsById(index: number, userStats: UserStats) {
    return userStats.user.id;
  }

}
