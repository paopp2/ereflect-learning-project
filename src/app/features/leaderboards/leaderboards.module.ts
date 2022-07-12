import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeaderboardsComponent } from './leaderboards.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  { path: '', component: LeaderboardsComponent },
];

@NgModule({
  declarations: [LeaderboardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    RouterModule.forChild(routes),
  ],
  exports: [LeaderboardsComponent],
})
export class LeaderboardsModule { }
