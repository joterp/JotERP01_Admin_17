import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


@Component({
  selector: 'fury-admin-ports-add',
  templateUrl: './admin-ports-add.component.html',
  styleUrls: ['./admin-ports-add.component.scss']
})
export class AdminPortsAddComponent {
 // IsEdit: boolean;
  // [x: string]: any;
  // newPortFormGroup: UntypedFormGroup;
  // ErrorMessage: string = "";
  // IsEdit: boolean = false;
  // submit: boolean = false;
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newPortFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AdminPortsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newPortFormGroup = this._fb.group({
      Index_No: ["", Validators.required],
      port_name: ["", Validators.required],
      Country: ["", Validators.required],
      port_code: ["", Validators.required],
      chart:[" "],
      Channel:[" "],
      Latitude_one:[" "],
      Latitude_two:[" "],
      Choose_Latitude:[" "],
      Longitude_one:[" "],
      Longitude_Two:[" "],
      Choose_Longitude:[" "],
      Harbor_Size:[" "],
      Harbor_Type:[" "],
      Publication:[" "],
      Shelter:[" "],
      telephone: ['yes'],
      radio: ['yes'], 
      air: ['yes'],
      telegraph: ['yes'],
      radio_telephone: ['yes'],
      
      tide: ['yes'],
      swell: ['yes'],
      ice: ['yes'], 
      Other: ['yes'],
      eta_message: ['yes'],
      overhead_limits: ['yes'],
      good_holding_grounds: ['yes'],
      turning_area: ['yes'],
      port_of_entry: ['yes'],
      Representative: ['yes'],
      
      Maximum_size_level:[" "],
      Channel_two:[" "],
      Anchorage:[" "],
      Cargo_pier:[" "],
      oil_terminal:[" "],
      tide_two:[" "],
      
      wharves: ['yes'],
      med_moor: ['yes'],
      beach_moor: ['yes'],
      anchor: ['yes'],
      ice_moor: ['yes'],
      medical_facilities: ['yes'],
      degauss: ['yes'],
      garbage_disposal: ['yes'],
      dirty_ballast: ['yes'],
      
      
      provisions: ['yes'],
      fuel_oil: ['yes'],
      drydock:[""],
      
      water: ['yes'],
      disel_oil: ['yes'],
      repair:[" "],
      
      deck: ['yes'],
      engine: ['yes'],
      railway:[" "],
      
      compulsory: ['yes'],
      local_assitance: ['yes'],
      available: ['yes'],
      advisable: ['yes'],
      
      
      fixed: ['yes'],
      mobile: ['yes'],
      floating: ['yes'],
      
      tug_salvage: ['yes'],
      tug_assistance: ['yes'],
      
      tons_plus: ['yes'],
      Tons_two: ['yes'],
      tons_three: ['yes'],
      tons_four: ['yes'],
      
      
      pratique: ['yes'],
      derat_certificate: ['yes'],
      other: ['yes'],
      
      longshore: ['yes'],
      steam: ['yes'],
      new_equipment: ['yes'],
      electrical: ['yes'],
      electric_repair: ['yes'],
      
    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  // SaveCategory(addMore: boolean = false) {
  //   this.ErrorMessage = "";
  //   if (this.submit) {
  //     return;
  //   }
  //   this.submit = true;
  //   var data: object = {};
  //   for (const elem in this.newPortFormGroup.value) {
  //     data[elem] = this.newPortFormGroup.value[elem];
  //   }
  
  //   this.submit = false;
  //   if (this.IsEdit) {
  //     // Assuming you have a staticId variable for the static ID
  //     this.SaveUpdate(data, "v1/RankCategory",this.EditData.id, addMore);
  //   } else {
  //     this.SaveInsert(data, "v1/RankCategory",addMore);
  //   }
  // }
  
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
//             this.newPortFormGroup.reset();
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
//     var fc: object = this.newPortFormGroup.controls;
//     var data = this.EditData;

//     fc["rankCategory"].patchValue(data["rankCategory"]);
   
//   }


}
