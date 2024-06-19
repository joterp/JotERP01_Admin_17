import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-rank-category-add',
  templateUrl: './crew-rank-category-add.component.html',
  styleUrls: ['./crew-rank-category-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankCategoryAddComponent implements OnInit {
  // IsEdit: boolean;
  // [x: string]: any;
  // newCategoryFormGroup: UntypedFormGroup;
  // ErrorMessage: string = "";
  // IsEdit: boolean = false;
  // submit: boolean = false;
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newCategoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWRankCategoryAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newCategoryFormGroup = this._fb.group({
      rankCategory: ["", Validators.required],
    });

    if (this.IsEdit) {
      this.InsertFormValues();
    }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  SaveCategory(addMore: boolean = false) {
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};
    for (const elem in this.newCategoryFormGroup.value) {
      data[elem] = this.newCategoryFormGroup.value[elem];
    }
  
    this.submit = false;
    if (this.IsEdit) {
      // Assuming you have a staticId variable for the static ID
      this.SaveUpdate(data, "v1/RankCategory",this.EditData.id, addMore);
    } else {
      this.SaveInsert(data, "v1/RankCategory",addMore);
    }
  }
  
  SaveInsert(data: object, path: string, addMore: boolean = false) {
    this.api.PostDataService(path, data)
      .subscribe(
        (res: object) => {
          this.submit = false;
          console.log('Response----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>:', res);
          if (Number.isInteger(res)) {
            this.common.ShowMessage(
              "Category Added Successfully ",
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
          let errorMessage = error["Message"] || "Category Name is already exist" || "Unknown error";
          this.common.ShowMessage(errorMessage, "notify-error", 6000);
        }
      );
}


  
  SaveUpdate(data: object, path: string, id: number ,addMore: boolean = false) {
    // Assuming you have a key for the static ID, like 'id'
    data['id'] = id;
    this.api.PutDataService(path, data).subscribe(
      (res: any) => {
        this.submit = false;
        if (Number.isInteger(res)) {
          if (addMore) {
            this.newCategoryFormGroup.reset();
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
    var fc: object = this.newCategoryFormGroup.controls;
    var data = this.EditData;

    fc["rankCategory"].patchValue(data["rankCategory"]);
   
  }

// To add thois code when the category name is already exist
  // SaveInsert(data: object, path: string, addMore: boolean = false) {
  //   this.api.PostDataService(path, data)
  //     .subscribe(
  //       (res: any) => {
  //         this.submit = false;
  //         console.log('Response:', res);
  //         if (res > 0) {
  //           this.common.ShowMessage(
  //             "Category Added Successfully",
  //             "notify-success",
  //             3000
  //           );
  //         } else {
  //           this.common.ShowMessage(
  //             "Category already exists or failed to add",
  //             "notify-error",
  //             6000
  //           );
  //         }
  //       },
  //       (error) => {
  //         this.submit = false;
  //         console.error('Error:', error);
  //         this.common.ShowMessage(error["Message"], "notify-error", 6000);
  //       }
  //     );
  // }
  


}
