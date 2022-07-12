import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './features/about/about.component';
import { AuthComponent } from './features/auth/auth.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { LeaderboardsComponent } from './features/leaderboards/leaderboards.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { UnggoyTypeComponent } from './features/home/components';

const redirectAuthorizedToHome = () => redirectLoggedInTo(['']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: AuthComponent, ...canActivate(redirectAuthorizedToHome) },
  { path: 'contact-us', component: ContactUsComponent },
  { 
    path: 'leaderboards', 
    loadChildren: () => import('./features/leaderboards/leaderboards.module').then(m => m.LeaderboardsModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { 
    path: '', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    ...canActivate(redirectUnauthorizedToLogin), 
  },
  { path: '**', redirectTo: '' },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }