import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { environment } from "src/environments/environment";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class EmailService {

    private configSuccess: MatSnackBarConfig = {
        duration: 2000,
        panelClass: ['style-success'],    
        horizontalPosition:'start',
        verticalPosition: 'bottom',
      };

    constructor(private http: HttpClient, private snackbar: MatSnackBar,){}

    sendEmail(form:FormGroup){
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post(environment.formspreeApi,
        { name: form.value.name, replyto: form.value.email, message: form.value.message },
        { 'headers': headers }).subscribe(
          { next: () => {
                this.snackbar.open("You have successfully sent an email.", 'Okay', this.configSuccess);
          },
            error: () => {
                this.snackbar.open("There was an error in sending your message.", 'Okay', this.configSuccess);
            }
          })
    }
}