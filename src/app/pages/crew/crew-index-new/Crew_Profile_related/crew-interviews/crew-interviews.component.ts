import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWInterviewAddModalComponent } from './crew-interview-add-modal/crew-interview-add-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-crew-interviews',
  templateUrl: './crew-interviews.component.html',
  styleUrls: ['./crew-interviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWInterviewsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Interview_Type", visible: true, name: "Interview Type" },
    { property: "Interview_Name", visible: true, name: "Interview Name" },
    { property: "Date_Time", visible: true, name: "Date Time" },
    { property: "Time_Zone", visible: true, name: "Time Zone" },
    { property: "Interviewer", visible: true, name: "Interviewer" },
    { property: "Pending_With", visible: true, name: "Pending With" },
    { property: "Max_Marks", visible: true, name: "Max Marks" },
    { property: "Marks_Obtained", visible: true, name: "Marks Obtained" },
    { property: "Result", visible: true, name: "Result %" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Interview_Mode", visible: true, name: "Interview_Mode" },
    { property: "Seafarer_Acknowledge", visible: true, name: "Seafarer_Acknowledge" },
    { property: "Action", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor(private dialog:MatDialog) {

   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
  this.dataSource = new MatTableDataSource();
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWInterviewAddModalComponent, {
      width: "50%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }

  

}
