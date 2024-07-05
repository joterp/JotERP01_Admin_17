import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-isps-security-drill-add',
  templateUrl: './hseq-isps-security-drill-add.component.html',
  styleUrls: ['./hseq-isps-security-drill-add.component.scss']
})
export class HSEQISPSSecurityDrillAddComponent implements OnInit {
  IsEdit: boolean;
  newInspectionReferenceFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HSEQISPSSecurityDrillAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newInspectionReferenceFormGroup = this._fb.group({
        Drill_Type: ["", Validators.required],
        Drill_Name: ["", Validators.required],
        // drpRisk_Category:[""],
        // txtTitle:[""],
        // txtBest_Practice:[""],
       
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
