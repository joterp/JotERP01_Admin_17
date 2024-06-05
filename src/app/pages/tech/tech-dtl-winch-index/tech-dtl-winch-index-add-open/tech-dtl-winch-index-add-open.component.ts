import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-tech-dtl-winch-index-add-open',
  templateUrl: './tech-dtl-winch-index-add-open.component.html',
  styleUrls: ['./tech-dtl-winch-index-add-open.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TechDtlWinchIndexAddOpenComponent implements OnInit {
  IsEdit: boolean;
  dtlAlarmIndexFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';

  constructor(private dialogRef: MatDialogRef<TechDtlWinchIndexAddOpenComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { this.dtlAlarmIndexFormGroup = this._fb.group({
      drpVessel_Name: ["", Validators.required],
      drpWinch_Name: ["", Validators.required],
      Date_Tested: ["", Validators.required],
      txtActual_BRL: [""],
      txtAlarm_Set_Value: [""],
      txtRope_Dia: [""],
      txtDistance: [""],
      txtPiston: [""],
      txtPd: [""],
      txtPa: [""],
      txtremarks: [""],
      txtAction_Taken:[""],
      radioVerified: [""],
   

    });
  
   }
   
  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  removeUploadedFileadditem(): void {
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }
}
