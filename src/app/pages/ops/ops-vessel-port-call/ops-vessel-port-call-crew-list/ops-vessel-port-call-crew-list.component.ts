import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-ops-vessel-port-call-crew-list',
  templateUrl: './ops-vessel-port-call-crew-list.component.html',
  styleUrls: ['./ops-vessel-port-call-crew-list.component.scss'], 
  encapsulation:ViewEncapsulation.None
})
export class OPSVesselPortCallCrewListComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Staff_Rank", visible: true, name: "Staff Rank" },
    { property: "Sign_On_Date", visible: true, name: "Sign On Date" },
    { property: "Sign_Off_Date", visible: true, name: "Sign Off Date" },
    { property: "EOC_Date", visible: true, name: "EOC Date" },
    { property: "Status", visible: true, name: "Status" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  constructor(private dialogRef:MatDialogRef<OPSVesselPortCallCrewListComponent>) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  } 

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  CloseModal() {
    this.dialogRef.close(true);
  }
}
