import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-portcall-feedback-question-add',
  templateUrl: './ops-lib-portcall-feedback-question-add.component.html',
  styleUrl: './ops-lib-portcall-feedback-question-add.component.scss'
})
export class OpsLibPortcallFeedbackQuestionAddComponent {
  IsEdit: boolean;
  feedbackquestionsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<OpsLibPortcallFeedbackQuestionAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.feedbackquestionsFormGroup = this._fb.group({
      Question: ["", Validators.required],
      Question_No: ["", Validators.required],
      Category: ["", Validators.required],
      Grading: ["", Validators.required],
      Question_Type: ["", Validators.required],
      Question_Options: ["", Validators.required],
      
    });
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
