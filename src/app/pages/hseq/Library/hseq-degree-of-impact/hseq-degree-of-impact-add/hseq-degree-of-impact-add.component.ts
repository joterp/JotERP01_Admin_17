import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-degree-of-impact-add',
  templateUrl: './hseq-degree-of-impact-add.component.html',
  styleUrls: ['./hseq-degree-of-impact-add.component.scss']
})
export class HSEQDEGREEOFIMPACTADDComponent implements OnInit {
  IsEdit: boolean;
  newInspectionReferenceFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HSEQDEGREEOFIMPACTADDComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newInspectionReferenceFormGroup = this._fb.group({
        drpManual: ["", Validators.required],
        txtChapter_Name: ["", Validators.required],
        drpRisk_Category:[""],
        txtTitle:[""],
        txtBest_Practice:[""],
       
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
