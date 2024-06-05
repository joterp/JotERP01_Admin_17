import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-medical-history-add-modal',
  templateUrl: './crew-medical-history-add-modal.component.html',
  styleUrls: ['./crew-medical-history-add-modal.component.scss']
})
export class CREWMedicalHistoryAddModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;
  selectedFileName: string = '';

  CrewMedicalFormGroup:UntypedFormGroup;
  constructor(private dialogRef:MatDialogRef<CREWMedicalHistoryAddModalComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
     this.CrewMedicalFormGroup = this.fb.group({
      drpStaff_Code:['', Validators.required],
      drpVoyage:['', Validators.required],
      drpCase_Type:['', Validators.required],
      case_date:['', Validators.required],
      txtCase_Detail:['', Validators.required],

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
