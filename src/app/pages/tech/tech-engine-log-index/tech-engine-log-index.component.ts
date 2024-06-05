import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-tech-engine-log-index',
  templateUrl: './tech-engine-log-index.component.html',
  styleUrls: ['./tech-engine-log-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TECHEngineLogIndexComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  enginelogcolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "From_Date", visible: true, name: "From Date" },
    { property: "To_Date", visible: true, name: "To Date" },
    { property: "Last_Finalize_Watch", visible: true, name: "Last Finalize Watch" },
    { property: "From_Port", visible: true, name: "From Port" },
    { property: "To_Port", visible: true, name: "To Port" },
 
  ] as ListColumn[];
  pageSize = 10;
  EngineLogdataSource: MatTableDataSource<any> | null;

  EngineLogFilterForm:UntypedFormGroup;

  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private router:Router, private titleService:Title) {
    this.titleService.setTitle(`Engine Log Book - Main Index`);
   }

  get visibleColumnsEngineLog () {
    return this.enginelogcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.EngineLogdataSource = new MatTableDataSource();

    this.EngineLogFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      from_date:[''],
      to_date:[''], 
      drpFrom_Port:[''],
      drpTo_Port:['']
    })
 
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.EngineLogdataSource.paginator = this.paginator;
    this.EngineLogdataSource.sort = this.sort;
    
  }
  
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  EngineLogDetails(buttonName:string){
    if(buttonName === 'TECH_EngineLog_Details'){
     this.router.navigate(['TECH/TECH_EngineLog_Details'])
    } 
 }

}
