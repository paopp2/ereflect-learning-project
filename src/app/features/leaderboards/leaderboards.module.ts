import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeaderboardsComponent } from './leaderboards.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [LeaderboardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatGridListModule,
  ],
  exports: [LeaderboardsComponent],
})
export class LeaderboardsModule { }
