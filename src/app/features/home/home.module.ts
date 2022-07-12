import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { TypingStatsService } from './services/typing-stats.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { UnggoyTypeComponent } from './components';

const routes: Routes = [
  { path: '', component: UnggoyTypeComponent }
];

@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ...fromComponents.components,
  ],
  providers: [TypingStatsService]
})
export class HomeModule { }
