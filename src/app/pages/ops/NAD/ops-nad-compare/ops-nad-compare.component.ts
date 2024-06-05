import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-ops-nad-compare',
  templateUrl: './ops-nad-compare.component.html',
  styleUrls: ['./ops-nad-compare.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADCompareComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel_Manager", visible: true, name: "Vessel Manager" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "VID_Type", visible: true, name: "VID Type" },
    { property: "Total_Questions", visible: true, name: "Total Questions" },
    { property: "Answered", visible: true, name: "Answered" },
    { property: "Not_Answered", visible: true, name: "Not Answered" },
    { property: "No_Of_NA", visible: true, name: "No. Of NA" },
    { property: "No_Of_Verified", visible: true, name: "No. Of Verified" },
    { property: "Inactive_From", visible: true, name: "Inactive_From" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  

  CompareNADReportFilterForm: UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder) { 
    this.titleService.setTitle(`NAD Compare`);
  }
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();
    
      this.CompareNADReportFilterForm = this.fb.group({
        drpFleet:[''],
        drpVessel:[''],
        drpVoyage:[''],
        drpCargo_State:[''],
        report_date:[''],
        drpLocation:[''],
        drpNAD_Type:[''],
        txtWind_Force:[''],
        report_date_to:[''],
        txtWind_Force_to:[''],
        drpHO:[''],
        drpDO:[''],
        DRPFW:['']
      })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
   
  }

}
