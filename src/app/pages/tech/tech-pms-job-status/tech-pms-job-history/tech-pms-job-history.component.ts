import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-tech-pms-job-history',
  templateUrl: './tech-pms-job-history.component.html',
  styleUrls: ['./tech-pms-job-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TECHPMSJobHistoryComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef

  @Input()
  columns: ListColumn[] = [
    { property: "Date", visible: true, name: "Date" },
    { property: "RHRS", visible: true, name: "RHRS" },
    { property: "Value", visible: true, name: "Value" },
    { property: "Type", visible: true, name: "Type" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  constructor(private titleService:Title, private sidenavService:SidenavService) { 
    this.titleService.setTitle(`PMS Job`);
  }
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  
}
