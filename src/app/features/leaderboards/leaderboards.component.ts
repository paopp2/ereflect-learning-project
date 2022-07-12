import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable } from 'rxjs';
import { UserStats } from '../../core/models';
import { UserStatsRepoService } from '../../core/services';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {
  topUserStats$: Observable<UserStats[]>;

  constructor(
    userStatsRepo: UserStatsRepoService,
    route: ActivatedRoute,
  ) {
    this.topUserStats$ = route.queryParams.pipe(
      mergeMap(params => userStatsRepo.getTopUserStats(params['stats'] ?? 'wpm')),
    );
  }

  ngOnInit(): void {
  }

  userStatsById(index: number, userStats: UserStats) {
    return userStats.user.id;
  }
}
