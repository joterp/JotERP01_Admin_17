import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-lib-vessel-kpi-add-objectives',
  templateUrl: './hseq-lib-vessel-kpi-add-objectives.component.html',
  styleUrls: ['./hseq-lib-vessel-kpi-add-objectives.component.scss']
})
export class HseqLibVesselKpiAddObjectivesComponent {
  IsEdit: boolean;
  newObjectivesFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HseqLibVesselKpiAddObjectivesComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newObjectivesFormGroup = this._fb.group({
        Category: ["", Validators.required],
        Measurable_Objectives: ["", Validators.required],
        Target: ["", Validators.required],
        Name:[""],
        Remark: ["", Validators.required],
        Query:[""]

      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
