import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-nad-co2-emission-multiplier-factor-add',
  templateUrl: './ops-nad-co2-emission-multiplier-factor-add.component.html',
  styleUrls: ['./ops-nad-co2-emission-multiplier-factor-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADCO2EmissionMultiplierFactorAddComponent implements OnInit {

  modeltitle:string="";
  AddNewEmissionFactorFormGroup:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder, private dialogRef: MatDialogRef<OPSNADCO2EmissionMultiplierFactorAddComponent>) { }

  ngOnInit(): void {
     this.AddNewEmissionFactorFormGroup = this.fb.group({
      drpFuel_Type:['', Validators.required],
      txtCO2_Factor:['', Validators.required]
     })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }	

}
