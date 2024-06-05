import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-pb-lib-pb-bonded-items-add',
  templateUrl: './crew-pb-lib-pb-bonded-items-add.component.html',
  styleUrls: ['./crew-pb-lib-pb-bonded-items-add.component.scss']
})
export class CREWPBLIBPBBONDEDITEMSAddComponent implements OnInit {
  bondedItemFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  IsEdit: boolean;
  constructor(private dialogRef: MatDialogRef<CREWPBLIBPBBONDEDITEMSAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.bondedItemFormGroup = this._fb.group({
      txtItem_Name: ["", Validators.required],
      drpItem_Unit :["", Validators.required],
    
    });
   }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
  
}
