import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-tech-running-hours-history',
  templateUrl: './tech-running-hours-history.component.html',
  styleUrls: ['./tech-running-hours-history.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHRunningHoursHistoryComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()

  runninghourscolumns: ListColumn[] = [
    { property: "Record_Date", visible: true, name: "Record Date" },
    { property: "Running_Hours", visible: true, name: "Running Hours" },
  
  ] as ListColumn[];

  pageSize = 10;
  
    RunningHoursdataSource:MatTableDataSource<any> | null;
	
  constructor(private dialogRef:MatDialogRef<TECHRunningHoursHistoryComponent>,) { }
  get visibleColumnsRunningHours(){
    return this.runninghourscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.RunningHoursdataSource.paginator = this.paginator;
    this.RunningHoursdataSource.sort = this.sort;
  }
	  CloseModal(){
    this.dialogRef.close(null);
  }
} 
