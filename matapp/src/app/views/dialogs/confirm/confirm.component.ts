import { ConfirmationVo } from './confirmation-vo';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmationVo) {}

// tslint:disable-next-line: typedef
clickYes(){
  this.data.answer = true;
  this.dialogRef.close(this.data);
}
// tslint:disable-next-line: typedef
clickNo(){
  this.data.answer = false;
  this.dialogRef.close(this.data);
}

  ngOnInit(): void {
  }

}
