import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-followup-add',
  templateUrl: './crew-followup-add.component.html',
  styleUrls: ['./crew-followup-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWFollowupAddComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;
  
  AddFollowupFormGroup:UntypedFormGroup;
  constructor(private dialogRef:MatDialogRef<CREWFollowupAddComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.AddFollowupFormGroup = this.fb.group({
      txtFollowup_Remark:['']
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
