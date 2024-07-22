import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


@Component({
  selector: 'fury-ops-lib-portcall-feedback-category-add',
  templateUrl: './ops-lib-portcall-feedback-category-add.component.html',
  styleUrl: './ops-lib-portcall-feedback-category-add.component.scss'
})
export class OpsLibPortcallFeedbackCategoryAddComponent {
  IsEdit: boolean;
  categoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<OpsLibPortcallFeedbackCategoryAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.categoryFormGroup = this._fb.group({
      Category_Name: ["", Validators.required],
     
      
    });
    
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
