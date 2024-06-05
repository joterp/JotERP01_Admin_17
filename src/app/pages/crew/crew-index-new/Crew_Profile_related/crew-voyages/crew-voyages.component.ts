import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-crew-voyages',
  templateUrl: './crew-voyages.component.html',
  styleUrls: ['./crew-voyages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWVoyagesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
  { property: "Sign_On_Date", visible: true, name: "Date" },
  { property: "Sign_On_Port", visible: true, name: "Port" },
	{ property: "Sign_Off_Date", visible: true, name: "Date" },
	{ property: "Sign_Off_Port", visible: true, name: "Port" },
	{ property: "Sign_Off_Reason", visible: true, name: "Reason" },
  { property: "Sign_Off_DOAH", visible: true, name: "DOAH" },

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
