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
  selector: 'app-switch-options',
  templateUrl: './switch-options.component.html',
  styleUrls: ['./switch-options.component.css']
})
export class SwitchOptionsComponent implements OnInit {
  @Input() switchType!: string;
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
