import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-ops-nad-add-monoevering',
  templateUrl: './ops-nad-add-monoevering.component.html',
  styleUrls: ['./ops-nad-add-monoevering.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADAddMonoeveringComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport; 

  selectedFileNameAttach: string = '';
  
  ManoeuveringReportFormGroup:UntypedFormGroup;
  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private router:Router) { 
    this.titleService.setTitle(`Monoevering Report Details`);
  }

  ngOnInit(): void {
    this.ManoeuveringReportFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      date_Manoeuvering_Report:['', Validators.required],
      txtType:[''],
      drpVoyage_Number:[''],
      drpVessel_Cargo_Status:['', Validators.required],
      drpUTC:[''],
      txtDraft:[''],
      date_SBE:['', Validators.required],
      radioEU_MRV:[''],

      drpArrival_Port:[''],
      date_ESP:['', Validators.required],
      date_Let_go_Anchor:[''],
      date_Anchored:[''],
      txtAverage_No:[''],
      txtAnchor_position_Latitude:[''],
      txtAnchor_position_Longitude:[''],
      txtReasons_for_Anchoring:[''],
      date_ETB:[''],
      date_first_line_ashore:[''],
      date_All_made_fast:[''],
      date_FWE:[''],
      date_NOR_tendered:[''],
      picker_date_ETD:[''],
      date_Pilot_On_board:[''],
      date_All_cast_off:[''],
      date_Commence_Having_Anchor:[''],
      date_COP:[''],
      date_Anchor_Aweigh:[''],
      txtDistance_to_go:[''],
      drpDeparture_Port:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
   
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

  CancelForm(){
    this.router.navigate(['OPS/NAD/OPS_NAD_Index']);
  }


}
