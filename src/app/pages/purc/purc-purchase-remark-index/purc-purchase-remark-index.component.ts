import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { PURCRequisitionModalComponent } from './purc-requisition-modal/purc-requisition-modal.component';
import { Title } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-purc-purchase-remark-index',
  templateUrl: './purc-purchase-remark-index.component.html',
  styleUrls: ['./purc-purchase-remark-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCPurchaseRemarkIndexComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  purchasefollowupindexcolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Stage", visible: true, name: "Stage" },
    { property: "Pending_With", visible: true, name: "Pending With" },
    { property: "Remark_Date", visible: true, name: "Remark Date" },
    { property: "Remark_By", visible: true, name: "Remark By" },
    { property: "Followup_Remarks", visible: true, name: "Followup Remarks" },
    { property: "Show_To_Supplier", visible: true, name: "Show To Supplier" },
    { property: "Requisition_Date", visible: true, name: "Requisition Date" },
    { property: "Requisition#", visible: true, name: "Requisition #" },
    { property: "Qtn_Rcvd", visible: true, name: "Qtn Rcvd" },
    { property: "PO_Date", visible: true, name: "PO Date" },
    { property: "PO#", visible: true, name: "PO #" },
    { property: "Invoice_Date", visible: true, name: "Invoice Date" },
    { property: "Invoice#", visible: true, name: "Invoice #" },
    { property: "Invoice_Type", visible: true, name: "Invoice_Type/Status" },
 
  ] as ListColumn[];
  pageSize = 10;
  PurchaseFollowIndexdataSource: MatTableDataSource<any> | null;
  PurchaseFollowIndexFilterForm:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private sidenavService:SidenavService,private dialog:MatDialog,private titleService:Title) {
    this.titleService.setTitle(`Purchase Followup Index`);

   }

  get visibleColumnsPurchaseFollowIndex () {
    return this.purchasefollowupindexcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

      this.PurchaseFollowIndexdataSource = new MatTableDataSource();
      this.PurchaseFollowIndexFilterForm = this.fb.group({
        drpVessel:[''],
        txtRequisition_PO_Invoice:[''],
        radioShow_To_Supplier:[''],
        radioPending_With:[''],
        requisition_date:[''],
        PO_date_from:[''],
        invoice_date_from:[''],
        requisition_date_to:[''],
        remark_date_to:[''],
        PO_date_to:[''],
        invoice_date_to:['']
      })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    this.PurchaseFollowIndexdataSource.paginator = this.paginator;
    this.PurchaseFollowIndexdataSource.sort = this.sort;
  }


  RequisitionDetail(data: object) {
    const dialogRef = this.dialog.open(PURCRequisitionModalComponent, {
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
