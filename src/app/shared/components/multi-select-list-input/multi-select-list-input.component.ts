import { Component, Input, OnInit } from '@angular/core';
import { OptionToSelectList } from '../../models/item-select-list';
import { InputBase } from '../base/input-base';
import { CustomErrorStateMatcher } from '../../utils/custom-error-state-matcher';
import { FormControlConfig } from '../base/form-base';

@Component({
  selector: 'app-multi-select-list-input',
  templateUrl: './multi-select-list-input.component.html',
  styleUrls: ['./multi-select-list-input.component.css']
})
export class MultiSelectListInputComponent extends InputBase implements OnInit {
 
  @Input()
  formControlConfig!: FormControlConfig;
  
  @Input()
  label?: string;
  
  @Input()
  listaItens?: OptionToSelectList[];

  ngOnInit(): void {
    this.matcher = new CustomErrorStateMatcher(this.formControlConfig, this);  
  }
}
