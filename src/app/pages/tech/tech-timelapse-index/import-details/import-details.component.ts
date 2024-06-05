import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-import-details',
  templateUrl: './import-details.component.html',
  styleUrls: ['./import-details.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class IMPORTDETAILSComponent implements OnInit {
  EditData: object;
  IsEdit: boolean;
  createLinkFormGroup: UntypedFormGroup;

  selectedFileName: string = '';
  constructor(private dialogRef: MatDialogRef<IMPORTDETAILSComponent>,
    private fb: UntypedFormBuilder,
   
    private api: ApiService,
    private common: CommonService) { }

  ngOnInit(): void {
    this.createLinkFormGroup = this.fb.group({
      txtLink: [""],
      expiryDate: [""],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
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
}
