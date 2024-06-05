import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-acc-pb-view-attachment',
  templateUrl: './crew-acc-pb-view-attachment.component.html',
  styleUrls: ['./crew-acc-pb-view-attachment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBVIEWATTACHMENTComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "PBill_Date", visible: true, name: "PBill Date" },
    { property: "Allotment", visible: true, name: "Allotment" },
    { property: "BOW", visible: true, name: "BOW" },
    { property: "Crew_Welfare", visible: true, name: "Crew Welfare" },
    { property: "Masters_Cash", visible: true, name: "Masters Cash" },
    { property: "Portage_Bill", visible: true, name: "Portage Bill" },
    { property: "CTM_Confirmation", visible: true, name: "CTM Confirmation" },

  ] as ListColumn[];

  dataSource: MatTableDataSource<any> | null;

  constructor(private sidenavService: SidenavService, private titleService: Title) {
    this.titleService.setTitle(`PB Documents`);
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
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
