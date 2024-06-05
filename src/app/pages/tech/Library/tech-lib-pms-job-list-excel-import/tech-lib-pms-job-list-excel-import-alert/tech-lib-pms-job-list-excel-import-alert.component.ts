import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-tech-lib-pms-job-list-excel-import-alert',
  templateUrl: './tech-lib-pms-job-list-excel-import-alert.component.html',
  styleUrls: ['./tech-lib-pms-job-list-excel-import-alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TechLibPmsJobListExcelImportAlertComponent implements OnInit {
  IsEdit: boolean;
  firstFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<TechLibPmsJobListExcelImportAlertComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

 @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
 

}
