import { Component, Input, OnInit } from '@angular/core';
import { FormControlConfig } from '../base/form-base';
import { InputBase } from '../base/input-base';
import { CustomErrorStateMatcher } from '../../utils/custom-error-state-matcher';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent  extends InputBase implements OnInit {
  
  @Input()
  formControlConfig!: FormControlConfig;

  @Input()
  label?: string;

  ngOnInit(): void {
    this.matcher = new CustomErrorStateMatcher(this.formControlConfig, this);
  }

}
