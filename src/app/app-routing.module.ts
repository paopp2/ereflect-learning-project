import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UnggoyTypeComponent } from './unggoy-type/unggoy-type.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth/auth.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: UnggoyTypeComponent },
    { path: 'login', component: AuthComponent },
    { path: 'about', component: AboutComponent },
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }