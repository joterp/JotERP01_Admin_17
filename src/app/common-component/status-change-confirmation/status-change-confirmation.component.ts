import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'Confirmation-dialog',
  template: `
    <div mat-dialog-title
					  cdkDrag
					  cdkDragRootElement=".cdk-overlay-pane"
					  cdkDragHandle
					  style="display: flex; justify-content: space-between; align-items: center;	background-color: black;color:#fff">
					 <span style="font-size: 18px; margin-right: auto;margin-top: 5px;">{{title}}</span>
					 <button mat-icon-button (click)="close(false)"  style="margin-left: auto;">
						 <mat-icon>close</mat-icon>
					 </button>
					</div>

    
    <mat-dialog-content style="margin:5px">
      <p>{{message}}</p>
    </mat-dialog-content>


    <mat-dialog-actions  align="end">
      <button mat-raised-button color="primary" (click)="close(false)">No</button>
      <button mat-raised-button color="primary" (click)="close(true)">Yes</button>
  </mat-dialog-actions>
  `,
  styles: [`
    .mat-mdc-dialog-container .mdc-dialog__title{
			color: #fff;
			background-color: black;
		  }
      
  `]
})
export class StatusChangeConfirmation {
  constructor(private dialogRef: MatDialogRef<StatusChangeConfirmation>) {
  }
  title: string = 'Delete Record!';
  message: string = 'Are you sure want to delete this record ?';

  close(answer: boolean) {
    this.dialogRef.close(answer);
  }
}