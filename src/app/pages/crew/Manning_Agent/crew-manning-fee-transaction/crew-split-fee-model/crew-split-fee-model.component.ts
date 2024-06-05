import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-split-fee-model',
  templateUrl: './crew-split-fee-model.component.html',
  styleUrls: ['./crew-split-fee-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWSplitFeeModelComponent implements OnInit {
  IsEdit: boolean;
  splitFeeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWSplitFeeModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.splitFeeFormGroup = this._fb.group({
        txtSplit_Date: [""],
        drpOld_Owner:[""],
        drpNew_Owner:[""]
       
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
