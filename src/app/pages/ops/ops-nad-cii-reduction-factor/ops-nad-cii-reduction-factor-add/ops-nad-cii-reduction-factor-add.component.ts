import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-nad-cii-reduction-factor-add',
  templateUrl: './ops-nad-cii-reduction-factor-add.component.html',
  styleUrls: ['./ops-nad-cii-reduction-factor-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADCIIReductionFactorAddComponent implements OnInit {

  modeltitle:string="";

  AddNewReductionFactorFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSNADCIIReductionFactorAddComponent>) { }

  ngOnInit(): void {
        this.AddNewReductionFactorFormGroup = this.fb.group({
          txtFactor_Year:['', Validators.required],
          txtReduction_Factor:['', Validators.required]
        })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }	


}
