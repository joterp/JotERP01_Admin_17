import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-vacancies-add',
  templateUrl: './crew-vacancies-add.component.html',
  styleUrls: ['./crew-vacancies-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CREWVacanciesAddComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  RequirementFormGroup:UntypedFormGroup;

  constructor(private dialogRef:MatDialogRef<CREWVacanciesAddComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
     this.RequirementFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      drpRank:['', Validators.required],
      Joinning_Date:['', Validators.required],
      txtRequirement:['', Validators.required],
      txtAdditional_Requirement:['']
     });
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
