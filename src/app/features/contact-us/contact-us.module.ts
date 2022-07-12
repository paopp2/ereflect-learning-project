import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
  ],
  exports: [
    ContactUsComponent,
  ],
  providers: [EmailService],
})
export class ContactUsModule { }
