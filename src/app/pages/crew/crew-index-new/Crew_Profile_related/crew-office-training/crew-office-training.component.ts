import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWOfficeTrainingAddComponent } from './crew-office-training-add/crew-office-training-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-office-training',
  templateUrl: './crew-office-training.component.html',
  styleUrls: ['./crew-office-training.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWOfficeTrainingComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Training_Name", visible: true, name: "Training Name" },
    { property: "Is_Mandatory", visible: true, name: "Is Mandatory" },
    { property: "Expiry_Date", visible: true, name: "Expiry Date" }

  ] as ListColumn[];

  OfficeTrainingcolumns: ListColumn[] = [
   
    { property: "Planned_Date", visible: true, name: "Planned Date" },
    { property: "Training_Date", visible: true, name: "Training Date" },
    { property: "Training_Name", visible: true, name: "Training Name" },
    { property: "Is_Mandatory", visible: true, name: "Is Mandatory" },
    { property: "Training_Type", visible: true, name: "Training Type" },
    { property: "Training_Institute", visible: true, name: "Training Institute" },
    { property: "Expiry_Date", visible: true, name: "Expiry Date" },
    { property: "Country", visible: true, name: "Country" },
    { property: "City", visible: true, name: "City" },
    { property: "Training_Assessment", visible: true, name: "Training Assessment" },
    { property: "Status", visible: true, name: "Status" },
 
  ] as ListColumn[];

  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  OfficeTrainingdataSource: MatTableDataSource<any> | null;

  constructor(private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsOfficeTraining() {
    return this.OfficeTrainingcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }	
  

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.OfficeTrainingdataSource = new MatTableDataSource();
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWOfficeTrainingAddComponent, {
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
