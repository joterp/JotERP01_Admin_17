import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-interview-questions-add',
  templateUrl: './crew-interview-questions-add.component.html',
  styleUrls: ['./crew-interview-questions-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWInterviewQuestionsAddComponent implements OnInit {
  IsEdit: boolean;
  newInterviewQuesFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  showUnitField = true;
  modeltitle : string = "";

  selectedGradingOption: string | null = null;
  EditData: object;
  constructor(private dialogRef: MatDialogRef<CREWInterviewQuestionsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newInterviewQuesFormGroup = this._fb.group({
        txtInterview_Ques: ["", Validators.required],
        txtAnswer_Reference: ["", Validators.required],
        drpCategory: ["", Validators.required],
        drpGrading: ["", Validators.required],
        radioNew_Grade:["0"],
        radioNew_Satisfied_notsatisfied:["0"],
        radioNew_Grade_Good:["0"],
        radioNew_Grade_Yes_No:["0"],
        radioNew_Cabin_crew_grade:["0"],
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
  toggleUnitField() {
    // Toggle the visibility of the "Unit" form field based on the selected radio button value
    const selectedValue = this.newInterviewQuesFormGroup.get('radioNew_type_Trait').value;
    this.showUnitField = selectedValue === '0'; // Show when "Number" (value '0') is selected, hide for other values
  }
}
