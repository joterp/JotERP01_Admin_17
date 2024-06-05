import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-ops-nad-index',
  templateUrl: './ops-nad-index.component.html',
  styleUrls: ['./ops-nad-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADIndexComponent implements OnInit {

  NADIndexFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  nadindexcolumns: ListColumn[] = [
    { property: "Current", visible: true, name: "Current" },
    { property: "Next", visible: true, name: "Next" },
    { property: "Instructed_Knts", visible: true, name: "Instructed (Knts)" },
    { property: "Average_Knts", visible: true, name: "Average (Knts)" },
	{ property: "HO", visible: true, name: "HO (MT)" },
	{ property: "DO", visible: true, name: "DO (MT)" },
	{ property: "MGO", visible: true, name: "MGO (MT)" },
    { property: "THO", visible: true, name: "THO (Ltrs)" },
	{ property: "FW", visible: true, name: "FW (MT)" },
	{ property: "MECC", visible: true, name: "MECC (Ltrs)" },
	{ property: "MECYL", visible: true, name: "MECYL (Ltrs)" },
	{ property: "AECC", visible: true, name: "AECC (Ltrs)" },	
	{ property: "CO2_Emission", visible: true, name: "CO2 Emission (MT)" },
    { property: "EEOI", visible: true, name: "EEOI" },
	{ property: "AER", visible: true, name: "AER" },
	{ property: "ME", visible: true, name: "ME" },
	{ property: "SG", visible: true, name: "SG" },
	{ property: "BLR", visible: true, name: "BLR" },
	{ property: "AE", visible: true, name: "AE" },
	
  ] as ListColumn[];
  nadindex_2columns: ListColumn[] = [
    { property: "AE1", visible: true, name: "AE1" },
    { property: "AE2", visible: true, name: "AE2" },
    { property: "AE3", visible: true, name: "AE3" },
    { property: "AE4", visible: true, name: "AE4" },
	
  ] as ListColumn[];
  pageSize = 10;
  NADIndexdataSource: MatTableDataSource<any> | null;
  
  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private router:Router) {
    this.titleService.setTitle(`Noon, Arrival and Departure Report Index`);
   }

   get visibleColumnsNADIndex() {
    return this.nadindexcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsNADIndex_2() {
    return this.nadindex_2columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.NADIndexdataSource = new MatTableDataSource();

    this.NADIndexFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpVoyage:[''],
      drpCargo_State:[''],
      Report_Date:[''],
      drpLocation:[''],
      drpNAD_Type:[''],
      Report_Date_To:[''],
      txtInstructed_Speed:[''],
      txtAverage_Speed:[''],
      txtWind_Force:[''],
      txtInstructed_Speed_To:[''],
      txtAverage_Speed_To:[''],
      txtWind_Force_To:[''],
      drpHO:[''],
      drpDO:[''],
      drpFW:[''],
      
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    this.NADIndexdataSource.paginator = this.paginator;
    this.NADIndexdataSource.sort = this.sort;
  }

  gotoPOS_AddArrival(buttonName:string){
    if(buttonName === 'OPS_NAD_Add_ArrivalReport'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Add_ArrivalReport']);
     }
  }
  gotoPOS_AddDeparture(buttonName:string){
    if(buttonName === 'OPS_NAD_Add_DepartureReport'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Add_DepartureReport']);
     }
  }
  gotoPOS_Add_DailyNoonReport(buttonName:string){
    if(buttonName === 'OPS_NAD_Add_DailyNoonReport'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Add_DailyNoonReport']);
     }
  }
  gotoPOS_Add_DailyNoonReport_Anchorage(buttonName:string){
    if(buttonName === 'OPS_NAD_Add_DailyNoonReport_Anchorage'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Add_DailyNoonReport_Anchorage']);
     }
  }

  gotoPOS_Add_DailyNoonReport_Alongside(buttonName:string){
    if(buttonName === 'OPS_NAD_Add_DailyNoonReport_Alongside'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Add_DailyNoonReport_Alongside']);
     }
  }

  gotoPOS_Add_Monoevering(buttonName:string){
    if(buttonName === 'OPS_NAD_Add_Monoevering'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Add_Monoevering']);
     }
  }


}
