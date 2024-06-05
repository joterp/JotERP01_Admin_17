import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-lib-asl-excel-import-alert',
  templateUrl: './purc-lib-asl-excel-import-alert.component.html',
  styleUrls: ['./purc-lib-asl-excel-import-alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurcLibAslExcelImportAlertComponent implements OnInit {
  IsEdit: boolean;
  firstFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  newTimeplapseFormGroup: UntypedFormGroup;
 
  constructor(private dialogRef: MatDialogRef<PurcLibAslExcelImportAlertComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

 @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.newTimeplapseFormGroup = this._fb.group({
      drpVessel: ["", Validators.required],
      Date_To: ["",Validators.required],
      drpUser :["",Validators.required],
      txtDescription:["",Validators.required]
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
 

}
