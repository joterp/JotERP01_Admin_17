import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWCareerHistoryAddModalComponent } from './crew-career-history-add-modal/crew-career-history-add-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-career-history',
  templateUrl: './crew-career-history.component.html',
  styleUrls: ['./crew-career-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWCareerHistoryComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel_Manager", visible: true, name: "Vessel Manager" },
    { property: "Vessel_Name", visible: true, name: "Vessel Name" },
    { property: "Vessel_Flag", visible: true, name: "Vessel Flag" },
    { property: "Vessel_Type", visible: true, name: "Vessel Type" },
    { property: "GRT", visible: true, name: "GRT" },
    { property: "DWT", visible: true, name: "DWT(MT)" },
    { property: "Main_Engine", visible: true, name: "Main Engine" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Dt_Of_Joining", visible: true, name: "Dt Of Joining" },
    { property: "Dt_Of_Sign_Off", visible: true, name: "Dt Of Sign-Off" },
    { property: "Tenure_Onboard", visible: true, name: "Tenure Onboard" },
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
    
    const dialogRef = this.dialog.open(CREWCareerHistoryAddModalComponent, {
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
