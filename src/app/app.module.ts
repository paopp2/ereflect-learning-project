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

@NgModule({
  declarations: [
    AppComponent,
    UnggoyTypeComponent,
    TextSourceComponent,
    TextInputComponent,
    HeaderComponent,
    TimeDisplayPipe,
    TypingStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
