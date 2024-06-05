import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-intreview-sheet-add',
  templateUrl: './crew-intreview-sheet-add.component.html',
  styleUrls: ['./crew-intreview-sheet-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWIntreviewSheetAddComponent implements OnInit {
  IsEdit: boolean;
  interviewSheetFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWIntreviewSheetAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.interviewSheetFormGroup = this._fb.group({
        textInterview_Sheet: ["", Validators.required],
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
