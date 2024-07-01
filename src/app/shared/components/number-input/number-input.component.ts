import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomErrorStateMatcher } from '../../utils/custom-error-state-matcher';
import { InputBase } from '../base/input-base';
import { FormControlConfig } from '../base/form-base';
import { MaskForNumbers } from '../../utils/mask-for-numbers';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent extends InputBase implements OnInit {
  @Input()
  formControlConfig!: FormControlConfig;

  @Input()
  label?: string;

  @Input()
  placeHolder: string = '';

  @Input()
  maskType: MaskForNumbers = MaskForNumbers.INTEGER;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.matcher = new CustomErrorStateMatcher(this.formControlConfig, this);
  }

  onChange(event: any): void {
    this.change.emit(event);
  }
}
