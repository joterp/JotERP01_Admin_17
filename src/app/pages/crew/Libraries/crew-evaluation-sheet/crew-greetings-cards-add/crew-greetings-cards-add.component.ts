import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


@Component({
  selector: 'fury-crew-greetings-cards-add',
  templateUrl: './crew-greetings-cards-add.component.html',
  styleUrl: './crew-greetings-cards-add.component.scss'
})
export class CrewGreetingsCardsAddComponent {
  IsEdit: boolean;
  
  newInterviewQuesFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  showUnitField = true;
  modeltitle : string = "";

  selectedGradingOption: string | null = null;
  constructor(private dialogRef: MatDialogRef<CrewGreetingsCardsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newInterviewQuesFormGroup = this._fb.group({
        drpCard_Type: ["", Validators.required],
        txtGreeting_text: ["", Validators.required],
        // drpCategory: ["", Validators.required],
        // drpGrading: ["", Validators.required],
        // radioNew_Grade:["0"],
        // radioNew_Satisfied_notsatisfied:["0"],
        // radioNew_Grade_Good:["0"],
        // radioNew_Grade_Yes_No:["0"],
        // radioNew_Cabin_crew_grade:["0"],
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
 
}
