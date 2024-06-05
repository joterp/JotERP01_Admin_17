import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-ops-question-history',
  templateUrl: './ops-question-history.component.html',
  styleUrls: ['./ops-question-history.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSQuestionHistoryComponent implements OnInit {

  
	
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSize = 10;

  columns: ListColumn[] = [
    { property: "Vessel_Name", visible: true, name: "Vessel Name" },
    { property: "Question", visible: true, name: "Question" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Answer", visible: true, name: "Answer" },
    { property: "NA", visible: true, name: "NA" },
    { property: "Verify", visible: true, name: "Verify" },
    { property: "Verified_By", visible: true, name: "Verified By" },
    { property: "Verified_On", visible: true, name: "Verified On" },
    { property: "Last_Modified_By", visible: true, name: "Last Modified By" },
    { property: "Last_Modified_On", visible: true, name: "Last Modified On" },
  ] as ListColumn[];

  dataSource: MatTableDataSource<any> | null;		

  constructor( private dialogRef:MatDialogRef<OPSQuestionHistoryComponent> ) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

  }

  ngAfterViewInIt(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
