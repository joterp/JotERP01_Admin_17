import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hrm-evaluation-question-sheet-add',
  templateUrl: './hrm-evaluation-question-sheet-add.component.html',
  styleUrl: './hrm-evaluation-question-sheet-add.component.scss'
})
export class HrmEvaluationQuestionSheetAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newInterviewQuesFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  selectedGradingOption: string | null = null;
  constructor(private dialogRef: MatDialogRef<HrmEvaluationQuestionSheetAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
    
     }

  ngOnInit(): void {
    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
      this.newInterviewQuesFormGroup = this._fb.group({
        interview_QUESTION: ["", Validators.required],
        answer: ["", Validators.required],
        drpCategory: ["", Validators.required],
        drpGrading: ["", Validators.required],
        radioNew_Grade:["0"],
        radioNew_Satisfied_notsatisfied:["0"],
        radioNew_Grade_Good:["0"],
        radioNew_Grade_Yes_No:["0"],
        radioNew_Cabin_crew_grade:["0"],
        radioNew_Crew_Ind:["0"],
      });

  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
  toggleUnitField() {
    // Toggle the visibility of the "Unit" form field based on the selected radio button value
    const selectedValue = this.newInterviewQuesFormGroup.get('radioNew_type_Trait').value;
    this.showUnitField = selectedValue === '0'; // Show when "Number" (value '0') is selected, hide for other values
  }


  SaveInterviewQuestion(addMore: boolean = false) {
    
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};

    for (const elem in this.newInterviewQuesFormGroup.value) {
      data[elem] = this.newInterviewQuesFormGroup.value[elem];
    }

    this.submit = false;
    if (this.IsEdit) {
      //     // Assuming you have a staticId variable for the static ID
          this.SaveUpdate(data, "v1/CrewInterviewQuestions", this.EditData.id, addMore);
        } else {
          this.SaveInsert(data, "v1/CrewInterviewQuestions");
        }
  }
 
  
  SaveInsert(data: object, path: string) {
    this.api.PostDataService(path, data)
      .subscribe(
        (res: object) => {
          this.submit = false;
          console.log('SignnnnnnnnnnnnnnnnnResponse-----------------:', res);
          if (Number.isInteger(res)) {
            this.common.ShowMessage(
              "Interview Question Added Successfully ",
              "notify-success",
              3000
            );
          } else {
            this.common.ShowMessage(res["Message"], "notify-error", 6000);
          }
        },
        (error) => {
          this.submit = false;
          console.error('Error:', error);
          let errorMessage = error["Message"] || "Interview Question is already exist" || "Unknown error";
          this.common.ShowMessage(errorMessage, "notify-error", 6000);
        }
      );
}

  
  SaveUpdate(data: object, path: string, id: number, addMore: boolean = false) {
    // Assuming you have a key for the static ID, like 'id'
    data['id'] = id; // Use the 'id' parameter instead of 'number'
    this.api.PutDataService(path, data).subscribe(
      (res: any) => {
        this.submit = false;
        if (Number.isInteger(res)) {
          if (addMore) {
            this.newInterviewQuesFormGroup.reset();
            this.IsEdit = false;
            this.common.callComponentMethod();
          } else {
            this.dialogRef.close(true);
          }
        } else {
          this.common.ShowMessage(res.body['error'], "notify-error", 6000);
        }
      },
      (error) => {
        console.log(error['error']['error'], "errorrrrrrrrrrrrrrrr")
        this.submit = false;
        this.common.ShowMessage(error['error']['error']?'Mandatory fields cannot be empty':'Mandatory fields cannot be empty', "notify-error", 6000);
      }
    );
}

  InsertFormValues() {
    var fc: object = this.newInterviewQuesFormGroup.controls;
    var data = this.EditData;

    fc["interview_QUESTION"].patchValue(data["interview_QUESTION"]);
    fc["answer"].patchValue(data["answer"]);
   
   
  }

}
