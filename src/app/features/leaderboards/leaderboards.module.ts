import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeaderboardsComponent } from './leaderboards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    LeaderboardsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LeaderboardsComponent,
  ],
})
export class LeaderboardsModule { }
