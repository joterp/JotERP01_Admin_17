import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-tech-defect-list-index-add',
  templateUrl: './tech-defect-list-index-add.component.html',
  styleUrls: ['./tech-defect-list-index-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHDefectListIndexAddComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;
  
  DefectListFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<TECHDefectListIndexAddComponent>) { }

  ngOnInit(): void {
    this.DefectListFormGroup = this.fb.group({
      drpVessel_Name:['', Validators.required],
      chkIs_NCR:[''],
      chkDisplay:[''],
      chkShow_To_Third_Parties:[''],
      txtNCR_Number:[''],
      txtDescription:['', Validators.required],
      drpPrimary:['', Validators.required],
      drpSecondary:['', Validators.required],
      drpVessel_Dept:['', Validators.required],
      drpOffice_Dept:['', Validators.required],
      drpQMS_Elements_Ref:[''],
      txtInspection_Date:[''],
      date_raised:['', Validators.required],
      ETC:['', Validators.required],
      drpPriority:['', Validators.required],
      drpAssigned_By:['', Validators.required],
      drpRequisition_Code:[''],
      drpPIC:[''],
      chkPIC_Private:['']
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }
}
