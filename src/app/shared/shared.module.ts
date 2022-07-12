import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { TimeDisplayPipe } from './pipes/time-display.pipe';
import { FooterComponent, HeaderComponent } from './components';
import { GravatarModule } from 'ngx-gravatar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    TimeDisplayPipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    GravatarModule,
  ],
  exports: [
    TimeDisplayPipe,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
