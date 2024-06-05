import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-tech-add-attachments',
  templateUrl: './tech-add-attachments.component.html',
  styleUrls: ['./tech-add-attachments.component.scss']
})
export class TECHAddAttachmentsComponent implements OnInit {

  selectedFileNameCatalogue: string = '';
  AttachmentsFormGroup:UntypedFormGroup;
  ErrorMessage: string = "";

  constructor(private dialogRef:MatDialogRef<TECHAddAttachmentsComponent>) { }

  ngOnInit(): void {
  }

  onFileSelectedcatalogue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameCatalogue = inputElement.files[0].name;
    } else {
      this.selectedFileNameCatalogue = '';
    }
  }
  removeUploadedFilecatalogue(): void {
    this.selectedFileNameCatalogue = null; // Reset the selectedFileNameCatalogue
  }
  
 CloseModal(){
    this.dialogRef.close(null);
  }
}
