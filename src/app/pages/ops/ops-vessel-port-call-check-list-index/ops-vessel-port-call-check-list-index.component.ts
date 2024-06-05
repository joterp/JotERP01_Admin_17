import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSVesselPortCallCheckListIndexEditComponent } from './ops-vessel-port-call-check-list-index-edit/ops-vessel-port-call-check-list-index-edit.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-vessel-port-call-check-list-index',
  templateUrl: './ops-vessel-port-call-check-list-index.component.html',
  styleUrls: ['./ops-vessel-port-call-check-list-index.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class OPSVesselPortCallCheckListIndexComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Closed_By", visible: true, name: "Closed By" },
    { property: "Closed_Date", visible: true, name: "Date" },
    { property: "Verified_By", visible: true, name: "Verified By" },
    { property: "Verified_Date", visible: true, name: "Date" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  constructor(private sidenavService:SidenavService, private titleService:Title, private dialog:MatDialog) { 
    this.titleService.setTitle(`Check List Index`);
  }
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
  }

  ChecklistDetails(data: object){
    const dialogRef = this.dialog.open(OPSVesselPortCallCheckListIndexEditComponent, {
      width: "65%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }


}
