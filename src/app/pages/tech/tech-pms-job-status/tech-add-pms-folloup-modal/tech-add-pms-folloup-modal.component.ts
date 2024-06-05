import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-tech-add-pms-folloup-modal',
  templateUrl: './tech-add-pms-folloup-modal.component.html',
  styleUrls: ['./tech-add-pms-folloup-modal.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHAddPMSFolloupModalComponent implements OnInit {

  PMSFollowUpFormGroup:UntypedFormGroup;
  ErrorMessage: string = "";
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<TECHAddPMSFolloupModalComponent>) { }

  ngOnInit(): void {
    this.PMSFollowUpFormGroup = this.fb.group({
      txtPMSFollowUp_Date:['', Validators.required],
      txtFollowup_Details:['', Validators.required]
    });
    
  }
  CloseModal(){
    this.dialogRef.close(null);
  }
}
