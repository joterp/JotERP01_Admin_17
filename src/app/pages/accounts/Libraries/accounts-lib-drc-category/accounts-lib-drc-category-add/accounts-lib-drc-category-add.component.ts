import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-accounts-lib-drc-category-add',
  templateUrl: './accounts-lib-drc-category-add.component.html',
  styleUrl: './accounts-lib-drc-category-add.component.scss'
})
export class AccountsLibDrcCategoryAddComponent {
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
  constructor(private dialogRef: MatDialogRef<AccountsLibDrcCategoryAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newCategoryFormGroup = this._fb.group({
      Category: ["", Validators.required],
      Category_Code: [""],
     

    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
