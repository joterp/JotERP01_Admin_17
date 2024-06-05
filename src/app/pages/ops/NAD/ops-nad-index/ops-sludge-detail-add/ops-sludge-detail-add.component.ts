import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-sludge-detail-add',
  templateUrl: './ops-sludge-detail-add.component.html',
  styleUrls: ['./ops-sludge-detail-add.component.scss']
})
export class OPSSludgeDetailAddComponent implements OnInit {

  modeltitle:string="";
  SludgeDetailFormGroup:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSSludgeDetailAddComponent>) { }

  ngOnInit(): void {
    this.SludgeDetailFormGroup = this.fb.group({
      drpSludge_Or_Bilge:['', Validators.required],
      txtDaily_Production:[''],
      txtTotal_Quantity:[''],
      txtTank_Number:[''],
      txtCurrent_Filling_Ratio:[''],
      txtRemark:['']
    })
  }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
