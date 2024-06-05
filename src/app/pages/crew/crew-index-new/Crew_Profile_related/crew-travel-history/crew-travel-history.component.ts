import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-crew-travel-history',
  templateUrl: './crew-travel-history.component.html',
  styleUrls: ['./crew-travel-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWTravelHistoryComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Request", visible: true, name: "Request #" },
    { property: "Route", visible: true, name: "Route" },
    { property: "Class_Type", visible: true, name: "Class Type" },
    { property: "PO_Code", visible: true, name: "PO_Code" },
    { property: "PO_Date", visible: true, name: "PO Date" },
    { property: "Travel_Request_Date", visible: true, name: "Travel Request Date" },
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Total_Cost", visible: true, name: "Total Cost" },
    { property: "Ticket_Number", visible: true, name: "Ticket Number" },
    
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor() { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }	

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

}
