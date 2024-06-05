import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-new-location-add',
  templateUrl: './ops-new-location-add.component.html',
  styleUrls: ['./ops-new-location-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNewLocationAddComponent implements OnInit {
  IsEdit: boolean;
  LocationFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';

  constructor(private dialogRef: MatDialogRef<OPSNewLocationAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.LocationFormGroup = this._fb.group({
      drpLocation_Name: ["", Validators.required],
      drpVessel: ["", Validators.required],
      Date_Form: ["", Validators.required],
      Date_To: [""],
      txtEmbarkation_Remark: [""],
      txtDisembarkation_Remark :[""],
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
