import { Component, Input, OnInit } from '@angular/core';
import { FormControlConfig } from '../base/form-base';
import { InputBase } from '../base/input-base';
import { CustomErrorStateMatcher } from '../../utils/custom-error-state-matcher';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent extends InputBase implements OnInit {
  
  @Input()
  formControlConfig!: FormControlConfig;

  @Input()
  label?: string;

  @Input()
  placeHolder: string = '';

  ngOnInit(): void {
    this.matcher = new CustomErrorStateMatcher(this.formControlConfig, this);
  }
}

