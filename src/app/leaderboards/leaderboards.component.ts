import { Component, OnInit } from '@angular/core';
import { UserStats } from '../models/user-stats.model';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {

  constructor() { }
  userStats: UserStats[] = [
    {
      highestWpm: 69,
      fastestTime: 100,
      user: {
        id: 'id',
        displayName: 'name',
        email: 'email@email.com',
        phoneNumber: '09174',
        photoUrl: 'https://www.dogtime.com/assets/uploads/2011/01/file_23114_maltese.jpg',
      },
    },
    {
      highestWpm: 96,
      fastestTime: 200,
      user: {
        id: 'second id',
        displayName: 'second name',
        email: 'email@email.com',
        phoneNumber: '09174',
        photoUrl: 'https://www.dogtime.com/assets/uploads/2011/01/file_23114_maltese.jpg',
      },
    },
    {
      highestWpm: 96,
      fastestTime: 200,
      user: {
        id: 'third id',
        displayName: 'second name',
        email: 'email@email.com',
        phoneNumber: '09174',
        photoUrl: 'https://www.dogtime.com/assets/uploads/2011/01/file_23114_maltese.jpg',
      },
    },
  ];

  ngOnInit(): void {
  }
  
  userStatsById(index: number, userStats: UserStats) {
    return userStats.user.id;
  }

}
