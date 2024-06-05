import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-tech-dmm-meeting-index-add',
  templateUrl: './tech-dmm-meeting-index-add.component.html',
  styleUrls: ['./tech-dmm-meeting-index-add.component.scss']
})
export class TECHDMMMeetingIndexAddComponent implements OnInit {

  ErrorMessage: string = "";
  MeetingIssueFormGroup: UntypedFormGroup;
  
  constructor(private dialogRef:MatDialogRef<TECHDMMMeetingIndexAddComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.MeetingIssueFormGroup = this.fb.group({
      drpVessel_Name:['', Validators.required],
      meeting_date:['', Validators.required],
      drpPriority:['', Validators.required],
      drpOffice_Dept:['', Validators.required],
      drpPIC_AR:['', Validators.required],
      txtTitle:['', Validators.required],
      txtDescription:['', Validators.required],
      radioI_CAR:['']
    })

  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
