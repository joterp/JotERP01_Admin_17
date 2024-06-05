import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-vessel-assignment',
  templateUrl: './crew-vessel-assignment.component.html',
  styleUrls: ['./crew-vessel-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWVesselAssignmentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  
  pageSize = 10;
  
  VesselAssignOnboardcolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Current_Vessel", visible: true, name: "Current Vessel" },
    { property: "EOC", visible: true, name: "EOC" },
    { property: "Select", visible: true, name: "Select" },

  ] as ListColumn[];

  VesselAssignAshorecolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Current_Vessel", visible: true, name: "Current Vessel" },
    { property: "EOC", visible: true, name: "EOC" },
    { property: "Select", visible: true, name: "Select" },

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

  VesselAssignOnboarddataSource: MatTableDataSource<any> | null;
  VesselAssignAshoredataSource: MatTableDataSource<any> | null;
  PlannedEventsdataSource: MatTableDataSource<any> | null;	

  VesselAssignmentOnboardFilterForm:UntypedFormGroup;
  VesselAssignmentAshoreFilterForm:UntypedFormGroup;

  JoiningRankFormGroup:UntypedFormGroup;

  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(`Vessel Assignment`);
   }

   get visibleColumnsVesselAssignOnboard() {
    return this.VesselAssignOnboardcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsVesselAssignAshore() {
    return this.VesselAssignAshorecolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsPlannedEvents() {
    return this.PlannedEventscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.VesselAssignOnboarddataSource = new MatTableDataSource(); 
    this.VesselAssignAshoredataSource = new MatTableDataSource();
    this.PlannedEventsdataSource = new MatTableDataSource(); 

       this.VesselAssignmentOnboardFilterForm = this.fb.group({
        txtSearch_Staff_Code:[''],
        txtSearch_Staff_Name:[''],
        drpSearch_Rank:[''],
        drpAll_Items_Checked:[''],
        date_Before:['']
       });

       this.VesselAssignmentAshoreFilterForm = this.fb.group({
        txtSearch_Staff_Code:[''],
        txtSearch_Staff_Name:[''],
        drpSearch_Rank:[''],
        drpAll_Items_Checked:[''],
        drpSearch_Stage:[''],
        date_Before:[''],
        radio_Onboard_Ashore:[''],
        chkShow_Images:['']
       })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
