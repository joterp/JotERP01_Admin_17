import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-rpt-add-report-edit',
  templateUrl: './ops-rpt-add-report-edit.component.html',
  styleUrls: ['./ops-rpt-add-report-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpsRptAddReportEditComponent implements OnInit {
  IsEdit: boolean;
  ReportFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<OpsRptAddReportEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.ReportFormGroup = this._fb.group({
      txtReport_Name: ["", Validators.required],
      drpDepartment_Name: ["", Validators.required],
      txtFrequency: [""],
      txtShip_File_No: [""],
      txtDocument_Vesrion: [""],
      txtOffice_File_No: [""],
      txtDocument_Date: [""],
      txtForm_No: [""],
      txtRevision: [""],
      txtIssue: [""],
      Revision_Date: [""],
      drpAck_Reqd: [""],
      drpReport_Table_Name: [""],
      txtForm_Name_Ship: [""],
      txtForm_Name_Office: [""],
      txtSql_Index_Ship: [""],
      txtSql_Index_Office: [""],
     
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
