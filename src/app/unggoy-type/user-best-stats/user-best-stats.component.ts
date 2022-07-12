import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TypingStatsService } from '../services/typing-stats.service';

@Component({
  selector: 'app-user-best-stats',
  templateUrl: './user-best-stats.component.html',
  styleUrls: ['./user-best-stats.component.css']
})
export class UserBestStatsComponent implements OnInit {

  constructor(public statsService: TypingStatsService) { }

  ngOnInit(): void {
  }

}
