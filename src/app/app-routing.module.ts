import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './features/about/about.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';

const redirectAuthorizedToHome = () => redirectLoggedInTo(['']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { 
    path: 'login', 
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    ...canActivate(redirectAuthorizedToHome),
  },
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