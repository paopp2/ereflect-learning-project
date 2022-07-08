import { Component, OnInit } from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';
@Component({
  selector: 'app-typing-stats',
  templateUrl: './typing-stats.component.html',
  styleUrls: ['./typing-stats.component.css']
})
export class TypingStatsComponent implements OnInit {

  constructor(public statsService: TypingStatsService) { }

  ngOnInit(): void { }
}
