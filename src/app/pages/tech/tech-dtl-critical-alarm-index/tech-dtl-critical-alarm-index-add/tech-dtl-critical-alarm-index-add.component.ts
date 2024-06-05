import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-tech-dtl-critical-alarm-index-add',
  templateUrl: './tech-dtl-critical-alarm-index-add.component.html',
  styleUrls: ['./tech-dtl-critical-alarm-index-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHDTLCRITICALALARMINDEXAddComponent implements OnInit {
  IsEdit: boolean;
  dtlAlarmIndexFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';
  constructor( private dialogRef: MatDialogRef<TECHDTLCRITICALALARMINDEXAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dtlAlarmIndexFormGroup = this._fb.group({
        drpVessel: ["", Validators.required],
        drpMachinery: ["", Validators.required],
        drpAlarm: ["", Validators.required],
        txtAlarm_Set_Value: ["", Validators.required],
        drpSFI_Name: [""],
        Date_Tested: ["", Validators.required],
        txtAlarm_Obtained_Value: ["", Validators.required],
        txtDifference_1: [""],
        txtDifference_2: [""],
        radioVerified: ["", Validators.required],
        txtremark: [""],
  
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
