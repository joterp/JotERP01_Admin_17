import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWEducationDetailsAddComponent } from './crew-education-details-add/crew-education-details-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-academic-records',
  templateUrl: './crew-academic-records.component.html',
  styleUrls: ['./crew-academic-records.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWAcademicRecordsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Course_Degree", visible: true, name: "Course/Degree" },
    { property: "Institute", visible: true, name: "Institute" },
    { property: "Marks", visible: true, name: "Marks(%)" },
    { property: "Grade", visible: true, name: "Grade" },
    { property: "Year_Completed", visible: true, name: "Year Completed" },
    { property: "Action", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  constructor(private dialog:MatDialog) { }
 
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWEducationDetailsAddComponent, {
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
