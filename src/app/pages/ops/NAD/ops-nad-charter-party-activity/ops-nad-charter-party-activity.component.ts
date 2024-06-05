import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-ops-nad-charter-party-activity',
  templateUrl: './ops-nad-charter-party-activity.component.html',
  styleUrls: ['./ops-nad-charter-party-activity.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADCHARTERPARTYACTIVITYComponent implements OnInit {
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  cpactivitylogcolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Voyage", visible: true, name: "Voyage" },
    { property: "Activity_Type", visible: true, name: "Activity Type" },
    { property: "Cargo_State", visible: true, name: "Cargo State" },
    { property: "Start_Date", visible: true, name: "Start Date" },
    { property: "End_Date", visible: true, name: "End Date" },
    { property: "info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  CPActivityLogdataSource: MatTableDataSource<any> | null;

  constructor(private titleService:Title, private sidenavService:SidenavService, private router:Router) {
    this.titleService.setTitle(`CP Activity Log`);
   }
   get visibleColumnsCPActivityLog () {
    return this.cpactivitylogcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.CPActivityLogdataSource = new MatTableDataSource();
  }

  gotoCPConsumptionsIndex(buttonName:string){
    if(buttonName === 'OPS_NAD_CHARTER_PARTY_CONS_INDEX'){
      this.router.navigate(['OPS/NAD/OPS_NAD_CHARTER_PARTY_CONS_INDEX']);
     }
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    this.CPActivityLogdataSource.paginator = this.paginator;
    this.CPActivityLogdataSource.sort = this.sort;
  }
}
