import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { TECHPMSJobStatusSFIListComponent } from '../tech-pms-job-status/tech-pms-job-status-sfi-list/tech-pms-job-status-sfi-list.component';

import { MatPaginator } from '@angular/material/paginator';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';

import { TECHDefectListIndexAddComponent } from './tech-defect-list-index-add/tech-defect-list-index-add.component';
import { Router } from '@angular/router';
import { TECHMailDefectModalComponent } from './tech-mail-defect-modal/tech-mail-defect-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-defect-list-index',
  templateUrl: './tech-defect-list-index.component.html',
  styleUrls: ['./tech-defect-list-index.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHDefectListIndexComponent implements OnInit {

  panelOpenState = false;
  DefectListFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vsl", visible: true, name: "Vsl" },
    { property: "Office", visible: true, name: "Office" },
    
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog,private router:Router) {

    this.titleService.setTitle(`Defect List`);
   }
   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

     this.DefectListFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      txtDescription:[''],
      txtDefect_List:[''],
      txtModified_In_Last:[''],
      drpAssigned:[''],
      drpDefect_Status:[''],
      drpVerified_Status:[''],
      drpDepartment_Office:[''],
      drpDepartment_Vessel:[''],
      drpPrimary_Cat:[''],
      drpSecondary_Cat:[''],
      drpInspector:[''],
      drpPIC:[''],
      drpInspection:[''],
      drpDefect_Type:[''],
      drpPriority:[''],
      chkDefect_Deferred:[''],
      chkDefect_Sent:[''],
      chkDaily_Meeting_Jobs:[''],
      chkAawating_Office_Action:[''],
      Raised_On:[''],
      ETC:[''],
      Completed:[''],
      Verified_On:[''],
      Raised_To:[''],
      ETC_TO:[''],
      Completedto:[''],
      Verified_To:[''],
      drpReports:['']
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

  AddNewDefect(data: object, modeltitle: string, modeltype: string) {
    const dialogRef = this.dialog.open(TECHDefectListIndexAddComponent, {
      width: "60%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
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

  
  OpenMailDefect(data: object) {
    const dialogRef = this.dialog.open(TECHMailDefectModalComponent, {
      width: "55%",
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

  gotoTECH_DefectList_Details(buttonName:string){
    if(buttonName === 'TECHDefectListIndividual'){
      this.router.navigate(['TECH/TECH_DefectList_Individual']);
  }
  }

}
