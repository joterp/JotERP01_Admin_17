import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-interview-add-modal',
  templateUrl: './crew-interview-add-modal.component.html',
  styleUrls: ['./crew-interview-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWInterviewAddModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  InterviewsFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWInterviewAddModalComponent>, private dialog:MatDialog) { }

  ngOnInit(): void {

    this.InterviewsFormGroup = this.fb.group({
      drpRank:['', Validators.required],
      interview_date:['', Validators.required],
      txtInterview_Timezone:['', Validators.required],
      drpInterview_Type:['', Validators.required],
      drpInterview_Name:['', Validators.required],
      drpdrpInterviewer:['', Validators.required],
      txtInterview_Comment:['', Validators.required],
      radioInterview_Mode:['']
    })

  }

  CloseModal() {
    this.dialogRef.close(null);
  }


}
