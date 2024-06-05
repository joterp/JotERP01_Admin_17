import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { TECHPMSJobStatusSFIListComponent } from './tech-pms-job-status-sfi-list/tech-pms-job-status-sfi-list.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TECHImportPMSDetailsComponent } from './tech-import-pms-details/tech-import-pms-details.component';
import { TECHRunningHoursHistoryComponent } from './tech-running-hours-history/tech-running-hours-history.component';
import { PURCAccountPayableGenerateLinkModalComponent } from '../../purc/purc-account-payable/purc-account-payable-generate-link-modal/purc-account-payable-generate-link-modal.component';
import { TECHMachineryDetailsComponent } from './tech-machinery-details/tech-machinery-details.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-pms-job-status',
  templateUrl: './tech-pms-job-status.component.html',
  styleUrls: ['./tech-pms-job-status.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHPMSJobStatusComponent implements OnInit {

  PMSJobStatusFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Value", visible: true, name: "Value" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Date", visible: true, name: "Date" },
    { property: "RHRS", visible: true, name: "RHRS" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog, private router:Router, private titleService:Title) {
    this.titleService.setTitle(`PMS Job Status`);

   }
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

        this.PMSJobStatusFilterForm = this.fb.group({
          drpVessel:[''],
          drpMachinery:[''],
          drpSub_Component:[''],
          txtJobCode:[''],
          drpFrequency_Type:[''],
          drpMaintenance_Type:[''],
          drpDepartment:[''],
          drpRank:[''],
          drpCMS_JOBS:[''],
          drpCritical_JOBS:[''],
          drpCritical_Machinery:[''],
          drpInfrequent_Use_Machinery:[''],
          drpVerified_Status:[''],
          drpOverdue_Status:[''],
          drpDeferment_Sent_To_Office:[''],
          drpIs_Actioned:[''],
          last_done_date_from:[''],
          last_done_date_to:[''],
          next_due_date_from:[''],
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

  OpenSFIsList(data: object) {
    const dialogRef = this.dialog.open(TECHPMSJobStatusSFIListComponent, {
      width: "45%",
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

  ImportPMS(data: object){
    const dialogRef = this.dialog.open(TECHImportPMSDetailsComponent, {
      width: "35%",
      height: "45%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

  ViewRunningHours(data: object){
    const dialogRef = this.dialog.open(TECHRunningHoursHistoryComponent, {
      width: "40%",
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

  ApproveDeferment(data: object){
    const dialogRef = this.dialog.open(PURCAccountPayableGenerateLinkModalComponent, {
      width: "30%",
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
  MachineryDetails(data: object){
    const dialogRef = this.dialog.open(TECHMachineryDetailsComponent, {
      width: "30%",
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
  SaveData(buttonName:string){
     if(buttonName === 'TECH_PMS_JobStatus_Edit'){
      this.router.navigate(['TECH/TECH_PMS_JobStatus_Edit'])
     } 
  }
  ViewJobHistory(buttonName:string){
  if(buttonName === 'TECH_PMS_JobHistory'){
    this.router.navigate(['TECH/TECH_PMS_JobHistory'])
   } 
  
}
}
