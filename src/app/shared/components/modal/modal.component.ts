import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public dialogRef?: MatDialogRef<any> = inject(MatDialogRef<any>);

  @Input()
  textConfirmButton?: string;

  @Input()
  textCancelButton?: string;

  @Input()
  textSingleButton?: string;
  
  @Input()
  textTitle: string = "";

  @Input()
  contentDividingLine: boolean = true;

  @Output()
  confirmClick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  cancelClick: EventEmitter<any> = new EventEmitter<any>();

  onNoClick() : void {
    this.cancelClick.emit();
    this.dialogRef?.close();
  }

  onConfirmClick() : void { 
    this.confirmClick.emit(this.dialogRef);    
  }
}