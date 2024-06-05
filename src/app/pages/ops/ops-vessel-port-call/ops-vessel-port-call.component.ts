import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSVesselPortCallAddComponent } from './ops-vessel-port-call-add/ops-vessel-port-call-add.component';
import { OPSVesselPortCallCrewListComponent } from './ops-vessel-port-call-crew-list/ops-vessel-port-call-crew-list.component';
import { OPSAgencyPOComponent } from './ops-agency-po/ops-agency-po.component';
import { OPSVesselPortQuestionnaireComponent } from './ops-vessel-port-questionnaire/ops-vessel-port-questionnaire.component';
import { OPSVesselPortCallChecklistsComponent } from './ops-vessel-port-call-checklists/ops-vessel-port-call-checklists.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-vessel-port-call',
  templateUrl: './ops-vessel-port-call.component.html',
  styleUrls: ['./ops-vessel-port-call.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSVesselPortCallComponent implements OnInit {

  VesselPortCallFormGroup:UntypedFormGroup;

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Port", visible: true, name: "Port" },
    { property: "Voyage_Number", visible: true, name: "Voyage Number" },
    { property: "ETA", visible: true, name: "ETA" },
    { property: "ETB", visible: true, name: "ETB" },
    { property: "ETD", visible: true, name: "ETD" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Checklist", visible: true, name: "Checklist" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog) {

    this.titleService.setTitle(`Vessel Port Calls`);

   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  } 

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    
    this.VesselPortCallFormGroup = this.fb.group({
      drpCompany:[''],
      radioShow_Vessels:[''],
    })

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddVesselPortCall(data: object) {
    const dialogRef = this.dialog.open(OPSVesselPortCallAddComponent, {
      width: "50%",
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

  CrewList(data: object) {
    const dialogRef = this.dialog.open(OPSVesselPortCallCrewListComponent, {
      width: "50%",
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

  ViewAgency(data: object) {
    const dialogRef = this.dialog.open(OPSAgencyPOComponent, {
      width: "50%",
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

  VesselPortQue(data: object) {
    const dialogRef = this.dialog.open(OPSVesselPortQuestionnaireComponent, {
      width: "50%",
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
  
  ViewPortCallChecklists(data: object){
    const dialogRef = this.dialog.open(OPSVesselPortCallChecklistsComponent, {
      width: "60%",
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

