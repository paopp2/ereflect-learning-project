import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { TextSourceComponent } from './unggoy-type/text-source/text-source.component';
import { TextInputComponent } from './unggoy-type/text-input/text-input.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UnggoyTypeComponent } from './unggoy-type/unggoy-type.component';
import { TypingStatsComponent } from './unggoy-type/typing-stats/typing-stats.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SwitchOptionsComponent } from './unggoy-type/switch-options/switch-options.component';
import { MatSelectModule } from '@angular/material/select';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserBestStatsComponent } from './unggoy-type/user-best-stats/user-best-stats.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    UnggoyTypeComponent,
    TextSourceComponent,
    TextInputComponent,
    TypingStatsComponent,
    AboutComponent,
    AuthComponent,
    SwitchOptionsComponent,
    LeaderboardsComponent,
    ContactUsComponent,
    UserBestStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
