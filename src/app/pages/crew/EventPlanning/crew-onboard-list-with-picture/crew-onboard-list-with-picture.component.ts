import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-onboard-list-with-picture',
  templateUrl: './crew-onboard-list-with-picture.component.html',
  styleUrls: ['./crew-onboard-list-with-picture.component.scss'], 
  encapsulation: ViewEncapsulation.None
})

export class CREWOnboardListWithPictureComponent implements OnInit {

  panelOpenState = true;

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  
  pageSize = 10;
  
  EventPlanningcolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "COVID_info", visible: true, name: "" },
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "DOB", visible: true, name: "DOB" },
    { property: "Passport_No", visible: true, name: "Passport No" },
    { property: "Seaman_No", visible: true, name: "Seaman No" },
    { property: "Sign_On_Date", visible: true, name: "Sign On Date" },
    { property: "EOC", visible: true, name: "EOC" },

  ] as ListColumn[];
  
    EventPlanningdataSource: MatTableDataSource<any> | null;
    
  constructor(private sidenavService:SidenavService, private titleService:Title) {
    this.titleService.setTitle(`Crew List`);
   }

   
  get visibleColumnsEventPlanning() {
    return this.EventPlanningcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.EventPlanningdataSource = new MatTableDataSource(); 
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }
  

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }


}
