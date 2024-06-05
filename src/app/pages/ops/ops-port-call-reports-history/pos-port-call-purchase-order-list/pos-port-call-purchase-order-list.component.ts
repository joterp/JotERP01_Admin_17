import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-pos-port-call-purchase-order-list',
  templateUrl: './pos-port-call-purchase-order-list.component.html',
  styleUrls: ['./pos-port-call-purchase-order-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class POSPortCallPurchaseOrderListComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  portcallpurchaseordercolumns: ListColumn[] = [
    { property: "Requisition_Code", visible: true, name: "Requisition Code" },
    { property: "PO_Code", visible: true, name: "PO Code" },
    { property: "Supplier", visible: true, name: "Supplier" },
   
 
  ] as ListColumn[];
  pageSize = 10;
  PortCallPurchaseOrderdataSource: MatTableDataSource<any> | null;
  constructor() { }
  get visibleColumnsPortCallPurchaseOrder () {
    return this.portcallpurchaseordercolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
   
  ngOnInit(): void {

    this.PortCallPurchaseOrderdataSource = new MatTableDataSource();

  }

  ngAfterViewInit() {

    this.PortCallPurchaseOrderdataSource.paginator = this.paginator;
    this.PortCallPurchaseOrderdataSource.sort = this.sort;
  }

}
