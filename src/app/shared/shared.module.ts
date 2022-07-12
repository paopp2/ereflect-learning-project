import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import * as fromPipes from './pipes';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    ...fromPipes.pipes,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...fromPipes.pipes,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class SharedModule { }
