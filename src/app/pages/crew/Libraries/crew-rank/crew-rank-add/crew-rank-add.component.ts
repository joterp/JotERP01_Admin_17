import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-rank-add',
  templateUrl: './crew-rank-add.component.html',
  styleUrls: ['./crew-rank-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankAddComponent implements OnInit {
  IsEdit: boolean;
  newRankFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWRankAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newRankFormGroup = this._fb.group({
        txtRank: ["", Validators.required],
        txtRank_Short_Name: ["", Validators.required],
        drpRank_Category: ["", Validators.required],
        drpVessel_dept: ["", Validators.required],
        txtContract_Duration: ["", Validators.required],
        radioNew_Is_Cadet: ["0"],
        radioNew_Is_Cadet_Sup: ["0"],
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
