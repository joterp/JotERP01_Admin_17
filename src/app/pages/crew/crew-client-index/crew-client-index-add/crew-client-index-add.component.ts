import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-client-index-add',
  templateUrl: './crew-client-index-add.component.html',
  styleUrls: ['./crew-client-index-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CREWClientIndexAddComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  NewCrewFormGroup:UntypedFormGroup;

  constructor(private dialogRef:MatDialogRef<CREWClientIndexAddComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.NewCrewFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      drpRank:['', Validators.required],
      txtStaff_Full_Name:['', Validators.required],
      date_of_birth:['', Validators.required],
      drpNationality:[''],
      txtManning_Agent:[''],
      Sign_On_Date:['', Validators.required],
      EOC_Date:['', Validators.required],
      Sign_Off_Date:['', Validators.required],
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
