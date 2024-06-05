import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-propose-to-owner-view',
  templateUrl: './crew-propose-to-owner-view.component.html',
  styleUrls: ['./crew-propose-to-owner-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWProposeToOwnerViewComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Last_First_Name", visible: true, name: "Last,First Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "No_Of_Contract", visible: true, name: "No Of Contract" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "DOB", visible: true, name: "DOB" },
    { property: "Age", visible: true, name: "Age(Years)" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Manning_Office", visible: true, name: "Manning Office" },
    { property: "Contract_Salary", visible: true, name: "Contract Salary(USD)" },
    { property: "Interview_Sheet", visible: true, name: "Interview Sheet" },
    { property: "6G_Or_4G_Certificate", visible: true, name: "6G Or 4G Certificate" },
    { property: "Basic_Fire_Fighting", visible: true, name: "Basic Fire Fighting" },

  ] as ListColumn[];

  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;

  constructor(private sidenavService:SidenavService) { }

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
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
