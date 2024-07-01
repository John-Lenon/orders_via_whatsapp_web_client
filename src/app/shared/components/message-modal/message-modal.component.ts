import { Component, Inject, Input, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {
  
  dialogRef?: MatDialogRef<any> = inject(MatDialogRef<any>);
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){ }

  onNoClick() : void {
    this.dialogRef?.close();
  }

  onConfirmClick() : void { 
       this.data.fnConfirm(this.dialogRef);
  }
}

export interface DialogData {
  textMessage: string,
  textCancelButton?: string,
  textConfirmButton?: string,  
  fnConfirm: (dialogRef?: MatDialogRef<any>) => void,
  fnCancel: () => void
}
