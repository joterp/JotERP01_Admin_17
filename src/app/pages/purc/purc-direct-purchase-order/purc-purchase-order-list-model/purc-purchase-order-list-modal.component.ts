import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-purc-purchase-order-list-modal',
  templateUrl: './purc-purchase-order-list-modal.component.html',
  styleUrls: ['./purc-purchase-order-list-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCPurchaseOrderListModalComponent implements OnInit {
  SupplierDocumentsdataSource:MatTableDataSource<any> | null;
  EditData: object = null;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  pageSize = 10;

  supplierdocumentscolumns:ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Department", visible: true, name: "Department" },
    { property: "PO", visible: true, name: "PO #" },
    { property: "Date", visible: true, name: "Date" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Supplier", visible: true, name: "Supplier" }
    
  ] as ListColumn[];

  constructor(private dialogRef: MatDialogRef<PURCPurchaseOrderListModalComponent>,) { }
  
  get visibleColumnssupplierdocuments(){
    return this.supplierdocumentscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {

    this.SupplierDocumentsdataSource = new MatTableDataSource();
  }

  ngAfterViewInit(){
    this.SupplierDocumentsdataSource.paginator = this.paginator;
    this.SupplierDocumentsdataSource.sort = this.sort;
  }

  
  CloseModal() {
    this.dialogRef.close(null);
  }

}
