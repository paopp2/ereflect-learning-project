import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AuthComponent },
];

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AuthComponent,
  ],
})
export class AuthModule { }
