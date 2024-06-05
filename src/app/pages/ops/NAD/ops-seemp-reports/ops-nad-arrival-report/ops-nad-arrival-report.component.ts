import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSNADBunkerCostsAddComponent } from '../../ops-nad-bunker-costs/ops-nad-bunker-costs-add/ops-nad-bunker-costs-add.component';
import { OPSBunkerROBsModalComponent } from './ops-bunker-robs-modal/ops-bunker-robs-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-nad-arrival-report',
  templateUrl: './ops-nad-arrival-report.component.html',
  styleUrls: ['./ops-nad-arrival-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADArrivalReportComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport; 

  ArrivalReportVesselFormGroup:UntypedFormGroup;

  selectedFileNameAttach: string = '';

  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private titleService:Title, private dialog:MatDialog) {
    this.titleService.setTitle(`Arrival Report`);
   }

  ngOnInit(): void {
    this.ArrivalReportVesselFormGroup = this.fb.group({
      Arrival_Report_Date:['', Validators.required],
      txtType:[''],
      txtVoyage_Number:['', Validators.required],
      txtVessel_Cargo_status:['', Validators.required],
      txtArrival_Port_Name:['', Validators.required],
      txtUTC:['', Validators.required],
      txtDraft:['', Validators.required],
      txtWater_Density:[''],
      txtEU_MRV:[''],
      txtEOSP:['', Validators.required],
      txtEOSP_Latitude:['', Validators.required],  
      txtAnchored:[''],
      txtAnchorage_No:[''],
      txtReasons_for_Anchoring:[''],
	    txtEOSP_Longitude:[''],
      txtLet_go_Anchor:[''],
      txtCommence_Having_Anchor:[''],
      txtAnchor_Aweigh:[''],
      txtAnchor_position_Latitude:[''],
      txtAnchor_Position_Longitude:[''],
      txtFWE:['',Validators.required],
      txtSBE:['', Validators.required],
      txtPOB:[''],
	    txtFirst_line_ashore:[''],
      txtAll_made_fast:[''],
      txtNOR:[''],
      txtETB:[''],
      txtETD:[''],
  })
}

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }


  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }	

  ViewBunkerROBs(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSBunkerROBsModalComponent, {
      width: "45%",
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
