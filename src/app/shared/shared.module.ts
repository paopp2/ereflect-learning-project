import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GravatarModule } from 'ngx-gravatar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import * as fromPipes from './pipes';
import * as fromComponents from './components';
@NgModule({
  declarations: [
    ...fromPipes.pipes,
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    GravatarModule,
    MatButtonModule,
  ],
  exports: [
    ...fromPipes.pipes,
    ...fromComponents.components,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
