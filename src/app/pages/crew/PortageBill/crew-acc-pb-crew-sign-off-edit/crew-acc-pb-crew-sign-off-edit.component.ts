import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-acc-pb-crew-sign-off-edit',
  templateUrl: './crew-acc-pb-crew-sign-off-edit.component.html',
  styleUrls: ['./crew-acc-pb-crew-sign-off-edit.component.scss'],
   encapsulation:ViewEncapsulation.None
})
export class CREWACCPBCrewSignOFFEditComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  SignOffEditFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWACCPBCrewSignOFFEditComponent>) { }

  ngOnInit(): void {
    this.SignOffEditFormGroup = this.fb.group({
      sign_off_date:['', Validators.required],
      date_of_arrival_homeport:['', Validators.required],
      drpSign_Off_Reason:['', Validators.required],
      drpSign_Off_Port:['', Validators.required],
      pickerexpected_date_of_rejoining:[''],
      drpReplaced_By_Seafarer:[''],
      txtBalance_as_of_DOA_Homeport:[''],
      txtLeave_Pay_Accumulated:[''],
      txtAllotment_to_send:[''],
      drpSelect_Bank_Account:[''],
      txtCash_paid_in_hand_at_Sign:[''],
      txtRound_off_Correction:[''],
      txtBalance:['']
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
