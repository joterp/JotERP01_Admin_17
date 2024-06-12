import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { SurveyCategoriesEditComponent } from '../../survey-categories/survey-categories-edit/survey-categories-edit.component';
;

@Component({
  selector: 'fury-survey-certificate-edit',
  templateUrl: './survey-certificate-edit.component.html',
  styleUrls: ['./survey-certificate-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SURVEYCertificateEditComponent implements OnInit {
  IsEdit: boolean;
  certificateFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<SurveyCategoriesEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { 
      this.certificateFormGroup = this._fb.group({ 
        drpCategory_Name: ["", Validators.required],
        txtCertificate_Name: ["", Validators.required],
        drpTenure_Duration: ["", Validators.required],
        txtTenure_Window_Less: ["", Validators.required],
        txtTenure_Window_More: ["", Validators.required],
                 
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
