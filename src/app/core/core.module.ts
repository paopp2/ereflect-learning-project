import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GravatarModule } from 'ngx-gravatar';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from '../app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import * as coreComponents from './components';

@NgModule({
  declarations: [
    ...coreComponents.components,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    GravatarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...coreComponents.components,
  ],
})
export class CoreModule { }
