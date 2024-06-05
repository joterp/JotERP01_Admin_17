import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-crew-vessel-inspection-findings',
  templateUrl: './crew-vessel-inspection-findings.component.html',
  styleUrls: ['./crew-vessel-inspection-findings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWVesselInspectionFindingsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Select", visible: true, name: "Select" },
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Proposed_Staff", visible: true, name: "Proposed Staff" },
    { property: "Manning_Office", visible: true, name: "Manning Office" },
    { property: "Last_Vessel", visible: true, name: "Last Vessel" },
    { property: "Current_Rank", visible: true, name: "Current Rank" },
    { property: "Proposed_On", visible: true, name: "Proposed On" },
    { property: "Available_Date", visible: true, name: "Available Date" },
    { property: "Proposed_Rank", visible: true, name: "Proposed Rank" },

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
