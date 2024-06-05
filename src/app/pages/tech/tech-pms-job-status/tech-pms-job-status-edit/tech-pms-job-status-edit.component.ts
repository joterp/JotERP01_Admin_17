import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { EditorChangeContent, EditorChangeSelection } from "ngx-quill";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatPaginator } from '@angular/material/paginator';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';


import { PURCNewRequisitionEditComponent } from 'src/app/pages/purc/purc-new-index/purc-new-requisition-edit/purc-new-requisition-edit.component';
import { TECHAddPMSFolloupModalComponent } from '../tech-add-pms-folloup-modal/tech-add-pms-folloup-modal.component';
import { TECHAddAttachmentsComponent } from '../tech-add-attachments/tech-add-attachments.component';
import { TECHEditSparePartItemComponent } from '../tech-edit-spare-part-item/tech-edit-spare-part-item.component';
import { TECHAddSparePartsComponent } from '../tech-add-spare-parts/tech-add-spare-parts.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-tech-pms-job-status-edit',
  templateUrl: './tech-pms-job-status-edit.component.html',
  styleUrls: ['./tech-pms-job-status-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TECHPMSJobStatusEditComponent implements OnInit {

  routeTitle: string = '';
  stringHtml: string = null;
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;
  pageSize=10;

  sparepartsdocumentscolumns:ListColumn[] = [
    { property: "SubComponent", visible: true, name: "SubComponent" },
    { property: "Drawing_No", visible: true, name: "Drawing No" },
    { property: "Part_No", visible: true, name: "Part No" },
    { property: "Item_Description", visible: true, name: "Item Description" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "Current_ROBs", visible: true, name: "Current ROBs" },
    { property: "Qty_Required", visible: true, name: "Qty_Required" },
    { property: "Check", visible: true, name: "Check" },
  ] as ListColumn[];

   attachmentscolumns: ListColumn[] = [
    { property: "Attachment", visible: true, name: "Attachment" },
    { property: "Action", visible: true, name: "Action" },
    
  ] as ListColumn[];

  spareconsumedcolumns: ListColumn[] = [
    { property: "SubComponent", visible: true, name: "SubComponent" },
    { property: "Drawing_No", visible: true, name: "Drawing No" },
    { property: "Part_No", visible: true, name: "Part_No" },
    { property: "Description", visible: true, name: "Description" },
    { property: "Opening_ROB", visible: true, name: "Opening ROB" },
    { property: "Consumed", visible: true, name: "Consumed" },
    { property: "Closing_ROB", visible: true, name: "Closing ROB" },
    { property: "Remarks", visible: true, name: "Remarks" },
    { property: "Action", visible: true, name: "Action" },
    
  ] as ListColumn[];

  linkedformscolumns: ListColumn[] = [
    { property: "Linked_Forms", visible: true, name: "Linked Forms" },
    { property: "Is_Mandatory", visible: true, name: "Is Mandatory" },
    { property: "Upload_Forms", visible: true, name: "Upload Forms" },
    
  ] as ListColumn[];

  resourcescolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Staff_Rank", visible: true, name: "Staff Rank" },
    { property: "Stipilated_Man-Hours", visible: true, name: "Stipilated Man-Hours" },
    { property: "Man-Hours", visible: true, name: "Man-Hours" },
    { property: "Remarks", visible: true, name: "Remarks" },
    
  ] as ListColumn[];

  deferhistorycolumns: ListColumn[] = [
    { property: "Modify_Next_Due_Date_To", visible: true, name: "Modify Next Due Date To" },
    { property: "Requested_Remarks", visible: true, name: "Requested Remarks" },
    { property: "Is_Verified", visible: true, name: "Is Verified" },
    { property: "Is_Actioned", visible: true, name: "Is_Actioned" },
    { property: "Actioned_By", visible: true, name: "Actioned_By" },
    { property: "Actioned_On", visible: true, name: "Actioned_On" },
    { property: "Deferment_Approve_Date", visible: true, name: "Deferment Approve Date" },
    { property: "Actioned_Remarks", visible: true, name: "Actioned Remarks" },
    
  ] as ListColumn[];

  jobhistorycolumns: ListColumn[] = [
    { property: "Date", visible: true, name: "Date" },
    { property: "RHRS", visible: true, name: "RHRS" },
    { property: "Value", visible: true, name: "Value" },
    { property: "Type", visible: true, name: "Type" },
  
  ] as ListColumn[];

  followupcolumns: ListColumn[] = [
    { property: "Followup_On", visible: true, name: "Followup On" },
    { property: "By", visible: true, name: "By" },
    { property: "Follow_Up", visible: true, name: "Follow_Up" },
   
  
  ] as ListColumn[];

  SparePartsdataSource:MatTableDataSource<any> | null; 
  AttachmentsdataSource: MatTableDataSource<any> | null;
  SpareConsumeddataSource: MatTableDataSource<any> | null;
  LinkedFormsdataSource: MatTableDataSource<any> | null;
  ResourcesdataSource: MatTableDataSource<any> | null;
  DeferHistorydataSource: MatTableDataSource<any> | null;
  JobHistorydataSource:MatTableDataSource<any> | null;
  FollowupdataSource:MatTableDataSource<any> | null;

  constructor(private sidenavService: SidenavService, private titleService: Title, private dialog:MatDialog, ) {
    this.titleService.setTitle(`PMS Job Details`);
  }
  get visibleColumnsSpareParts(){
    return this.sparepartsdocumentscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsAttachments() {
    return this.attachmentscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsSpareConsumed() {
    return this.spareconsumedcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsLinkedForms() {
    return this.linkedformscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsResources() {
    return this.resourcescolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsDeferHistory() {
    return this.deferhistorycolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsjobhistory(){
    return this.jobhistorycolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsFolloup(){
    return this.followupcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  ngOnInit(): void {
    this.SparePartsdataSource = new MatTableDataSource();
    this.AttachmentsdataSource = new MatTableDataSource();
    this.SpareConsumeddataSource = new MatTableDataSource();
    this.LinkedFormsdataSource = new MatTableDataSource();
    this.ResourcesdataSource = new MatTableDataSource();
    this.DeferHistorydataSource = new MatTableDataSource();
    this.JobHistorydataSource = new MatTableDataSource();
    this.FollowupdataSource = new MatTableDataSource();

    this.routeTitle = this.titleService.getTitle();
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.FollowupdataSource.paginator = this.paginator;
    this.FollowupdataSource.sort = this.sort;

  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  created(event: any) {
    console.log(event);

    if (this.stringHtml != null) {
      event.root.innerHTML = this.stringHtml;
    }
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

  contentChanged(obj: any) {
    this.stringHtml = obj.html;
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

  CreateNewRequisition(data: object) {
    const dialogRef = this.dialog.open(PURCNewRequisitionEditComponent, {
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

AddAttachments(data: object){
  const dialogRef = this.dialog.open(TECHAddAttachmentsComponent, {
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
EditSparePartItem(data: object){
  const dialogRef = this.dialog.open(TECHEditSparePartItemComponent, {
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

AddSpareParts(data: object) {
  const dialogRef = this.dialog.open(TECHAddSparePartsComponent, {
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
}
