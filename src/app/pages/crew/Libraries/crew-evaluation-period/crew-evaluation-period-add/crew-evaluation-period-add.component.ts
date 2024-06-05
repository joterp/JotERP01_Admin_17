import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-evaluation-period-add',
  templateUrl: './crew-evaluation-period-add.component.html',
  styleUrls: ['./crew-evaluation-period-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWEvaluationPeriodAddComponent implements OnInit {
  IsEdit: boolean;
  newEvaluationPeriodFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWEvaluationPeriodAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.newEvaluationPeriodFormGroup = this._fb.group({
      txtPeriod_Name: ["", Validators.required],
      txtPeriod_Days: ["", Validators.required],

     
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
