import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-copy-template-model',
  templateUrl: './crew-copy-template-model.component.html',
  styleUrls: ['./crew-copy-template-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCopyTemplateModelComponent implements OnInit {
  IsEdit: boolean;
  copyTemplateFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  showUnitField = true;
 

  constructor(private dialogRef: MatDialogRef<CREWCopyTemplateModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.copyTemplateFormGroup = this._fb.group({
        txtTemplate_Name: ["", Validators.required],
        drpCompany_Name: ["", Validators.required],
        drpVessel_Type: ["", Validators.required],
        drpVessel_Flag: ["", Validators.required],
        drpNationality:[ "" ]
      });
    }

  ngOnInit(): void {
   
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
}
