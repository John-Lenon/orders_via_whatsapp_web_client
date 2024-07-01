import { Component, Input, OnInit } from '@angular/core';
import { CustomErrorStateMatcher } from '../../utils/custom-error-state-matcher';
import { FormControlConfig } from '../base/form-base';
import { InputBase } from '../base/input-base';
import { OptionToSelectList } from '../../models/item-select-list';

@Component({
  selector: 'app-select-list-input',
  templateUrl: './select-list-input.component.html',
  styleUrls: ['./select-list-input.component.css']
})
export class SelectListInputComponent extends InputBase implements OnInit {
  
  @Input()
  formControlConfig!: FormControlConfig;

  @Input()
  label?: string;
  
  @Input()
  listaItens?: OptionToSelectList[];

  selectedValue?: number = 0;

  ngOnInit(): void {
    this.matcher = new CustomErrorStateMatcher(this.formControlConfig, this);  
  }

  onSelectionChange(event: any): void {
    this.selectedValue = event.value;
  }

}