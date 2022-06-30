import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SentencesSourceComponent } from './typing-phrase/sentences-source.component';
import { SentencesInputComponent } from './sentences-input/sentences-input.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    SentencesSourceComponent,
    SentencesInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
