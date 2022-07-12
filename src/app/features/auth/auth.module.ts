import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AuthComponent,
  ],
})
export class AuthModule { }
