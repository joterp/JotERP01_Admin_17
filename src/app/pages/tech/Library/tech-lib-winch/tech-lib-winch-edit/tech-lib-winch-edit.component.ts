import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-tech-lib-winch-edit',
  templateUrl: './tech-lib-winch-edit.component.html',
  styleUrls: ['./tech-lib-winch-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHLIBWinchEditComponent implements OnInit {
  IsEdit: boolean;
  libWinchFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<TECHLIBWinchEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.libWinchFormGroup = this._fb.group({
        drpVessel_Name: ["" ],
        txtWinch_Name: [""],
        radioType: ["2",],
        drpPhysical_Location: ["", Validators.required],
        txtLocation_Details: [""],
        drpCatalogue: ["", Validators.required],
        txtDesign_BHC: [""],
        txtRope_MBL: [""], 
        txtMooring_Drum: [""],
        txtPermissible_Variance: [""],
        drpSFI: [""],
        txtTesting_Procedure: [""],
  
  
  
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
