import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { validate } from 'uuid';

@Component({
  selector: 'fury-ops-nad-add-arrival-report',
  templateUrl: './ops-nad-add-arrival-report.component.html',
  styleUrls: ['./ops-nad-add-arrival-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADAddArrivalReportComponent implements OnInit {
  
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport; 

  ArrivalReportFormGroup:UntypedFormGroup;

  selectedFileNameAttach: string = '';
  constructor(private titleService:Title, private router:Router, private fb:UntypedFormBuilder, private sidenavService:SidenavService) { 
    this.titleService.setTitle(`Arrival Report Details`);
  }

  ngOnInit(): void {
    this.ArrivalReportFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      Arrival_Report_Date:['', Validators.required],
      txtType:[''],
      drpVoyage_Number:['', Validators.required],
      drpVessel_Cargo_Status:['', Validators.required],
      drpArrival_Port:['', Validators.required],
      drpUTC:['', Validators.required],
      txtDraft:['', Validators.required],
      txtWater_Density:[''],
      radioEU_MRV:[''],
      radioBunkering:[''],
      radioPre_Bunker:[''],
      date_EOSP:['', Validators.required],
      EOSP_Latitude:['', Validators.required],
      EOSP_Longitude:['', Validators.required],
      date_Anchored:[''],
      txtAnchorage_No:[''],
      txtReasons_for_Anchoring:[''],
      date_Let_go_Anchor:[''],
      date_Commence_Having_Anchor:[''],
      date_Anchor_Aweigh:[''],
      txtAnchor_position_Latitude:[''],
      txtAnchor_Position_Longitude:[''],
      date_FWE:['',Validators.required],
      date_SBE:['', Validators.required],
      date_POB:[''],
      date_First_line_ashore:[''],
      date_All_made_fast:[''],
      date_NOR:[''],
      date_ETB:[''],
      date_ETD:[''],
      drpMeasure_Fuel_Oil_Consumption:['', Validators.required]

    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
   
  }

  CancelForm(){
    this.router.navigate(['OPS/NAD/OPS_NAD_Index']);
  }
  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }	
  
  onFileSelectedattach(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameAttach = inputElement.files[0].name;
    } else {
      this.selectedFileNameAttach = '';
    }
  }
  removeUploadedFileattach(): void {
    this.selectedFileNameAttach = null; // Reset the selectedFileNameAttach
  }
}
