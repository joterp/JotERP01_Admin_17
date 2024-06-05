import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-nad-bunker-costs-add',
  templateUrl: './ops-nad-bunker-costs-add.component.html',
  styleUrls: ['./ops-nad-bunker-costs-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADBunkerCostsAddComponent implements OnInit {


  modeltitle:string="";
  OpeningBalanceFormGroup:UntypedFormGroup;
  
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSNADBunkerCostsAddComponent>) { }

  ngOnInit(): void {
    this.OpeningBalanceFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      drpFuel_Type:['', Validators.required],
      date_purchased:[''],
      drpROB_Unit:['', Validators.required],
      txtQty_Purchased:[''],
      txtROB_Qty:[''],
      txtUnit_Price:[''],
      rob_date:[''],
      txtRemark:[''],
      txtROB_Cost:['']
    })
  }

  CloseModal() {
    this.dialogRef.close(true);
  }
}
