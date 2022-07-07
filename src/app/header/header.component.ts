import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  goGithub() {
    window.location.href='https://github.com/paopp2/ereflect-learning-project';
  }

  logout() {
    this.authService.logout().then(
      () => this.router.navigate(['/login'])
    );
  }
}
