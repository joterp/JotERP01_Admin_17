import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


@Component({
  selector: 'fury-admin-manage-alert-add',
  templateUrl: './admin-manage-alert-add.component.html',
  styleUrl: './admin-manage-alert-add.component.scss'
})
export class AdminManageAlertAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newvesselFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AdminManageAlertAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newvesselFormGroup = this._fb.group({
      Module_Name: ["", Validators.required],
      Alert_Name: ["", Validators.required],
      Email_Text:["", Validators.required],
      SMS_Text:["", Validators.required],
      Desktop_Notifications:["", Validators.required],
      Dashboard_Query:["", Validators.required],
    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }

  
  }
  created(event: any) {
    if (this.stringHtml != null) {
      event.root.innerHTML = this.stringHtml;
    }
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

  contentChanged(event: any) {
    this.statementOfFactContent = event?.html || '';
    this.bunkerGradeForm.patchValue({
        STATEMENT_OF_FACT: this.statementOfFactContent
    });
}

  CloseModal() {
    this.dialogRef.close(true);
  }
//   SaveCategory(addMore: boolean = false) {
//     this.ErrorMessage = "";
//     if (this.submit) {
//       return;
//     }
//     this.submit = true;
//     var data: object = {};
//     for (const elem in this.newvesselFormGroup.value) {
//       data[elem] = this.newvesselFormGroup.value[elem];
//     }
  
//     this.submit = false;
//     if (this.IsEdit) {
//       // Assuming you have a staticId variable for the static ID
//       this.SaveUpdate(data, "v1/RankCategory",this.EditData.id, addMore);
//     } else {
//       this.SaveInsert(data, "v1/RankCategory",addMore);
//     }
//   }
  
//   SaveInsert(data: object, path: string, addMore: boolean = false) {
//     this.api.PostDataService(path, data)
//       .subscribe(
//         (res: object) => {
//           this.submit = false;
//           console.log('Response----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>:', res);
//           if (Number.isInteger(res)) {
//             this.common.ShowMessage(
//               "Category Added Successfully ",
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
//           let errorMessage = error["Message"] || "Category Name is already exist" || "Unknown error";
//           this.common.ShowMessage(errorMessage, "notify-error", 6000);
//         }
//       );
// }


  
//   SaveUpdate(data: object, path: string, id: number ,addMore: boolean = false) {
//     // Assuming you have a key for the static ID, like 'id'
//     data['id'] = id;
//     this.api.PutDataService(path, data).subscribe(
//       (res: any) => {
//         this.submit = false;
//         if (Number.isInteger(res)) {
//           if (addMore) {
//             this.newvesselFormGroup.reset();
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
//   }
//   InsertFormValues() {
//     var fc: object = this.newvesselFormGroup.controls;
//     var data = this.EditData;

//     fc["rankCategory"].patchValue(data["rankCategory"]);
   
//   }


}
