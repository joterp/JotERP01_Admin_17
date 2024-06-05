import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-feedback-remark-add-modal',
  templateUrl: './crew-feedback-remark-add-modal.component.html',
  styleUrls: ['./crew-feedback-remark-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWFeedbackRemarkAddModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;
  selectedFileName: string = '';

  FeedbackFormGroup:UntypedFormGroup;

  constructor(private dialogRef:MatDialogRef<CREWFeedbackRemarkAddModalComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
   this.FeedbackFormGroup = this.fb.group({
    drpVessel_Name:[''],
    drpCategory:['', Validators.required],
    txtFeedback_Remark:['', Validators.required],
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
