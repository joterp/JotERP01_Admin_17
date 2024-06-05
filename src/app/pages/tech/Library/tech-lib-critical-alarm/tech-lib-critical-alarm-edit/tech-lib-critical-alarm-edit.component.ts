import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-tech-lib-critical-alarm-edit',
  templateUrl: './tech-lib-critical-alarm-edit.component.html',
  styleUrls: ['./tech-lib-critical-alarm-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHLIBCRITICALALARMEditComponent implements OnInit {
  IsEdit: boolean;
  newAlarmFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor( private dialogRef: MatDialogRef<TECHLIBCRITICALALARMEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newAlarmFormGroup = this._fb.group({
        drpVessel: ["", Validators.required],
        drpMachinery: ["", Validators.required],
        txtAlarm_Name: ["", Validators.required],
        txtSet_value: ["", Validators.required],
        drpAlarm_Unit: ["", Validators.required],
        txtPermissible_Variance: ["", Validators.required],
        drpSFI: [""],
        txtTesting_Procedure: [""],
  
  
  
  
      });
     }
     CloseModal() {
      this.dialogRef.close(true);
    }

  ngOnInit(): void {
  }

}
