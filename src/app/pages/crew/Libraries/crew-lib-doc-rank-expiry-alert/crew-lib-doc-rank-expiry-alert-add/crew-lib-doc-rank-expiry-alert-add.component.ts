import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-lib-doc-rank-expiry-alert-add',
  templateUrl: './crew-lib-doc-rank-expiry-alert-add.component.html',
  styleUrls: ['./crew-lib-doc-rank-expiry-alert-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWLIBDocRankExpiryAlertAddComponent implements OnInit {
  IsEdit: boolean;
  expiryNotificationsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWLIBDocRankExpiryAlertAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
     
     }

  ngOnInit(): void {
    this.expiryNotificationsFormGroup = this._fb.group({
      drpDoc_Name: ["", Validators.required],
      drpRank: ["", Validators.required],
      txtexp_Notifications: ["", Validators.required],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
