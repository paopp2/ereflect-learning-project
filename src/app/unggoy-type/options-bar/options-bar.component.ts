import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';
import { Switch } from 'src/app/models/switch-type.model';

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.css']
})
export class OptionsBarComponent implements OnInit {
  @Input() switchType: string = 'mxblack';
  @Output() switchTypeChange = new EventEmitter<string>();

  switches: Switch[] = [
    { value: 'mxblack', viewValue: 'Cherry MX Blacks' },
    { value: 'mxbrown', viewValue: 'Cherry MX Browns' },
    { value: 'mxblue', viewValue: 'Cherry MX Blues' },
    { value: 'bucklingspring', viewValue: 'Buckling Spring' },
  ];

  constructor(private statsService: TypingStatsService) { }

  ngOnInit() {
  }

  onReset() {
    this.statsService.reset();
  }

  onSwitchSelected(switchType: string) { 
    this.switchTypeChange.emit(switchType);
  }
}
