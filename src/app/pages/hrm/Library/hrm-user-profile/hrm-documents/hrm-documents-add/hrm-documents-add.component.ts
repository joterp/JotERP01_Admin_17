import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hrm-documents-add',
  templateUrl: './hrm-documents-add.component.html',
  styleUrl: './hrm-documents-add.component.scss'
})
export class HrmDocumentsAddComponent {
  IsEdit: boolean;
  newDocumentFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HrmDocumentsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newDocumentFormGroup = this._fb.group({
        Document_Type: ["", Validators.required],
        Document_Name: ["", Validators.required],
        Document_Short_Name: [""],
        Alarm_Days: ["", Validators.required],
        Is_Mandatory: ["", Validators.required],
       
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
