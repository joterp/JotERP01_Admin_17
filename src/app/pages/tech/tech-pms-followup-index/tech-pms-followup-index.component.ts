import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { TECHAddPMSFolloupModalComponent } from '../tech-pms-job-status/tech-add-pms-folloup-modal/tech-add-pms-folloup-modal.component';
import { Title } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-pms-followup-index',
  templateUrl: './tech-pms-followup-index.component.html',
  styleUrls: ['./tech-pms-followup-index.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHPMSFollowupIndexComponent implements OnInit {

  showFiller = false;
  showfollowupdetails:boolean=false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Machinery", visible: true, name: "Machinery" },
    { property: "SubComponent", visible: true, name: "SubComponent" },
    { property: "Job_Code", visible: true, name: "Job Code" },
    { property: "Job_Title", visible: true, name: "JJob Title" },
    { property: "Followup_On", visible: true, name: "Folloup On" },
    { property: "By", visible: true, name: "By" },
    { property: "Followup_Details", visible: true, name: "Followup Details" },
 
  ] as ListColumn[];

  followupcolumns: ListColumn[] = [
    { property: "Followup_On", visible: true, name: "Followup On" },
    { property: "By", visible: true, name: "By" },
    { property: "Follow_Up", visible: true, name: "Follow_Up" },  
  
  ] as ListColumn[];

  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  FollowupdataSource:MatTableDataSource<any> | null;
  PMSFollowupIndexFilterForm:UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog, private titleService:Title) {
    this.titleService.setTitle(`PMS Followup`);
   }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsFolloup(){
    return this.followupcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();
    this.FollowupdataSource = new MatTableDataSource();

    this.PMSFollowupIndexFilterForm = this.fb.group({
            drpVessel:[''],
            txtJob_Code:[''],
            drpMachinery:[''],
            drpDepartment:[''],
            drpRank:['']
    })
  
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.FollowupdataSource.paginator = this.paginator;
    this.FollowupdataSource.sort = this.sort;

  }
  
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFollowup(data: object){
    const dialogRef = this.dialog.open(TECHAddPMSFolloupModalComponent, {
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


  Followup(){
    this.showfollowupdetails = true;
  }
}
