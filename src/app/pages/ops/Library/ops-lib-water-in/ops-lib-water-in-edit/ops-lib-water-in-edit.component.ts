import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-water-in-edit',
  templateUrl: './ops-lib-water-in-edit.component.html',
  styleUrls: ['./ops-lib-water-in-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpsLibWaterInEditComponent implements OnInit {
  IsEdit: boolean;
  TankFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<OpsLibWaterInEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.TankFormGroup = this._fb.group({
      drpVessel: ["", Validators.required],
      txtTank_Name: ["", Validators.required],
      drpType: ["", Validators.required],
      txtCapacity: [""],
      txtCapcity_Per: [""],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
