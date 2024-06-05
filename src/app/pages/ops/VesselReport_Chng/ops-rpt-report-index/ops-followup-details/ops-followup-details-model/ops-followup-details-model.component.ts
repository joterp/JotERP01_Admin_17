import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-followup-details-model',
  templateUrl: './ops-followup-details-model.component.html',
  styleUrls: ['./ops-followup-details-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSFollowupDetailsModelComponent implements OnInit {
  IsEdit: boolean;
  ReportsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';

  date = new UntypedFormControl(new Date());
	serializedDate = new UntypedFormControl((new Date()).toISOString());

  constructor(private dialogRef: MatDialogRef<OPSFollowupDetailsModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      
    }

  ngOnInit(): void {
    this.ReportsFormGroup = this._fb.group({
      Date_To: ["", Validators.required],
      txtFollowup_Details: ["", Validators.required],
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
