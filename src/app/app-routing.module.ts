import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UnggoyTypeComponent } from './unggoy-type/unggoy-type.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
    { path: '', component: UnggoyTypeComponent },
    { path: 'about', component: AboutComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }