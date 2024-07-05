import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-accounts-drc-quo-company-add',
  templateUrl: './accounts-drc-quo-company-add.component.html',
  styleUrl: './accounts-drc-quo-company-add.component.scss'
})
export class AccountsDRCQUOCompanyAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newAccountCodeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileNameLogo: string;
  selectedFileNameImg: string;
  constructor(private dialogRef: MatDialogRef<AccountsDRCQUOCompanyAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newAccountCodeFormGroup = this._fb.group({
      Service_Provider_Name: ["", Validators.required],
      Address: [""],
      Country: ["", Validators.required],
      PIN_ZIP_Code: [""],
      Currency: [""],
      Sales_Emails_1: [""],
      Sales_Emails_2: [""],
      Code: [""],
      Phone_Number_1: [""],
      Phone_Number_2: [""],
      Fax_1: [""],
      Fax_2: [""],
      Web_URL_1: [""],
      Web_URL_2: [""],

      
     

    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
  onFileSelectedLogo(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.selectedFileNameLogo = input.files[0].name;
    }
}

removeUploadedFileLogo(): void {
    this.selectedFileNameLogo = null;
    // Optionally, reset the input value to allow re-selecting the same file
    (document.getElementById('logoUpload') as HTMLInputElement).value = '';
}

onFileSelectedImg(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.selectedFileNameImg = input.files[0].name;
    }
}

removeUploadedFileImg(): void {
    this.selectedFileNameImg = null;
    // Optionally, reset the input value to allow re-selecting the same file
    (document.getElementById('chopImageUpload') as HTMLInputElement).value = '';
}

}
