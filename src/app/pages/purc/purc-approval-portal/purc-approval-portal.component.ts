import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-purc-approval-portal',
  templateUrl: './purc-approval-portal.component.html',
  styleUrls: ['./purc-approval-portal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCApprovalPortalComponent implements OnInit {

  ApprovalPortalFilterForm:UntypedFormGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  approvalportalpopupcolumns: ListColumn[] = [
    { property: "Requisition#", visible: true, name: "Requisition #" },
    { property: "Rcvd_Date", visible: true, name: "Rcvd Date" },
    { property: "Qtn_Rcvd", visible: true, name: "Qtn Rcvd" },
    { property: "Pending_With", visible: true, name: "Pending With" },
  
  ] as ListColumn[];

  pageSize = 10;
  ApprovalPortalPopupdataSource:MatTableDataSource<any> | null;

  showSupplier:boolean=true;
  showVessel:boolean=false;

  constructor(private fb:UntypedFormBuilder,private sidenavService:SidenavService, private titleService:Title) {
    this.titleService.setTitle(`Approval Portal`);

   }

  get visibleColumnsapprovalportalpopup(){
    return this.approvalportalpopupcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.ApprovalPortalPopupdataSource = new MatTableDataSource();

    this.ApprovalPortalFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpSupplier:[''],
      txtReq_PO_Invoice:[''],
      drpPending_With:[''],
      drpApproval_Stage:[''],
      PO_From:[''],
      Invoice_Due_From:[''],
      Payment_Planned_From:[''],
      PO_From_To:[''],
      Invoice_Due_From_To:[''],
      Payment_Planned_From_To:['']

    })
  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.ApprovalPortalPopupdataSource.paginator = this.paginator;
    this.ApprovalPortalPopupdataSource.sort = this.sort;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  Supplier(){
   this.showSupplier = true;
   this.showVessel = false;
  }
  Vessel(){
    this.showVessel = true;
    this.showSupplier = false;
    
  }
}
