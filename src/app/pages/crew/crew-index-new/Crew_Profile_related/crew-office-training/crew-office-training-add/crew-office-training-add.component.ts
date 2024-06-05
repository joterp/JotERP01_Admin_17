import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-office-training-add',
  templateUrl: './crew-office-training-add.component.html',
  styleUrls: ['./crew-office-training-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWOfficeTrainingAddComponent implements OnInit {

  selectedFileName: string = '';
  modeltitle:string="";
  modeltype:string;

  OfficeTrainingAddFormGroup:UntypedFormGroup;
  constructor(private dialogRef:MatDialogRef<CREWOfficeTrainingAddComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
 this.OfficeTrainingAddFormGroup = this.fb.group({
  txtTrainning_Planned_Date:[''],
  expiry_date:[''],
  training_date:[''],
  drpTraining_Country:[''],
  drpTraining_Name:[''],
  drpTraining_City:[''],
  drpTraining_Type:[''],
  txtTraining_Assessment:[''],
  txtTraining_Institute:[''],
  txtTrainer:[''],
  txtTraining_Remarks:['']
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
