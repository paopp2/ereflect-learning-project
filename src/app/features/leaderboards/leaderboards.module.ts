import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeaderboardsComponent } from './leaderboards.component';



@NgModule({
  declarations: [
    LeaderboardsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LeaderboardsComponent,
  ],
})
export class LeaderboardsModule { }
