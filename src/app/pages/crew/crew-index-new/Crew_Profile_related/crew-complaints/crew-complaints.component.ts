import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWNOKDetailsAddModalComponent } from '../crew-nok-details/crew-nok-details-add-modal/crew-nok-details-add-modal.component';
import { TECHDefectListIndexAddComponent } from 'src/app/pages/tech/tech-defect-list-index/tech-defect-list-index-add/tech-defect-list-index-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-complaints',
  templateUrl: './crew-complaints.component.html',
  styleUrls: ['./crew-complaints.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWComplaintsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Defect_ID", visible: true, name: "Defect ID" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Defect_Details", visible: true, name: "Defect Details" },
    { property: "Office_Dept", visible: true, name: "Office Dept" },
    { property: "Raised_On", visible: true, name: "Raised On" },
    { property: "Completed", visible: true, name: "Completed" },
    { property: "Under_Dept_Head", visible: true, name: "Under Dept Head" },
    { property: "Under_Master", visible: true, name: "Under Master" },
 
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
    
    const dialogRef = this.dialog.open(TECHDefectListIndexAddComponent, {
      width: "60%",
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
