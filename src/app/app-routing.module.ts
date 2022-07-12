import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UnggoyTypeComponent } from './unggoy-type/unggoy-type.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth/auth.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';

const redirectAuthorizedToHome = () => redirectLoggedInTo(['']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: AuthComponent, ...canActivate(redirectAuthorizedToHome) },
  { path: 'leaderboards', component: LeaderboardsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', component: UnggoyTypeComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '**', redirectTo: '' },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }