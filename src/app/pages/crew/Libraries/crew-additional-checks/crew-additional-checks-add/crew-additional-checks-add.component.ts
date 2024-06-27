import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-additional-checks-add',
  templateUrl: './crew-additional-checks-add.component.html',
  styleUrls: ['./crew-additional-checks-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWAdditionalChecksAddComponent implements OnInit {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newTraitDetailFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  

  constructor(private dialogRef: MatDialogRef<CREWAdditionalChecksAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private fb: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public data: any) {
     
     }
     

  ngOnInit(): void {
    this.newTraitDetailFormGroup = this._fb.group({
      fields: ["", Validators.required],
      trait_TYPE :[1],
      trait_UNIT: [0],
      show_IN_PROFILE: [0],
      remark: [""],
    
    
    });
    
    if (this.IsEdit) {
      this.InsertFormValues();
    }
   
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
  toggleUnitField() {
    // Toggle the visibility of the "Unit" form field based on the selected radio button value
    const selectedValue = this.newTraitDetailFormGroup.get('radioNew_type_Trait').value;
    this.showUnitField = selectedValue === '0'; // Show when "Number" (value '0') is selected, hide for other values
  }
  
  SaveMannigFields(addMore: boolean = false) {
    
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};

    for (const elem in this.newTraitDetailFormGroup.value) {
      data[elem] = this.newTraitDetailFormGroup.value[elem];
    }

        // // Convert trait_TYPE to integer
        // data.trait_TYPE = parseInt(data.trait_TYPE, 10);

    this.submit = false;
    if (this.IsEdit) {
      //     // Assuming you have a staticId variable for the static ID
          this.SaveUpdate(data, "v1/ManningFields", this.EditData.id, addMore);
        } else {
          this.SaveInsert(data, "v1/ManningFields");
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
              "Manning Fields Added Successfully ",
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
          this.common.ShowMessage(error["Message"], "notify-error", 6000);
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
            this.newTraitDetailFormGroup.reset();
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
  var fc: object = this.newTraitDetailFormGroup.controls;
  var data = this.EditData;

  fc["fields"].patchValue(data["fields"]);
  fc["trait_TYPE"].patchValue(data["trait_TYPE"]);
  fc["trait_UNIT"].patchValue(data["trait_UNIT"]);

  
  // fc["trait_TYPE"].patchValue(data["trait_TYPE"]);
  fc["show_IN_PROFILE"].patchValue(data["show_IN_PROFILE"]);
  fc["remark"].patchValue(data["remark"]);
 
}



}
