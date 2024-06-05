import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-vid-category-edit',
  templateUrl: './ops-vid-category-edit.component.html',
  styleUrls: ['./ops-vid-category-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDCategoryEditComponent implements OnInit {
  IsEdit: boolean;
  categoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<OPSVIDCategoryEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.categoryFormGroup = this._fb.group({ 
      drpVID_Ques: ["", Validators.required],
      drpVID_Chapters: ["", Validators.required],
      txtCategory: ["", Validators.required],
      txtCategory_No: [""]

      
      
       
    });
  }
  
  CloseModal() {
    this.dialogRef.close(true);
  }


}