import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreHelper } from '../firestore/firestore-helper.service';
import { UserStats } from '../models/user/user-stats.model';

@Injectable({
  providedIn: 'root'
})
export class UserStatsRepoService {

  constructor(private dbHelper: FirestoreHelper) { }
  
  async initUserStats(userId: string) {
    await this.pushUserStats(
      userId,
      <UserStats>{
        highestWpm: -1,
        fastestTime: -1,
      },
    );
  }
  
  async pushUserStats(userId: string, userStats: UserStats) {
    return await this.dbHelper.setDoc({
      path: `user_stats/${userId}`,
      data: userStats,
      merge: true,
    });
  }

  getUserStats(userId: string): Observable<UserStats | null> {
    return this.dbHelper.getDocObservable({
      path: `user_stats/${userId}`,
      builder: (data, _) => (data) ? data as UserStats : null,
    });
  }
}
