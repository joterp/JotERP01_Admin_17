import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-signoff-reason-add',
  templateUrl: './crew-signoff-reason-add.component.html',
  styleUrls: ['./crew-signoff-reason-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWSignoffReasonAddComponent implements OnInit {
  IsEdit: boolean;
  newsignoffReasonFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWSignoffReasonAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.newsignoffReasonFormGroup = this._fb.group({
      txtSignoff_Reason: ["", Validators.required],
     
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
