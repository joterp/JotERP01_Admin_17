import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


@Component({
  selector: 'fury-survey-categories-edit',
  templateUrl: './survey-categories-edit.component.html',
  styleUrls: ['./survey-categories-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SurveyCategoriesEditComponent implements OnInit {
  IsEdit: boolean;
  categoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  

  constructor(private dialogRef: MatDialogRef<SurveyCategoriesEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { 
        
      this.categoryFormGroup = this._fb.group({ 
        drpDepartment_Name: ["", Validators.required],
        txtCategory_Name: ["", Validators.required]
        
        
         
      });
    }

  ngOnInit(): void {
    
  }

  CloseModal() {
    this.dialogRef.close(true);
  }
}
