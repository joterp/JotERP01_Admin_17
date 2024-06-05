import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-copy-reports',
  templateUrl: './copy-reports.component.html',
  styleUrls: ['./copy-reports.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CopyReportsComponent implements OnInit {
  IsEdit: boolean;
  CopyReportsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle : string = "";

  constructor(private dialogRef: MatDialogRef<CopyReportsComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.CopyReportsFormGroup = this._fb.group({
      drpCopy_From: [""],
      drpCopy_To: [""]
      




    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
