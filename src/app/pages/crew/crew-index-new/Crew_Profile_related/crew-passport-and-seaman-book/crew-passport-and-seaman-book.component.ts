import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWPassportAndSeamanBookAddComponent } from './crew-passport-and-seaman-book-add/crew-passport-and-seaman-book-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-passport-and-seaman-book',
  templateUrl: './crew-passport-and-seaman-book.component.html',
  styleUrls: ['./crew-passport-and-seaman-book.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWPassportAndSeamanBookComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
  { property: "Type", visible: true, name: "Type" },
  { property: "Number", visible: true, name: "Number#" },
	{ property: "Country", visible: true, name: "Country" },
	{ property: "Place", visible: true, name: "Place" },
	{ property: "Date", visible: true, name: "Date" },

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
    
    const dialogRef = this.dialog.open(CREWPassportAndSeamanBookAddComponent, {
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
