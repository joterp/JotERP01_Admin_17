import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-vid-question-edit',
  templateUrl: './ops-vid-question-edit.component.html',
  styleUrls: ['./ops-vid-question-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDQuestionEditComponent implements OnInit {
  IsEdit: boolean;
  questionFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<OPSVIDQuestionEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.questionFormGroup = this._fb.group({ 
      drpVID_Ques: ["", Validators.required],
      drpVID_Chapters: ["", Validators.required],
      drpVID_Category: ["", Validators.required],
      txtQuestion: ["", Validators.required],
      txtOCIMF: ["", Validators.required],
      drpAnswer_Type: ["", Validators.required],
      drpAnswer_Nature: ["", Validators.required],
      txtAnswer_Unit: [""],
      txtBuild_Query: [""]
      
       
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
