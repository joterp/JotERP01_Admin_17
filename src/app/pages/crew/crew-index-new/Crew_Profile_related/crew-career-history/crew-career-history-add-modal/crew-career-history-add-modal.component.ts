import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-career-history-add-modal',
  templateUrl: './crew-career-history-add-modal.component.html',
  styleUrls: ['./crew-career-history-add-modal.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CREWCareerHistoryAddModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  CareerHistoryFormGroup:UntypedFormGroup;
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWCareerHistoryAddModalComponent>) { }

  ngOnInit(): void {
    this.CareerHistoryFormGroup = this.fb.group({
      txtVessel_Owner:['', Validators.required],
      txtVessel_Manager:['', Validators.required],
      txtVessel_Charterers:[''],
      txtVessel_Name:['', Validators.required],
      drpVessel_Type:['', Validators.required],
      txtVessel_Flag:[''],
      txtVessel_DWT:[''],
      txtVessel_GRT:[''],
      txtVessel_TEU:[''],
      drpRank:[''],
      date_of_joining:['', Validators.required],
      date_of_signoff:['', Validators.required],
      date_keel_launched:[''],
      date_delivered:[''],
      txtShipyard_Name:[''],
      txtCargo_Capacity:[''],
      txtYear_Built:[''],
      txtSign_Off_Reason:['']
    })
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
