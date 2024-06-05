import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-medical-followup-modal-add',
  templateUrl: './crew-medical-followup-modal-add.component.html',
  styleUrls: ['./crew-medical-followup-modal-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMedicalFollowupModalAddComponent implements OnInit {
  IsEdit: boolean;
  newFollowUpFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWMedicalFollowupModalAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newFollowUpFormGroup = this._fb.group({
     
        txtFollowUp: ["", Validators.required],
       
      });
     }
  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
