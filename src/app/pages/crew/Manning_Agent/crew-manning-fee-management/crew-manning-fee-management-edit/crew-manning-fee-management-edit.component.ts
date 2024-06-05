import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-manning-fee-management-edit',
  templateUrl: './crew-manning-fee-management-edit.component.html',
  styleUrls: ['./crew-manning-fee-management-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWManningFeeManagementEditComponent implements OnInit {
  IsEdit: boolean;
  newManningOfficeFeeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWManningFeeManagementEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.newManningOfficeFeeFormGroup = this._fb.group({
      txtAmount: [""],
     
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
