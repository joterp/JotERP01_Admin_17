import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReportDetailsComponent implements OnInit {
  IsEdit: boolean;
  EditData: object;

  reportDetailsFormGroup: UntypedFormGroup;

  constructor(private dialogRef: MatDialogRef<ReportDetailsComponent>,
    private fb: UntypedFormBuilder,
   
    private api: ApiService,
    private common: CommonService) { }

  ngOnInit(): void {
    this.reportDetailsFormGroup = this.fb.group({
      drpReport_Category: ["" ,Validators.required],
      txtDetails: ["", Validators.required],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
