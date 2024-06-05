import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-acc-pb-lib-seniority-management-add',
  templateUrl: './crew-acc-pb-lib-seniority-management-add.component.html',
  styleUrls: ['./crew-acc-pb-lib-seniority-management-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWACCPBLIBSeniorityManagementAddComponent implements OnInit {
  newSeniorityFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  IsEdit: boolean;

  constructor(private dialogRef: MatDialogRef<CREWACCPBLIBSeniorityManagementAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newSeniorityFormGroup = this._fb.group({
        drpSalary_Name: ["", Validators.required],
        drpNationality :["", Validators.required],
        drpVesselFlag:["", Validators.required],
        drpVesselType:["", Validators.required],
        drpRank:["", Validators.required],
        txtYear:["", Validators.required],
        txtAmount:[""]


       
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
