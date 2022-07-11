import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  myForm!: FormGroup;
  requiredMessage: string = 'This field is required!';
  emailValidityMessage: string = 'Please enter a valid email!';

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit(form: FormGroup, formGroupDirective: FormGroupDirective) {
    this.emailService.sendEmail(form);
    formGroupDirective.resetForm();
  }

}
