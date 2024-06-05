import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-event-planning-index',
  templateUrl: './crew-event-planning-index.component.html',
  styleUrls: ['./crew-event-planning-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWEventPlanningIndexComponent implements OnInit {

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  
  pageSize = 10;
  
  EventPlanningcolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Event_Date", visible: true, name: "Event Date" },
    { property: "Port", visible: true, name: "Port" },
    { property: "ETA", visible: true, name: "ETA" },
    { property: "ETB", visible: true, name: "ETB" },
    { property: "ETD", visible: true, name: "ETD" },

  ] as ListColumn[];

  VesselAssigndonecolumns: ListColumn[] = [
    { property: "Signing_Off_Staff_Code", visible: true, name: "Staff Code" },
    { property: "Signing_Off_Staff_Name", visible: true, name: "Staff Name" },
    { property: "Signing_Off_Rank", visible: true, name: "Rank" },
    { property: "Signing_Off_Vessel", visible: true, name: "Vessel" },
    { property: "Signing_Off_Actual_EOC", visible: true, name: "Actual EOC" },
    { property: "Joining_Staff_Code", visible: true, name: "Staff Code" },
    { property: "Joining_Staff_Name", visible: true, name: "Staff Name" },
    { property: "Joining_Off_Rank", visible: true, name: "Rank" },
    { property: "Joining_Off_Blank", visible: true, name: "" },
    { property: "Joining_Off_Vessel", visible: true, name: "Vessel" },
    { property: "Joining_Off_Available_Date", visible: true, name: "Available Date" },

  ] as ListColumn[];

  Portcallcolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Port_Name", visible: true, name: "Port Name" },
    { property: "ETA", visible: true, name: "ETA" },
    { property: "ETB", visible: true, name: "VessETBel" },
    { property: "ETD", visible: true, name: "ETD" },
    { property: "Select", visible: true, name: "Select" },
    { property: "Info", visible: true, name: "" },

  ] as ListColumn[];

  PlannedEventscolumns: ListColumn[] = [

    { property: "Signing_Off_Staff_Code", visible: true, name: "Staff Code" },
    { property: "Signing_Off_blank", visible: true, name: "" },
    { property: "Signing_Off_Staff_Name", visible: true, name: "Staff Name" },
    { property: "Signing_Off_Rank", visible: true, name: "Rank" },
    { property: "Signing_Off_Vessel", visible: true, name: "Vessel" },
    { property: "Signing_Off_Actual_EOC", visible: true, name: "Actual EOC" },
    { property: "Joining_Staff_Code", visible: true, name: "Staff Code" },
    { property: "Joining_Staff_blank1", visible: true, name: "" },
    { property: "Joining_Staff_Name", visible: true, name: "Staff Name" },
    { property: "Joining_Staff_blank2", visible: true, name: "" },
    { property: "Joining_Off_Rank", visible: true, name: "Rank" },
    { property: "Joining_Off_Vessel", visible: true, name: "Vessel" },
    { property: "Joining_Off_Available_Date", visible: true, name: "Available Date" },
    { property: "Joining_Off_blank3", visible: true, name: "" },
    { property: "Joining_Off_blank4", visible: true, name: "" },
    { property: "Joining_Off_blank5", visible: true, name: "" },


  ] as ListColumn[];

  EventPlanningdataSource: MatTableDataSource<any> | null;
  VesselAssignDonedataSource: MatTableDataSource<any> | null;			
  PortcalldataSource: MatTableDataSource<any> | null;		
  PlannedEventsdataSource: MatTableDataSource<any> | null;		
  
  constructor(private sidenavService:SidenavService, private titleService:Title) {
    this.titleService.setTitle(`Event Planning`);
   }
  
   get visibleColumnsEventPlanning() {
    return this.EventPlanningcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsVesselAssignDone() {
    return this.VesselAssigndonecolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsPortcall() {
    return this.Portcallcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsPlannedEvents() {
    return this.PlannedEventscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.EventPlanningdataSource = new MatTableDataSource(); 
    this.VesselAssignDonedataSource = new MatTableDataSource();
    this.PortcalldataSource = new MatTableDataSource();
    this.PlannedEventsdataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
