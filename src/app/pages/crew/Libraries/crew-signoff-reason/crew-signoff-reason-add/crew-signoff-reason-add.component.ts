import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-signoff-reason-add',
  templateUrl: './crew-signoff-reason-add.component.html',
  styleUrls: ['./crew-signoff-reason-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWSignoffReasonAddComponent implements OnInit {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newsignoffReasonFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWSignoffReasonAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)

    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
      this.newsignoffReasonFormGroup = this._fb.group({
        sign_Off_Reason: ["", Validators.required],
      });
  
      if (this.IsEdit) {
        this.InsertFormValues();
      }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  SaveCountry(addMore: boolean = false) {
    
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};

    for (const elem in this.newsignoffReasonFormGroup.value) {
      data[elem] = this.newsignoffReasonFormGroup.value[elem];
    }

    this.submit = false;
    if (this.IsEdit) {
      //     // Assuming you have a staticId variable for the static ID
          this.SaveUpdate(data, "v1/SignOffReason", this.EditData.id, addMore);
        } else {
          this.SaveInsert(data, "v1/SignOffReason");
        }
  }
  // SaveSignoff(addMore: boolean = false) {
  //   this.ErrorMessage = "";
  //   if (this.submit) {
  //     return;
  //   }
  //   this.submit = true;
  //   var data: object = {};
  //   for (const elem in this.newsignoffReasonFormGroup.value) {
  //     data[elem] = this.newsignoffReasonFormGroup.value[elem];
  //   }
  
  //   this.submit = false;
  //   if (this.IsEdit) {
  //     // Assuming you have a staticId variable for the static ID
  //     this.SaveUpdate(data, "v1/SignOffReason", 8, addMore);
  //   } else {
  //     this.SaveInsert(data, "v1/SignOffReason");
  //   }
  // }
  
  SaveInsert(data: object, path: string) {
    this.api.PostDataService(path, data)
      .subscribe(
        (res: object) => {
          this.submit = false;
          console.log('SignnnnnnnnnnnnnnnnnResponse-----------------:', res);
          if (Number.isInteger(res)) {
            this.common.ShowMessage(
              "SignOff Added Successfully ",
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
          let errorMessage = error["Message"] || "SignOff Name is already exist" || "Unknown error";
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
            this.newRankFormGroup.reset();
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
    var fc: object = this.newsignoffReasonFormGroup.controls;
    var data = this.EditData;

    fc["sign_Off_Reason"].patchValue(data["sign_Off_Reason"]);
   
  }

 

  // this function is used to save currency
  // Save(data: object, path: string, addMore) {
  //   this.api.PostDataService(path,data).subscribe(
  //     (res: object) => {
  //       this.submit = false;
  //       if (Number.isInteger(res)) {
  //         if (addMore) {
  //           this.newsignoffReasonFormGroup.reset({
              

  //           });
  //           this.common.callComponentMethod();
  //         } else {
  //           this.dialogRef.close(true);
  //         }
  //         this.common.ShowMessage(
  //           "Signoff saved successfully",
  //           "notify-success",
  //           3000
  //         );
  //       } else {
  //         // this.ErrorMessage = res['message'];
  //         this.common.ShowMessage(res["Message"], "notify-error", 6000);
  //       }
  //     },
  //     (error) => {
  //       this.submit = false;
  //       this.common.ShowMessage(error["Message"], "notify-error", 6000);
  //     }
  //   );
  // }
  // SaveSignoff(addMore: boolean = false) {
  //   this.ErrorMessage = "";
  //   if (this.submit) {
  //     return;
  //   }
  //   this.submit = true;
  
  //   const data = {
  //     ...this.newsignoffReasonFormGroup.value
  //   };
  
  //   this.Save(
  //     data, 
  //     this.IsEdit ? `v1/SignOffReason?id=${this.data?.id}` : "v1/SignOffReason", 
  //     addMore
  //   );
  // }
  
  // Save(path: string, id: string, addMore: boolean = false) {
  //   // Creating payload
  //   const payload = {
  //     id: this.IsEdit ? this.data?.id : null,
  //     sign_Off_Reason: this.newsignoffReasonFormGroup.get('sign_Off_Reason')?.value
  //   };
  
  //   if (this.IsEdit) {
  //     this.api.PutDataService(path, payload).subscribe(
  //       (res: any) => {
  //         this.submit = false;
  //         if (Number.isInteger(res)) {
  //           if (addMore) {
  //             this.newsignoffReasonFormGroup.reset();
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
  //         console.error("Error:", error);
  //         this.submit = false;
  //         this.common.ShowMessage(
  //           error?.error?.error ? 'Mandatory fields cannot be empty' : 'An error occurred',
  //           "notify-error",
  //           6000
  //         );
  //       }
  //     );
  //   } else {
  //     this.api.PostDataService(path, payload).subscribe(
  //       (res: any) => {
  //         this.submit = false;
  //         if (Number.isInteger(res)) {
  //           this.common.ShowMessage(
  //             "SignOff Added Successfully ",
  //             "notify-success",
  //             3000
  //           );
  //           if (addMore) {
  //             this.newsignoffReasonFormGroup.reset();
  //           } else {
  //             this.dialogRef.close(true);
  //           }
  //         } else {
  //           this.common.ShowMessage(res["Message"], "notify-error", 6000);
  //         }
  //       },
  //       (error) => {
  //         console.error("Error:", error);
  //         this.submit = false;
  //         this.common.ShowMessage(
  //           error?.error?.Message ? error.error.Message : 'An error occurred',
  //           "notify-error",
  //           6000
  //         );
  //       }
  //     );
  //   }
  // }
  
}
