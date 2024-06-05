import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-purc-requisition-item-desc-modal',
  templateUrl: './purc-requisition-item-desc-modal.component.html',
  styleUrls: ['./purc-requisition-item-desc-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCRequisitionItemDescModalComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;
  
  pageSize = 10;

    itemdesccolumns:ListColumn[] = [
    { property: "Inventory_Date", visible: true, name: "Inventory_Date" },
    { property: "Inventory", visible: true, name: "Inventory" },
    { property: "ROB_Qty", visible: true, name: "ROB Qty" },
    { property: "PO#", visible: true, name: "Req Qty" },
    { property: "Req_Qty", visible: true, name: "Expiry NA" },
    { property: "Unit_Price", visible: true, name: "Unit Price(USD)" },
    { property: "Order_Date", visible: true, name: "Order Date" },
    { property: "Delivered_At", visible: true, name: "Delivered_At" },

  ] as ListColumn[];
  
ItemDescdataSource:MatTableDataSource<any> | null;
  constructor(private dialogRef: MatDialogRef<PURCRequisitionItemDescModalComponent>) { }

  get visibleColumnsitemdesc(){
    return this.itemdesccolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.ItemDescdataSource = new MatTableDataSource();

  }

  ngAfterViewInit(){
    this.ItemDescdataSource.paginator = this.paginator;
    this.ItemDescdataSource.sort = this.sort;

  }

  CloseModal() {
    this.dialogRef.close(null);
  }
  
  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }
}
