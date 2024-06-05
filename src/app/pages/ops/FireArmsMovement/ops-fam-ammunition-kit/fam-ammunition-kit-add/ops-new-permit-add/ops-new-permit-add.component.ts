import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-new-permit-add',
  templateUrl: './ops-new-permit-add.component.html',
  styleUrls: ['./ops-new-permit-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNewPermitAddComponent implements OnInit {
  IsEdit: boolean;
  PermitFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';
  constructor(private dialogRef: MatDialogRef<OPSNewPermitAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.PermitFormGroup = this._fb.group({
      txtPermit_Number: ["", Validators.required],
      drpCountry: ["", Validators.required],
      drpStatus: ["", Validators.required],
      txtQua_Rounds: [""],
      Date_Form: ["", Validators.required],
      Date_To: ["",Validators.required ],
      txtLoan_Remark: [""],
      
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
