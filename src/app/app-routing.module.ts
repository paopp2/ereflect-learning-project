import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UnggoyTypeComponent } from './unggoy-type/unggoy-type.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth/auth.component';

// TODO: Revert routes to original. Temporarily done like this for testing auth feature
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: UnggoyTypeComponent },
    { path: 'login', component: AuthComponent },
    { path: 'about', component: AboutComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }