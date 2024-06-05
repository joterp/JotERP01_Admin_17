import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { TECHAddPMSFolloupModalComponent } from '../../tech-pms-job-status/tech-add-pms-folloup-modal/tech-add-pms-folloup-modal.component';

import { TECHMailDefectModalComponent } from '../tech-mail-defect-modal/tech-mail-defect-modal.component';
import { TECHSendMailModalComponent } from '../tech-send-mail-modal/tech-send-mail-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-defect-list-index-edit',
  templateUrl: './tech-defect-list-index-edit.component.html',
  styleUrls: ['./tech-defect-list-index-edit.component.scss']
})
export class TECHDefectListIndexEditComponent implements OnInit {

  panelOpenState = false;
  DefectListEditFormGroup:UntypedFormGroup;
  pageSize=10;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  followupcolumns: ListColumn[] = [
    { property: "Followup_On", visible: true, name: "Followup On" },
    { property: "By", visible: true, name: "By" },
    { property: "Follow_Up", visible: true, name: "Follow_Up" },  
  
  ] as ListColumn[];
  
   FollowupdataSource:MatTableDataSource<any> | null;

  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder, private dialog:MatDialog) {
    this.titleService.setTitle(`Defect List Details`);
   }
   get visibleColumnsFolloup(){
    return this.followupcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.FollowupdataSource = new MatTableDataSource();

     this.DefectListEditFormGroup = this.fb.group({
      date_raised:['', Validators.required],
      drpPriority:['', Validators.required],
      drpPrimary:['', Validators.required],
      drpSecondary:['', Validators.required],
      exptd_completion_date:['', Validators.required],
      drpAssigned_By:['', Validators.required], 
      date_completed:[''],
      drpRequisition_Code:[''],
      drpVessel_Dept:['', Validators.required], 
      chkAwaiting_Office_Action:[''],
      drpQMS_Elements_Ref:[''],
      drpOffice_Dept:[''],
      drpPotential_Offhire:[''],
      drpLocation:[''],
      drpEstimated_Cost:[''],
      txtdrpEstimated_Cost_No:['54.00'],
      chkshow_third_parties:[''],
      drpPIC:[''],
      chkPIC_Private:[''],
      chkDisplay_In_Meetings:['']
     })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
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

  SendMail(data: object) {
    const dialogRef = this.dialog.open(TECHSendMailModalComponent, {
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
