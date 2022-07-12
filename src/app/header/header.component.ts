import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Tabs } from '../models/tabs.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tabs: Tabs[] = [
    { name: 'Home', value: ''},
    { name: 'About', value: 'about'},
    { name: 'Contact Us', value: 'contact-us'},
    { name: 'Leaderboard', value: 'leaderboards'}
  ];

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().then(
      () => this.router.navigate(['/login'])
    );
  }
}
