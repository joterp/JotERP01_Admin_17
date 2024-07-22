import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


@Component({
  selector: 'fury-hrm-evaluation-grade-add',
  templateUrl: './hrm-evaluation-grade-add.component.html',
  styleUrl: './hrm-evaluation-grade-add.component.scss'
})
export class HrmEvaluationGradeAddComponent {
  IsEdit: boolean = false;
  newIntGradeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  EditData:any;
  constructor(private dialogRef: MatDialogRef<HrmEvaluationGradeAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newIntGradeFormGroup = this._fb.group({
        txtGrade: ["", Validators.required],
        drpGrade_Type: ["", Validators.required],
        drpMin_Type: ["", Validators.required],
        drpMax_Type: ["", Validators.required],
        drpOptions: [""],
      });
     
    }
    form = new UntypedFormGroup({
      drpOptions: new UntypedFormControl(0)
    });
  ngOnInit(): void {
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
 
  SaveInterviewGarde(addMore: boolean = false) {
    
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};

    for (const elem in this.newIntGradeFormGroup.value) {
      data[elem] = this.newIntGradeFormGroup.value[elem];
    }

    this.submit = false;
    // if (this.IsEdit) {
    //   //     // Assuming you have a staticId variable for the static ID
    //       this.SaveUpdate(data, "v1/CrewInterviewGradingOptions", this.EditData.id, addMore);
    //     } else {
    //       this.SaveInsert(data, "v1/CrewInterviewGradingOptions");
    //     }
  }
 
  
//   SaveInsert(data: object, path: string) {
//     this.api.PostDataService(path, data)
//       .subscribe(
//         (res: object) => {
//           this.submit = false;
//           console.log('SignnnnnnnnnnnnnnnnnResponse-----------------:', res);
//           if (Number.isInteger(res)) {
//             this.common.ShowMessage(
//               "Interview Grade Added Successfully ",
//               "notify-success",
//               3000
//             );
//           } else {
//             this.common.ShowMessage(res["Message"], "notify-error", 6000);
//           }
//         },
//         (error) => {
//           this.submit = false;
//           console.error('Error:', error);
//           let errorMessage = error["Message"] || "Interview Grade is already exist" || "Unknown error";
//           this.common.ShowMessage(errorMessage, "notify-error", 6000);
//         }
//       );
// }

  
//   SaveUpdate(data: object, path: string, id: number, addMore: boolean = false) {
//     // Assuming you have a key for the static ID, like 'id'
//     data['id'] = id; // Use the 'id' parameter instead of 'number'
//     this.api.PutDataService(path, data).subscribe(
//       (res: any) => {
//         this.submit = false;
//         if (Number.isInteger(res)) {
//           if (addMore) {
//             this.newIntGradeFormGroup.reset();
//             this.IsEdit = false;
//             this.common.callComponentMethod();
//           } else {
//             this.dialogRef.close(true);
//           }
//         } else {
//           this.common.ShowMessage(res.body['error'], "notify-error", 6000);
//         }
//       },
//       (error) => {
//         console.log(error['error']['error'], "errorrrrrrrrrrrrrrrr")
//         this.submit = false;
//         this.common.ShowMessage(error['error']['error']?'Mandatory fields cannot be empty':'Mandatory fields cannot be empty', "notify-error", 6000);
//       }
//     );
// }

  // InsertFormValues() {
  //   var fc: object = this.newIntGradeFormGroup.controls;
  //   var data = this.EditData;

  //   fc["interview_QUESTION"].patchValue(data["interview_QUESTION"]);
  //   fc["answer"].patchValue(data["answer"]);
   
   
  // }

}
