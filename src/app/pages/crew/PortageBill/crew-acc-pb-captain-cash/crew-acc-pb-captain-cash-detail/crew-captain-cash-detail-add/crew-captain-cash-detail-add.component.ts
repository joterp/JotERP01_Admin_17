import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-captain-cash-detail-add',
  templateUrl: './crew-captain-cash-detail-add.component.html',
  styleUrls: ['./crew-captain-cash-detail-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWCaptainCashDetailAddComponent implements OnInit {

  modeltitle: string = "";
  modeltype: string;

  CaptainCashDetailAddFormGroup: UntypedFormGroup;
  constructor(private dialogRef: MatDialogRef<CREWCaptainCashDetailAddComponent>, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.CaptainCashDetailAddFormGroup = this.fb.group({
      paid_date:[''],
      drpPort:[''],
      txtItem:[''],
      txtReference_No:[''],
      drpCurrency:[''],
      txtAmount_Recieved:[''],
      txtAmount_Paid:['']
    })

  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
