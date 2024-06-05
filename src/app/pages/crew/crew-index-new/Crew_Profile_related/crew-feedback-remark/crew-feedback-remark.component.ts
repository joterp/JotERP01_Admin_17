import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWFeedbackRemarkAddModalComponent } from './crew-feedback-remark-add-modal/crew-feedback-remark-add-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-feedback-remark',
  templateUrl: './crew-feedback-remark.component.html',
  styleUrls: ['./crew-feedback-remark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWFeedbackRemarkComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Date_Time", visible: true, name: "Date Time" },
    { property: "Reported_By", visible: true, name: "Reported By" },
    { property: "Category", visible: true, name: "Category" },
    { property: "Feedback_Remarks", visible: true, name: "Feedback/Remarks" },
    { property: "Action", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor(private dialog:MatDialog, ) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();

  }

  
  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWFeedbackRemarkAddModalComponent, {
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
