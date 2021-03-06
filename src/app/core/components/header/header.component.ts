import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services';
import { Tabs } from '../../../core/models';
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
  ];

  constructor(private router: Router, public authService: AuthService) { 
    authService.currentUser$.subscribe(user => {
      if(user) {
        this.tabs.push({ name: 'Leaderboard', value: 'leaderboards'});
      } else {
        if (this.tabs[this.tabs.length-1].value === 'leaderboards') this.tabs.pop();
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().then(
      () => this.router.navigate(['/login'])
    );
  }
}
