import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-pb-lib-pb-victualling-add',
  templateUrl: './crew-pb-lib-pb-victualling-add.component.html',
  styleUrls: ['./crew-pb-lib-pb-victualling-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWPBLIBPBVICTUALLINGAddComponent implements OnInit {
  pbMealIndexFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  IsEdit: boolean;
  constructor(private dialogRef: MatDialogRef<CREWPBLIBPBVICTUALLINGAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.pbMealIndexFormGroup = this._fb.group({
        drpVessel: ["", Validators.required],
        drpVictualling_Account :["", Validators.required],
        drpCurrency:["", Validators.required],
        txtVictualling_Amount:["", Validators.required],
       
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
