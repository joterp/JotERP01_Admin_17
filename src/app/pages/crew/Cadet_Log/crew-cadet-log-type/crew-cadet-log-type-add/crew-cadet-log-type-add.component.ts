import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-cadet-log-type-add',
  templateUrl: './crew-cadet-log-type-add.component.html',
  styleUrls: ['./crew-cadet-log-type-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogTypeAddComponent implements OnInit {
  IsEdit: boolean;
  newCadetLogTYpeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWCadetLogTypeAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newCadetLogTYpeFormGroup = this._fb.group({
        drpCompany: ["", Validators.required],
        drpDepartment: ["", Validators.required],
        txtCadet_Name: ["", Validators.required],
        drpDefectlist_Assigned: ["", Validators.required],
        radioNew_Report: ["0", Validators.required],
        radioSync_Vessel: ["0", Validators.required],
        radioNew_Verifiable: ["0", Validators.required],
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  

}
