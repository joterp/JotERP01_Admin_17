import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWNOKDetailsAddModalComponent } from './crew-nok-details-add-modal/crew-nok-details-add-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'fury-crew-nok-details',
  templateUrl: './crew-nok-details.component.html',
  styleUrls: ['./crew-nok-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWNOKDetailsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Name", visible: true, name: "Name" },
    { property: "Relation", visible: true, name: "Relation" },
    { property: "DOB", visible: true, name: "DOB" },
    { property: "Phone", visible: true, name: "Phone" },
    { property: "Address", visible: true, name: "Is Nok?" },
    { property: "Is_Nok", visible: true, name: "Not Answered" },
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
    
    const dialogRef = this.dialog.open(CREWNOKDetailsAddModalComponent, {
      width: "40%",
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
