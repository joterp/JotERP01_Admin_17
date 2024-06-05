import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-lube-sample-name-edit',
  templateUrl: './ops-lib-lube-sample-name-edit.component.html',
  styleUrls: ['./ops-lib-lube-sample-name-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpsLibLubeSampleNameEditComponent implements OnInit {
  IsEdit: boolean;
  oilSampleFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<OpsLibLubeSampleNameEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
   
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.oilSampleFormGroup = this._fb.group({ 
      drpMachinery: ["", Validators.required],
      txtSample_Name: ["", Validators.required]

       
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
