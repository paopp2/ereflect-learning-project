import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeaderboardsComponent } from './leaderboards.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LeaderboardsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    LeaderboardsComponent,
  ],
})
export class LeaderboardsModule { }
