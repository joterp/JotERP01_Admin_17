import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-approve-supplier-question-copy-que-modal',
  templateUrl: './purc-approve-supplier-question-copy-que-modal.component.html',
  styleUrls: ['./purc-approve-supplier-question-copy-que-modal.component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class PURCApproveSupplierQuestionCopyQueModalComponent implements OnInit {
  IsEdit: boolean;

  copyQueFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<PURCApproveSupplierQuestionCopyQueModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    @Inject (MAT_DIALOG_DATA) public data:any) {
      this.copyQueFormGroup = this._fb.group({ 
        drp_Copy_From_Vessel: [""],
        drp_Copy_To_Scope: [""],
        
        
        
         
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
