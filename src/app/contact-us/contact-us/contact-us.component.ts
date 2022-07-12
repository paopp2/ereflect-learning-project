import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  myForm!: FormGroup;
  requiredMessage: string = 'This field is required!';
  emailValidityMessage: string = 'Please enter a valid email!';

  constructor(private emailService: EmailService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  onSubmit(form: FormGroup, formGroupDirective: FormGroupDirective) {
    this.emailService.sendEmail(form);
    formGroupDirective.resetForm();
  }

}
