import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-copy-pb-victualling-modal',
  templateUrl: './crew-copy-pb-victualling-modal.component.html',
  styleUrls: ['./crew-copy-pb-victualling-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCopyPBVictuallingModalComponent implements OnInit {
  IsEdit: boolean;
  CopyPBVictuallingFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle : string = "";

  constructor(private dialogRef: MatDialogRef<CREWCopyPBVictuallingModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.CopyPBVictuallingFormGroup = this._fb.group({
        drpCopy_Job_From: [""],
        drpCopy_Job_To: [""]
      });
     }
     CloseModal() {
      this.dialogRef.close(true);
    }

    ngOnInit(): void {
    }

}
