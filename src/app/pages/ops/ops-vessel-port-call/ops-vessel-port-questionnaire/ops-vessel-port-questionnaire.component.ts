import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-vessel-port-questionnaire',
  templateUrl: './ops-vessel-port-questionnaire.component.html',
  styleUrls: ['./ops-vessel-port-questionnaire.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSVesselPortQuestionnaireComponent implements OnInit {

  VesselPortQuesFormGroup:UntypedFormGroup;
  selectedFileName: string = '';
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString())

  constructor(private dialogRef:MatDialogRef<OPSVesselPortQuestionnaireComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.VesselPortQuesFormGroup = this.fb.group({
      txtUpload_By: [""],
      Que_Date: ["", Validators.required],
      txtRemarks: [""],
     
    

    });
  }

  CloseModal() {
    this.dialogRef.close(true);
  }

  //demo
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
