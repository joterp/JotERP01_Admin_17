import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-survey-tenure-edit',
  templateUrl: './survey-tenure-edit.component.html',
  styleUrls: ['./survey-tenure-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SURVEYTenureEditComponent implements OnInit {
  IsEdit: boolean;

  tenureFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<SURVEYTenureEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
   
    @Inject (MAT_DIALOG_DATA) public data:any) { 
      this.tenureFormGroup = this._fb.group({ 
        txtTenure_Name: ["", Validators.required],
        txtDuration: ["", Validators.required]
        
        
         
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
