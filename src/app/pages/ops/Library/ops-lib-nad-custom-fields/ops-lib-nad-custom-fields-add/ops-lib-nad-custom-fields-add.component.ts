import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-nad-custom-fields-add',
  templateUrl: './ops-lib-nad-custom-fields-add.component.html',
  styleUrls: ['./ops-lib-nad-custom-fields-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSLibNadCustomFieldsAddComponent implements OnInit {
  IsEdit: boolean;
  AddCustomFieldFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<OPSLibNadCustomFieldsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.AddCustomFieldFormGroup = this._fb.group({
      txtField_Name: ["", Validators.required],
      txtField_Unit: ["", Validators.required],
      drpField_Type: ["", Validators.required],
      drpNAD_Type: ["", Validators.required],
      drpNAD_Location: ["", Validators.required],
      txtRemarks: [""]




    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
