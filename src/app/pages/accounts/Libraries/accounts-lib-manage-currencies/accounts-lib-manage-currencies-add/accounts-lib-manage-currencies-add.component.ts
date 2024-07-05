import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-accounts-lib-manage-currencies-add',
  templateUrl: './accounts-lib-manage-currencies-add.component.html',
  styleUrl: './accounts-lib-manage-currencies-add.component.scss'
})
export class AccountsLibManageCurrenciesAddComponent {
  // IsEdit: boolean;
  // [x: string]: any;
  // newcurrencyFormGroup: UntypedFormGroup;
  // ErrorMessage: string = "";
  // IsEdit: boolean = false;
  // submit: boolean = false;
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newcurrencyFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AccountsLibManageCurrenciesAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newcurrencyFormGroup = this._fb.group({
      Short_Code: ["", Validators.required],
      Country: ["", Validators.required],
      currency_description:[""],
     

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
//     for (const elem in this.newcurrencyFormGroup.value) {
//       data[elem] = this.newcurrencyFormGroup.value[elem];
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


