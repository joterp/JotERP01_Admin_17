import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-crew-internal-audit',
  templateUrl: './crew-internal-audit.component.html',
  styleUrls: ['./crew-internal-audit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWInternalAuditComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
  { property: "Opening", visible: true, name: "Opening" },
  { property: "Closing", visible: true, name: "Closing" },

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
