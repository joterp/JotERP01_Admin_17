import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-ops-nad-add-departure-report',
  templateUrl: './ops-nad-add-departure-report.component.html',
  styleUrls: ['./ops-nad-add-departure-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADAddDepartureReportComponent implements OnInit {

  DepartureReportFormGroup:UntypedFormGroup;

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport; 

  constructor(private titleService:Title, private sidenavService:SidenavService, private router:Router, private fb:UntypedFormBuilder) { 
    this.titleService.setTitle(`Departure Report Details`);
  }

  ngOnInit(): void {
   this.DepartureReportFormGroup = this.fb.group({
    drpVessel:['', Validators.required],
    Departure_Report_Date:['', Validators.required],
    txtType:[''],
    drpVoyage_Number:['', Validators.required],
    drpVessel_Cargo_Status:['', Validators.required],
    drpDeparture_Port:['', Validators.required],
    drpUTC:['', Validators.required],
    drpNext_Port:['', Validators.required],
    date_ETA_Next_Port:['', Validators.required],
    txtDistance_to_go:['', Validators.required],
    txtInstructed_Speed:['', Validators.required],
    date_SBE:['', Validators.required],
    date_Pilot_On_Board:['', Validators.required],
    date_All_cast_off:['', Validators.required],
    date_DOP:['', Validators.required],
    date_COP:['', Validators.required],
    txtCargo_Loaded_Ships_figs:[''],
    txtCargo_Loaded_Shore_figs:[''],
    txtDiff_betw_ShipShore_figs:[''],
    txtTotal_Cargo_Onboard:['', Validators.required],
    txtCargo_Discharged_Ships_figs:[''],
    txtCargo_Discharged_Shore_figs:[''],

    txtCargo_Reefers_Onboard:[''],
    txtCargo_Damaged:[''],
    txtReasons_for_Cargo_damage:[''],
    radioHeavy_Oil:[''],
	  radioDiesel_Oil:[''],
	  radioLube_Oil:[''],
	  radioOffland_Report_Create:[''],

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

  CancelForm(){
    this.router.navigate(['OPS/NAD/OPS_NAD_Index']);
  }

}
