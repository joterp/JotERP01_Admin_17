import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSSelectSFIsComponent } from './ops-select-sfis/ops-select-sfis.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-add-reports-model',
  templateUrl: './ops-add-reports-model.component.html',
  styleUrls: ['./ops-add-reports-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSAddReportsModelComponent implements OnInit {
  IsEdit: boolean;
  ReportsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';
  constructor(private dialogRef: MatDialogRef<OPSAddReportsModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.ReportsFormGroup = this._fb.group({
      drpVessel_Name: ["", Validators.required],
      drpReport_Name: ["", Validators.required],
      Date_Form: ["", Validators.required],
      txtRef_Number: [""],
      drpSupplier_used: [""],
      drpVessel_Portcall: [""],
      txtVessel_Position: [""],
      txtTL_Name: [""],
      txtOther_Details: [""],
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
    OpenSelectSFIsList(data: object) {
      const dialogRef = this.dialog.open(OPSSelectSFIsComponent, {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
      });
      // dialogRef.componentInstance.EditData = data;
  
      dialogRef.afterClosed().subscribe((data: any) => {
        if (data) {
          // this.onClickSubmit(this.filterFormGroup.value);
        }
      });
    }

}
