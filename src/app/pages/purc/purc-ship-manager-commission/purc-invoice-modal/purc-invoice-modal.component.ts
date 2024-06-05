import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'fury-purc-invoice-modal',
  templateUrl: './purc-invoice-modal.component.html',
  styleUrls: ['./purc-invoice-modal.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class PURCInvoiceModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PURCInvoiceModalComponent>,) { }

  ngOnInit(): void {

  }
  CloseModal() {
    this.dialogRef.close(null);
  }

}
