import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreHelper } from '../firestore/firestore-helper.service';
import { UserStats } from '../models/user-stats.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStatsRepoService {

  constructor(private dbHelper: FirestoreHelper) { }
  
  async initUserStats(user: User) {
    await this.pushUserStats(
      <UserStats>{
        user: user,
        highestWpm: -1,
        fastestTime: -1,
      },
    );
  }
  
  async pushUserStats(userStats: UserStats) {
    return await this.dbHelper.setDoc({
      path: `user_stats/${userStats.user.id}`,
      data: userStats,
      merge: true,
    });
  }
  
  async updateHighestWpm(userId: string, newHighestWpm: number) {
    return await this.dbHelper.setDoc({
      path: `user_stats/${userId}`,
      data: { highestWpm: newHighestWpm },
      merge: true,
    });
  }

  async updateFastestTime(userId: string, newFastestTime: number) {
    return await this.dbHelper.setDoc({
      path: `user_stats/${userId}`,
      data: { fastestTime: newFastestTime },
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