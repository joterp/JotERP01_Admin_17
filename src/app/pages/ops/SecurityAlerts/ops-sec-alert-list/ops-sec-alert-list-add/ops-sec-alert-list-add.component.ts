import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-sec-alert-list-add',
  templateUrl: './ops-sec-alert-list-add.component.html',
  styleUrls: ['./ops-sec-alert-list-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSSECAlertListAddComponent implements OnInit {
  IsEdit: boolean;
  newAlertsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<OPSSECAlertListAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
   
    @Inject (MAT_DIALOG_DATA) public data:any) { 
      this.newAlertsFormGroup = this._fb.group({ 
        txtRef_Num: ["", Validators.required],
        Date_Form: [""],
        txtHeadline: ["", Validators.required],
        txtDescription: ["", Validators.required],
        txtLocation: ["", Validators.required],
        Latitude: ["", Validators.required],
       
        drpStatus: ["", Validators.required],
        drpCategory: [""],
        txtAggressor: ["", Validators.required],
        txtSource: ["", Validators.required],
         
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
