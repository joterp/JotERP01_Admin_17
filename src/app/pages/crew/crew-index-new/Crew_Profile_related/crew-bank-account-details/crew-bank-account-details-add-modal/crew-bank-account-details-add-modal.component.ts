import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-bank-account-details-add-modal',
  templateUrl: './crew-bank-account-details-add-modal.component.html',
  styleUrls: ['./crew-bank-account-details-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CREWBankAccountDetailsAddModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;
  selectedFileName: string = '';
  BankDetailsFormGroup:UntypedFormGroup;

  constructor(private dialogRef:MatDialogRef<CREWBankAccountDetailsAddModalComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
      this.BankDetailsFormGroup = this.fb.group({
        txtAccount_Number:['', Validators.required],
        drpAccount_Currency:['', Validators.required],
        BankDetailsFormGroup:['', Validators.required],
        txtBenificiary_Name:['', Validators.required],
        txtBank_Name:['', Validators.required],
        txtBank_Address:['', Validators.required],
        txtIntermediary_Bank_Details:[''],
        radioIs_Default:[''],
        txtBank_Code:['', Validators.required],
        txtBranch_Code:['', Validators.required],
        txtSwift_Code:[''],
        txtIBAN_Code:[''],
        txtIFSC_Code:['']
      })


  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  
  
  
  removeUploadedFileadditem(): void {
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }

  CloseModal() {
    this.dialogRef.close(null);
  }


}
