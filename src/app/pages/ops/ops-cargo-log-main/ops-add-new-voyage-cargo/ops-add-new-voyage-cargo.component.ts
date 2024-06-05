import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-add-new-voyage-cargo',
  templateUrl: './ops-add-new-voyage-cargo.component.html',
  styleUrls: ['./ops-add-new-voyage-cargo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSADDNEWVOYAGECARGOComponent implements OnInit {
  IsEdit: boolean;
  AddCargoFieldFormGroup: UntypedFormGroup;
  AgencyPOFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;


  constructor(private dialogRef: MatDialogRef<OPSADDNEWVOYAGECARGOComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.AddCargoFieldFormGroup = this._fb.group({
      drpVessel: ["", Validators.required],
      drpVoyage_No: ["", Validators.required],
      drpCargo_Figure_Units: ["", Validators.required],
      Date_Voyage_Start: ["", Validators.required],
      Date_Voyage_Complete: [""],
      txtRemarks: [""],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
