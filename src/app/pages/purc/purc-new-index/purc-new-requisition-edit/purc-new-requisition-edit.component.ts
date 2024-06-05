import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-purc-new-requisition-edit',
  templateUrl: './purc-new-requisition-edit.component.html',
  styleUrls: ['./purc-new-requisition-edit.component.scss']
})
export class PURCNewRequisitionEditComponent implements OnInit {

  NewRequisitionFormGroup:UntypedFormGroup;
  selectedFileName: string = '';
  ErrorMessage: string = "";
  constructor(private dialogRef:MatDialogRef<PURCNewRequisitionEditComponent>,private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.NewRequisitionFormGroup = this.fb.group({
      txtRequistion_Title:[''],
      drpVessel:[''],
      drpDept_Type:[''],
      drpDepartment:[''],
      drpRequisition_Type:[''],
      drpUrgency:[''],
      drpDelivery_Port:[''],
      delivery_date:[''],
      drpVoyage_Number:[''],
      txtRemarks:['']
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
