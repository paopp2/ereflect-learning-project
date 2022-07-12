import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TimeDisplayPipe } from './time-display.pipe';
@NgModule({
  declarations: [
    TimeDisplayPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TimeDisplayPipe,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class SharedModule { }
