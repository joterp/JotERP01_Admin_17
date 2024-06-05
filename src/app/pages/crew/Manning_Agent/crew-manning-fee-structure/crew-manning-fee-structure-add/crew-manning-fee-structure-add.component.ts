import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-manning-fee-structure-add',
  templateUrl: './crew-manning-fee-structure-add.component.html',
  styleUrls: ['./crew-manning-fee-structure-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWManningFeeStructureAddComponent implements OnInit {
  IsEdit: boolean;
  newDocumentFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWManningFeeStructureAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newDocumentFormGroup = this._fb.group({
        txtFee_Name: ["", Validators.required],
        txtFee_Short_Name: ["", Validators.required],
        drpFee_Type: ["", Validators.required],
        radioNew_Reqsn_Status: ["1"],
       
        
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
