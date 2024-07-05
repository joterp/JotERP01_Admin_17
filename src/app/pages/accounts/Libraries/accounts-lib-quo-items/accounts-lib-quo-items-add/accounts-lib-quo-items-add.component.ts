import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-accounts-lib-quo-items-add',
  templateUrl: './accounts-lib-quo-items-add.component.html',
  styleUrl: './accounts-lib-quo-items-add.component.scss'
})
export class AccountsLibQUOItemsAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newItemsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AccountsLibQUOItemsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newItemsFormGroup = this._fb.group({
      Category: ["", Validators.required],
      Parent_Item:[""],
      Item_Details: ["", Validators.required],
      Currency:[""],
      Quantity:[""],
      Unit_Price:[""],
      Amount:[""],
      Additional_remarks:[""],

    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }
  
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
//     for (const elem in this.newItemsFormGroup.value) {
//       data[elem] = this.newItemsFormGroup.value[elem];
//     }
  
//     this.submit = false;
//     if (this.IsEdit) {
//       // Assuming you have a staticId variable for the static ID
//       this.SaveUpdate(data, "v1/RankCategory",this.EditData.id, addMore);
//     } else {
//       this.SaveInsert(data, "v1/RankCategory",addMore);
//     }
//   }
  

}
