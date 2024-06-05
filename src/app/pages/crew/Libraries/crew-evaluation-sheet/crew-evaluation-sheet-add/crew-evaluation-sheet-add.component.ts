import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-evaluation-sheet-add',
  templateUrl: './crew-evaluation-sheet-add.component.html',
  styleUrls: ['./crew-evaluation-sheet-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWEvaluationSheetAddComponent implements OnInit {
  IsEdit: boolean;
  evaluationSheetFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWEvaluationSheetAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.evaluationSheetFormGroup = this._fb.group({
        textEvaluation_Sheet: ["", Validators.required],
        drpRank :["", Validators.required],
        drpCopy_From:[""]
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
