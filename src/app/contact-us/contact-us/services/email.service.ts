import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})

export class EmailService {
    
    constructor(private http: HttpClient){}

    sendEmail(form:FormGroup){
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post('https://formspree.io/f/xoqrolwq',
        { name: form.value.name, replyto: form.value.email, message: form.value.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        )
    }
}