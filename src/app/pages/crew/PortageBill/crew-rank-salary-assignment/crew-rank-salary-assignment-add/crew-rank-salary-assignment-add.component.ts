import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-rank-salary-assignment-add',
  templateUrl: './crew-rank-salary-assignment-add.component.html',
  styleUrls: ['./crew-rank-salary-assignment-add.component.scss']
})
export class CREWRankSalaryAssignmentAddComponent implements OnInit {
  IsEdit: boolean;
  newSeniorityFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;


  constructor(private dialogRef: MatDialogRef<CREWRankSalaryAssignmentAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.newSeniorityFormGroup = this._fb.group({
      drpSalary_Name: ["", Validators.required],
      drpRank :["", Validators.required],
      drpVessel_Type:["", Validators.required],
      drpTypes_Of_Calculation:[""],
      drpVessel_Flag:["", Validators.required],
      txtAmount_To_Calculate:[""],
      drpNationality:["", Validators.required],
      Date_Form:["", Validators.required],
      drpTypes_Of_Calculation_2:[""],
      Date_To:[""],
      txtAmount_To_Calculate_2:[""]
     
    });
   }

  ngOnInit(): void {
  }
 CloseModal() {
    this.dialogRef.close(true);
  }
}
