import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-risk-assessment-work-activities-add',
  templateUrl: './hseq-risk-assessment-work-activities-add.component.html',
  styleUrls: ['./hseq-risk-assessment-work-activities-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQRiskAssessmentWorkActivitiesAddComponent implements OnInit {
  IsEdit: boolean;
  newWorkAcitivityFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  
  
  constructor(private dialogRef: MatDialogRef<HSEQRiskAssessmentWorkActivitiesAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newWorkAcitivityFormGroup = this._fb.group({
        drpCategory: ["", Validators.required],
        txtActivity_Name: ["", Validators.required],
        drpFrequency:[""],
        Last_Review:[""],
        Next_Review:[""],
        radioNew_OfficeVerification:[""],

  
       
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
