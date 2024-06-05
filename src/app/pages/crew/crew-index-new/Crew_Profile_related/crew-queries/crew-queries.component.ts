import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-crew-queries',
  templateUrl: './crew-queries.component.html',
  styleUrls: ['./crew-queries.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWQueriesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Raised_On", visible: true, name: "Raised On" },
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Details", visible: true, name: "Details" },
    { property: "Type", visible: true, name: "Type" }, 
	 { property: "Status", visible: true, name: "Status" }, 
 
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
