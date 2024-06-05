import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


@Component({
  selector: 'fury-purc-approve-supplier-question-add-new-que',
  templateUrl: './purc-approve-supplier-question-add-new-que.component.html',
  styleUrls: ['./purc-approve-supplier-question-add-new-que.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCApproveSupplierQuestionAddNewQueComponent implements OnInit {
  IsEdit: boolean;
  newQueFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(  private dialogRef: MatDialogRef<PURCApproveSupplierQuestionAddNewQueComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

 @Inject (MAT_DIALOG_DATA) public data:any) { 
  this.newQueFormGroup = this._fb.group({ 
    txtQuestion_Title: ["", Validators.required],
    txtQuestion_Details: ["", Validators.required],
    txtQuestion_Weightage: ["", Validators.required],
    txtMin_Pass_marks: ["", Validators.required],
    drpScope: [""],
    drpCategory: ["", Validators.required],
   
    
    
     
  });
 }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
