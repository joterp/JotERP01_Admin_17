import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-rank-add',
  templateUrl: './crew-rank-add.component.html',
  styleUrls: ['./crew-rank-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class CREWRankAddComponent implements OnInit {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newRankFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWRankAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,
    

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      
    }

  ngOnInit(): void {
    console.log("EditdataaaaaaaaaaaaaaaRankkkkkkkkkkkkkkkk-------------------------------------------",this.IsEdit)
    this.newRankFormGroup = this._fb.group({
      rankName: ["", Validators.required],
      rankShortCode: ["", Validators.required],
      sortSequence: [0], // Assuming it's a number
      rankCategory: [0], // Assuming it's a number
      activeStatus: [0], // Assuming it's a number
      vesselDepartmentID: [0], // Assuming it's a number
      contractDuration: [0], // Assuming it's a number
      isCadet: [0], // Assuming it's a number
      isCadetSupervisor: [0], // Assuming it's a number
    });
    
    if (this.IsEdit) {
      this.InsertFormValues();
    }

  }
  CloseModal() {
    this.dialogRef.close(true);
  }



// Foe demo 
SaveRank(addMore: boolean = false) {
  this.ErrorMessage = "";
  if (this.submit) {
    return;
  }
  this.submit = true;
  var data: object = {};
  for (const elem in this.newRankFormGroup.value) {
    data[elem] = this.newRankFormGroup.value[elem];
  }

  this.submit = false;
  if (this.IsEdit) {
    // Assuming you have a staticId variable for the static ID
    this.SaveUpdate(data, "v1/Rank", this.EditData.id, addMore);
  } else {
    this.SaveInsert(data, "v1/Rank");
  }
}

SaveInsert(data: object, path: string) {
  this.api.PostDataService(path, data)
    .subscribe(
      (res: object) => {
        this.submit = false;
        console.log('Response-----------------:', res);
        if (Number.isInteger(res)) {
          this.common.ShowMessage(
            "Rank Added Successfully ",
            "notify-success",
            3000
          );
        } else {
          this.common.ShowMessage(res["Message"], "notify-error", 6000);
        }
      },
      (error) => {
        // this.submit = false;
        // this.common.ShowMessage(error, "notify-error", 6000);
        this.submit = false;
        console.error('Error:', error);
        if (error["Message"]) {
          this.common.ShowMessage(error["Message"], "notify-error", 6000);
        } else {
          this.common.ShowMessage("Rank Name is already exist", "notify-error", 6000);
        }
      }
    );
}



SaveUpdate(data: object, path: string, id: number, addMore: boolean = false) {
  // Assuming you have a key for the static ID, like 'id'
  data['id'] = id; 
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
        this.common.ShowMessage('Rank updated successfully', "notify-success", 6000);
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
    // var fc: object = this.newRankFormGroup.controls;
    var data = this.EditData;
    console.log("EditDataRankkkkkkkkkkkkkkkkkkkkkk:", this.EditData);

    // fc["id"].patchValue(data["id"]);
    // fc["rankName"].patchValue(data["rankName"]);
    // fc["rankShortCode"].patchValue(data["rankShortCode"]);
    // fc["sortSequence"].patchValue(data["sortSequence"]);
    // fc["rankCategory"].patchValue(data["rankCategory"]);
    // fc["activeStatus"].patchValue(data["activeStatus"]);
    // fc["vesselDepartmentID"].patchValue(data["vesselDepartmentID"]);
    // fc["contractDuration"].patchValue(data["contractDuration"]);
    // fc["isCadet"].patchValue(data["isCadet"]);
    // fc["isCadetSupervisor"].patchValue(data["isCadetSupervisor"]);
    this.newRankFormGroup.patchValue({
      id: parseInt(data["id"], 10),
      rankName: data["rankName"],
      rankShortCode: data["rankShortCode"],
      sortSequence: parseInt(data["sortSequence"], 10),
      rankCategory: parseInt(data["rankCategory"], 10),
      activeStatus: parseInt(data["activeStatus"], 10),
      vesselDepartmentID: parseInt(data["vesselDepartmentID"], 10),
      contractDuration: parseInt(data["contractDuration"], 10),
      isCadet: parseInt(data["isCadet"], 10),
      isCadetSupervisor: parseInt(data["isCadetSupervisor"], 10),
    });
  }


  // It is working
  // SaveRank(addMore: boolean = false) {
  //   this.ErrorMessage = "";
  //   if (this.submit) {
  //     return;
  //   }
  //   this.submit = true;
  //   var data: object = {};
  //   for (const elem in this.newRankFormGroup.value) {
  //     data[elem] = this.newRankFormGroup.value[elem];
  //   }

  //   this.submit = false;
  //   this.Save(data, this.IsEdit ? "v1/Rank" : "v1/Rank", addMore);
  // }

  // // this function is used to save country
  // Save(data: object, path: string, addMore: boolean = false) {

  //   if(this.IsEdit){

  //     this.api.PutDataService(path, data).subscribe(
  //       (res: any) => {
  //         this.submit = false;
  //         if (Number.isInteger(res)) {
  //           if (addMore) {
  //             this.newRankFormGroup.reset();
  //             this.IsEdit = false;
  //             this.common.callComponentMethod();
  //           } else {
  //             this.dialogRef.close(true);
  //           }
  //           // this.SaveAttachment(this.ORDER_GUID)
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
  //   }else { 
    
  //    this.api.PostDataService(path, data)
  //  //this.httpClient.post('http://localhost:5062/api/v1/Rank', postData, { headers })
  //     .subscribe(
  //       (res: object) => {
  //         this.submit = false;
  //         console.log('Response-----------------:', res); // Add logging here to inspect the response
    
  //         if (Number.isInteger(res)) {
  //           this.common.ShowMessage(
  //                 "Rank Added Successfully ",
  //                 "notify-success",
  //                 3000
  //               );
           
  //           // if (addMore) {
  //           //   this.newRankFormGroup.reset();
  //           //   // this.IsEdit = false;
  //           //   this.common.ShowMessage(
  //           //     "Rank Added Successfully ",
  //           //     "notify-success",
  //           //     3000
  //           //   );
  //           //   // this.common.callComponentMethod();
             

  //           // } else {
  //           //   this.dialogRef.close(true);
  //           // }
  //           // this.SaveAttachment(res['order_guid'])
  //         } else {
  //           this.common.ShowMessage(res["Message"], "notify-error", 6000);
  //         }
  //       },
  //       (error) => {
  //         this.submit = false;
  //         console.error('Error:', error); // Add logging here to inspect the error
  //         this.common.ShowMessage(error["Message"], "notify-error", 6000);
  //       }
  //     );
  //   }
  // }
  // It is working
}
