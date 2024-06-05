import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-nad-cii-details-add',
  templateUrl: './ops-nad-cii-details-add.component.html',
  styleUrls: ['./ops-nad-cii-details-add.component.scss']
})
export class OPSNADCIIDetailsAddComponent implements OnInit {

  modeltitle:string="";
  AddNewCIIDetailsFormGroup:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSNADCIIDetailsAddComponent>) { }

  ngOnInit(): void {
    this.AddNewCIIDetailsFormGroup = this.fb.group({
      drpVessel_Type:['', Validators.required],
      drpVariable_Type:['', Validators.required],
      txtVariable_Calc:['', Validators.required],
      txtVariable_Value:['', Validators.required],
      txtVariable_a:['', Validators.required],
      txtVariable_c:['', Validators.required],
      txtVariable_CII_Ref:['', Validators.required],
      txtVariable_d1:['', Validators.required],
      txtVariable_d2:['', Validators.required],
      txtVariable_d3:['', Validators.required],
      txtVariable_d4:['', Validators.required],

    })
    
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
