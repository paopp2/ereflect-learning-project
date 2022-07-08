import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { environment } from "src/environments/environment";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})

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
          response => {
            this.snackbar.open("You have successfully sent an email.", 'Okay', this.configSuccess);
          }
        )
    }
}