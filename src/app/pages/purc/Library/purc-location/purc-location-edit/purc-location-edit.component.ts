import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TECHPMSJobStatusSFIListComponent } from 'src/app/pages/tech/tech-pms-job-status/tech-pms-job-status-sfi-list/tech-pms-job-status-sfi-list.component';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PurcLocationSFIListComponent } from '../purc-location-sfi-list/purc-location-sfi-list.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-location-edit',
  templateUrl: './purc-location-edit.component.html',
  styleUrls: ['./purc-location-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCLocationEditComponent implements OnInit {
  IsEdit: boolean;
  locationFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<PURCLocationEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,private dialog:MatDialog,

 @Inject (MAT_DIALOG_DATA) public data:any) {  this.locationFormGroup = this._fb.group({ 
  txtLocation: ["", Validators.required],
 


});
}

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  OpenSFIsList(data: object) {
    const dialogRef = this.dialog.open(PurcLocationSFIListComponent, {
      width: "45%",
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
