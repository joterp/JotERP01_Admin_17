import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-ops-seemp-reports',
  templateUrl: './ops-seemp-reports.component.html',
  styleUrls: ['./ops-seemp-reports.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSSEEMPREPORTSComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Main_Propulsion_Power", visible: true, name: "Main Propulsion Power" },
    { property: "Auxiliary_Engine", visible: true, name: "Auxiliary Engine(S)" },
    { property: "HO", visible: true, name: "HO" },
    { property: "DO", visible: true, name: "DO" },
    { property: "MGO", visible: true, name: "MGO" },
    { property: "THO", visible: true, name: "THO" },
    { property: "HVO", visible: true, name: "HVO" },  
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  SEEMPReportsFilterForm:UntypedFormGroup;

  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private titleService:Title) { 
    this.titleService.setTitle(`SEEMP Reports`);
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    
    this.dataSource = new MatTableDataSource();

    this.SEEMPReportsFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpVoyage:[''],
      drpCargo_State:[''],
      Report_From:[''],
      Report_To:[''],
      drpLocation:[''],
      drpExport_To_Format:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
