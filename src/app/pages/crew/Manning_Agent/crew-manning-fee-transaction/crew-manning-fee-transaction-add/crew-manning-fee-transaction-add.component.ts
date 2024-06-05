import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-manning-fee-transaction-add',
  templateUrl: './crew-manning-fee-transaction-add.component.html',
  styleUrls: ['./crew-manning-fee-transaction-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWManningFeeTransactionAddComponent implements OnInit {
  IsEdit: boolean;
  newTransactionFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWManningFeeTransactionAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newTransactionFormGroup = this._fb.group({
        drpCrew_Name: ["", Validators.required],
        drpManning_Office: ["", Validators.required],
        drpVessel: ["", Validators.required],
        drpRank: ["", Validators.required],
        drpCurrency: ["", Validators.required],
        drpMonth: ["", Validators.required],
        drpYear: ["", Validators.required],
        txtContract_Date:[""],
        txtSign_On_Date:[""],
        txtSign_Off_Date:[""],
        txtDays_Onboard:[""],
        drpFeet_Type:[""],
        txtAmount:[""],
        
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
