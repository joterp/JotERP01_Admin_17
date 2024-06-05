import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-voyage-cp-library-edit',
  templateUrl: './ops-voyage-cp-library-edit.component.html',
  styleUrls: ['./ops-voyage-cp-library-edit.component.scss']
})
export class OPSVOYAGECPLIBRARYEditComponent implements OnInit {

  NewVoyageFormGroup:UntypedFormGroup;
  selectedFileName: string = '';
  modeltitle: string="";
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSVOYAGECPLIBRARYEditComponent>) { }

  ngOnInit(): void {
    this.NewVoyageFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      txtVoyage_No:['', Validators.required],
      voyage_start_date:['', Validators.required],
      estimated_end_date:[''],
      actual_end_date:[''],
      drpCharterer_Type:['', Validators.required],
      txtChaterer_Code:[''],
      drpCharterer:['', Validators.required],
      txtChaterer:[''],
      drpSubCharterer:[''],
      txtSubChaterer:[''],
      drpBroker:[''],
      txtBroker:[''],
      txtCharterer_Terms:[''],
      txtRemarks:['']
    })
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
