import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-pb-victualling-meal-index-add',
  templateUrl: './crew-pb-victualling-meal-index-add.component.html',
  styleUrls: ['./crew-pb-victualling-meal-index-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWPBVictuallingMealIndexAddComponent implements OnInit {
  IsEdit: boolean;
  pbMealIndexFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWPBVictuallingMealIndexAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.pbMealIndexFormGroup = this._fb.group({
        drpVessel: ["", Validators.required],
        drpMonth :["", Validators.required],
        drpYear:["", Validators.required],
        txtOpening_Balance:["", Validators.required],
        drpCurrency:["", Validators.required]
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
