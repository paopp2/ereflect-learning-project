import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { TextSourceComponent } from './unggoy-type/text-source/text-source.component';
import { TextInputComponent } from './unggoy-type/text-input/text-input.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { UnggoyTypeComponent } from './unggoy-type/unggoy-type.component';
import { TimeDisplayPipe } from './unggoy-type/pipes/time-display.pipe';
import { TypingStatsComponent } from './unggoy-type/typing-stats/typing-stats.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FooterComponent } from './footer/footer.component';
import { SwitchOptionsComponent } from './unggoy-type/switch-options/switch-options.component';
import { MatSelectModule } from '@angular/material/select';
import { GravatarModule } from 'ngx-gravatar';
@NgModule({
  declarations: [
    AppComponent,
    UnggoyTypeComponent,
    TextSourceComponent,
    TextInputComponent,
    HeaderComponent,
    TimeDisplayPipe,
    TypingStatsComponent,
    AboutComponent,
    AuthComponent,
    FooterComponent,
    SwitchOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatSelectModule,
    GravatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
