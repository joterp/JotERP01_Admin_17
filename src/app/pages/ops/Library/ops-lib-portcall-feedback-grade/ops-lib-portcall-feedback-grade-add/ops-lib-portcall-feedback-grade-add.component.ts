import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-portcall-feedback-grade-add',
  templateUrl: './ops-lib-portcall-feedback-grade-add.component.html',
  styleUrl: './ops-lib-portcall-feedback-grade-add.component.scss'
})
export class OpsLibPortcallFeedbackGradeAddComponent {
  IsEdit: boolean;
  FeedbackGradeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private dialogRef: MatDialogRef<OpsLibPortcallFeedbackGradeAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.FeedbackGradeFormGroup = this._fb.group({
      Company :["", Validators.required],
      txtGrade: ["", Validators.required],
      drpGrade_Type: ["", Validators.required],
      drpMin_Type: ["", Validators.required],
      drpMax_Type: ["", Validators.required],
      drpOptions: [""],
      
    });
    
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
