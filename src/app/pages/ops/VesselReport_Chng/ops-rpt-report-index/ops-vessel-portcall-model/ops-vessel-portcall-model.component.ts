import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-vessel-portcall-model',
  templateUrl: './ops-vessel-portcall-model.component.html',
  styleUrls: ['./ops-vessel-portcall-model.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class OPSVesselPortcallModelComponent implements OnInit {
  IsEdit: boolean;
  VesselPortcallFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';
  constructor(private dialogRef: MatDialogRef<OPSVesselPortcallModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.VesselPortcallFormGroup = this._fb.group({
      drpPort: ["", Validators.required],
      drpVoyage_Number: ["", Validators.required],
      
     
      drpAgent_Type: [""],
      drpAgent: [""],
      txtRemark: [""]
     
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

  

}
