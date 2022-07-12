import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  loginWithGoogle() {
    this.authService.loginWithGoogle({
      onSuccess: (userCreds) => this.router.navigate(['/']),
      onError: (error) => console.log(error),
    });
  }
  
  logout() {
    this.authService.logout();
  }
}
