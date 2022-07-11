import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { UserStats } from '../models/user-stats.model';
import { UserStatsRepoService } from '../user-stats-repo/user-stats-repo.service';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit, OnDestroy {
  topUserStats: UserStats[] = [];
  private userStatsSub!: Subscription;

  constructor(
    private userStatsRepo: UserStatsRepoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userStatsSub = this.route.queryParams.pipe(
      mergeMap(params => this.userStatsRepo.getTopUserStats(params['stats'] ?? 'wpm')),
    ).subscribe(userStats => this.topUserStats = userStats);
  }
  
  ngOnDestroy(): void {
    this.userStatsSub.unsubscribe();
  }

  userStatsById(index: number, userStats: UserStats) {
    return userStats.user.id;
  }

}
