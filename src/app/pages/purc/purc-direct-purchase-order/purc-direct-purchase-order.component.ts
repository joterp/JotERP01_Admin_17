import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { PURCPurchaseOrderListModalComponent } from './purc-purchase-order-list-model/purc-purchase-order-list-modal.component';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';

import { MatPaginator } from '@angular/material/paginator';
import { PURCPurchaseOrderSummaryModalComponent } from './purc-purchase-order-summary-modal/purc-purchase-order-summary-modal.component';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'fury-purc-direct-purchase-order',
  templateUrl: './purc-direct-purchase-order.component.html',
  styleUrls: ['./purc-direct-purchase-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCDirectPurchaseOrderComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  searchString:"";
  PurchaseOrderFormGroup:UntypedFormGroup;
  columns: ListColumn[] = [
    { property: "Sr_No", visible: true, name: "Sr.No" },
    { property: "Drawing_Number", visible: true, name: "Drawing Number" },
    { property: "Part_Number", visible: true, name: "Part Number" },
    { property: "Item_Name", visible: true, name: "Item Name" },
    { property: "Item_Description", visible: true, name: "Item Description" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "Req_Qty", visible: true, name: "Req Qty" },
    { property: "Unit_Price", visible: true, name: "Unit Price" },
    { property: "VAT_GST", visible: true, name: "VAT/GST %" },
    { property: "Total_Price", visible: true, name: "Total Price" },
    { property: "Account_Code", visible: true, name: "Account Code" },
    { property: "Comments", visible: true, name: "Comments" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  constructor(private sidenavService:SidenavService, private dialog: MatDialog,private fb:UntypedFormBuilder, private titleService:Title) { 
    this.titleService.setTitle(`Direct Purchase Order`);
  }
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    
    this.dataSource = new MatTableDataSource();

    this.PurchaseOrderFormGroup = this.fb.group({
      drpSupplier:['',Validators.required],
      drpDelivery_Port:['',Validators.required],
      delivery_date:['',Validators.required],
      txtRequisition_Title:[''],
      radioUrgency:[''],
      txtRemarks:[''],
      drpCurrency:['', Validators.required],
      txtPacking:[''],
      txtReason:[''],
      txtOther_Charges:[''],
      txtLogistic:[''],
      txtOther_Charges_Reason:[''],
      txtDiscount:[''],
      txtTruck:[''],
      txtBarge:[''],
      txtOther_Freight:[''],
      txtComments:[''],
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

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

  SaveData() {
    const dialogRef = this.dialog.open(PURCPurchaseOrderListModalComponent, {
      width: "60%",
      maxHeight: "60%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
       
    const dialogRef = this.dialog.open(PURCPurchaseOrderSummaryModalComponent, {
      width: "50%",
      maxHeight: "80%",
      disableClose: true,
    });
 
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }

}
