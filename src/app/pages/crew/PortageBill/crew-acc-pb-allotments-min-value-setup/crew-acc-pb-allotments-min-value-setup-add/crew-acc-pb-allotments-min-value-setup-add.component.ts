import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-acc-pb-allotments-min-value-setup-add',
  templateUrl: './crew-acc-pb-allotments-min-value-setup-add.component.html',
  styleUrls: ['./crew-acc-pb-allotments-min-value-setup-add.component.scss']
})
export class CREWACCPBAllotmentsMinValueSetupAddComponent implements OnInit {
  newSetupFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  IsEdit: boolean;

  constructor(private dialogRef: MatDialogRef<CREWACCPBAllotmentsMinValueSetupAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newSetupFormGroup = this._fb.group({

        drpVessel: [""],
        drpNationality :[""],
        drpRank:["", Validators.required],
        txtMinimum_Value:["", Validators.required],
      
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
