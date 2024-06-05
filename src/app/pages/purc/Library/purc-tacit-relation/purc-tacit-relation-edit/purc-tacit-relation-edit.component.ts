import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-tacit-relation-edit',
  templateUrl: './purc-tacit-relation-edit.component.html',
  styleUrls: ['./purc-tacit-relation-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCTacitRelationEditComponent implements OnInit {
  IsEdit: boolean;
  tacitApprovalFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<PURCTacitRelationEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    @Inject (MAT_DIALOG_DATA) public data:any) { 
      this.tacitApprovalFormGroup = this._fb.group({ 
        drpPO_Type: ["", Validators.required],
        drpOverride_Authority: ["", Validators.required],
        txtMail_To: ["", Validators.required],
        txtMail_CC: ["", Validators.required],
        txtStipulated_Time: ["", Validators.required],
        txtTacit_Enabled: ["", Validators.required],
      
      
       
    });
   }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
