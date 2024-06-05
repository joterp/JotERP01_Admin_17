import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-trainings-add',
  templateUrl: './crew-trainings-add.component.html',
  styleUrls: ['./crew-trainings-add.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CREWTrainingsAddComponent implements OnInit {
  IsEdit: boolean;
  crewTrainingFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWTrainingsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.crewTrainingFormGroup = this._fb.group({
      drpTraining_Type: ["", Validators.required],
      textTraining_Short_Code: ["", Validators.required],
      textTraining_Name: ["", Validators.required],
      txtTraining_Details: ["", Validators.required],
     
    });
  }
   CloseModal() {
    this.dialogRef.close(true);
  }

}
