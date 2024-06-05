import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-passport-and-seaman-book-add',
  templateUrl: './crew-passport-and-seaman-book-add.component.html',
  styleUrls: ['./crew-passport-and-seaman-book-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWPassportAndSeamanBookAddComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  selectedFileName: string = '';
  PassportAndSeamanBookFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWPassportAndSeamanBookAddComponent>) { }

  ngOnInit(): void {
    this.PassportAndSeamanBookFormGroup = this.fb.group({
      drpDocument_Type:['', Validators.required],
      txtDoc_Number:['', Validators.required],
      date_of_issue:['', Validators.required],
      date_of_expiry:['', Validators.required],
      drpCountry_Of_Issue:['', Validators.required],
      txtPlace_Of_Issue:['', Validators.required],
      drpIs_Default:['', Validators.required],
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
