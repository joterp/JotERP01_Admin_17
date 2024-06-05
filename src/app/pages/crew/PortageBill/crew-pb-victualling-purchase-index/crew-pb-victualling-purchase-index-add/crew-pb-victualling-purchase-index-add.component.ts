import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-pb-victualling-purchase-index-add',
  templateUrl: './crew-pb-victualling-purchase-index-add.component.html',
  styleUrls: ['./crew-pb-victualling-purchase-index-add.component.scss']
})
export class CREWPBVictuallingPurchaseIndexAddComponent implements OnInit {
  IsEdit: boolean;
  purchaseIndexFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWPBVictuallingPurchaseIndexAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.purchaseIndexFormGroup = this._fb.group({
      drpVessel: ["", Validators.required],
      Date_Form :["", Validators.required],
      drpPurchase_Port:["", Validators.required],
      drpPurchase_Supplier:["", Validators.required],
      drpPurchase_Type:["", Validators.required],
      drpPurchase_Currency: ["", Validators.required],
      txtPurchase_Price :["", Validators.required],
      txtPurchase_Exch_Rate:["", Validators.required],
      drpShip_Currency:["", Validators.required],
      txtPrice_Ship_Currency:["", Validators.required]
    });
   }

  ngOnInit(): void {

  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
