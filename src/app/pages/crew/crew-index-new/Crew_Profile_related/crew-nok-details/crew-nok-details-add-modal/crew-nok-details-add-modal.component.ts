import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-nok-details-add-modal',
  templateUrl: './crew-nok-details-add-modal.component.html',
  styleUrls: ['./crew-nok-details-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWNOKDetailsAddModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  selectedFileName: string = '';

  NOKDetailsFormGroup:UntypedFormGroup;
  constructor(private dialogRef:MatDialogRef<CREWNOKDetailsAddModalComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.NOKDetailsFormGroup = this.fb.group({
         txtNOK_Name:['', Validators.required],
         drpRelationship:['', Validators.required],
         nok_dob:[''],
         txtNOK_Phone:['', Validators.required],
         txtPassport_No:[''],
         txtIssued_Place:[''],
         expiry_date:[''],
         txtAddress:['', Validators.required],
         radioIs_NOK:['', Validators.required],
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
