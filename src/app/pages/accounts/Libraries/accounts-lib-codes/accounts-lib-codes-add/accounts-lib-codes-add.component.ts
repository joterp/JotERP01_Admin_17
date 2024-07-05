import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-accounts-lib-codes-add',
  templateUrl: './accounts-lib-codes-add.component.html',
  styleUrl: './accounts-lib-codes-add.component.scss'
})
export class AccountsLibCodesAddComponent {
  
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newAccountCodeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AccountsLibCodesAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newAccountCodeFormGroup = this._fb.group({
      Company_Name: ["", Validators.required],
      Category: ["", Validators.required],
      Account_Code: ["", Validators.required],
      Code_Name: ["", Validators.required],
      Payable: ["", Validators.required],
      CPEX_OPEX: ["", Validators.required],
      Show_vessel: [""],
      
     

    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
