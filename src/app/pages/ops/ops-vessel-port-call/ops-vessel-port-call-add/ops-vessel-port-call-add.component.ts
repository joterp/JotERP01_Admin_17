import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { OPSVOYAGECPLIBRARYEditComponent } from '../../ops-voyage-cp-library/ops-voyage-cp-library-edit/ops-voyage-cp-library-edit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-vessel-port-call-add',
  templateUrl: './ops-vessel-port-call-add.component.html',
  styleUrls: ['./ops-vessel-port-call-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSVesselPortCallAddComponent implements OnInit {

  AddVesselPortCallFormGroup:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSVesselPortCallAddComponent>, private dialog:MatDialog) { }

  ngOnInit(): void {
      this.AddVesselPortCallFormGroup = this.fb.group({
          drpPort:['', Validators.required],
          txtVoyage_Number:[''],
          ETA:['', Validators.required],
          chkTBA_1:[''],
          ETB:[''],
          chkTBA_2:[''],
          chkTBA_3:[''],
          ETD:[''],
          chkTBA_4:[''],
          chkTBA_5:[''],
          drpAgent_Type:[''],
          drpAgent:[''],
          txtRemarks:['']
      })
  }
 CloseModal() {
    this.dialogRef.close(true);
  }

  AddVesselPortCallModal(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSVOYAGECPLIBRARYEditComponent, {
      width: "50%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
     dialogRef.componentInstance.modeltitle = modeltitle;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }
}
