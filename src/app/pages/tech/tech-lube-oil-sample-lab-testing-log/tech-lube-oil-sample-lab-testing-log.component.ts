import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-tech-lube-oil-sample-lab-testing-log',
  templateUrl: './tech-lube-oil-sample-lab-testing-log.component.html',
  styleUrls: ['./tech-lube-oil-sample-lab-testing-log.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHLubeOilSampleLabTestingLogComponent implements OnInit {

  LOSampleLabFilterForm:UntypedFormGroup;

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  losamplelabcolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Sample_Name", visible: true, name: "Sample Name" },
    { property: "Sample_Remarks", visible: true, name: "Sample Remarks" },
    { property: "Date_Offlanded", visible: true, name: "Date Offlanded" },
    { property: "Airway_Bill", visible: true, name: "Airway Bill #" },
    { property: "Lab_Name", visible: true, name: "Lab Name" },
    { property: "Supplier_Name", visible: true, name: "Supplier Name" },
    { property: "Stage", visible: true, name: "Stage" },
    { property: "Grade", visible: true, name: "Grade/Finding" },
    { property: "Lab_Remarks", visible: true, name: "Lab Remarks" },
    { property: "Email_Alert_Raised", visible: true, name: "Email Alert Raised" },
    { property: "Is_Closed", visible: true, name: "Is Closed" },
    { property: "Action", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  LOSampleLabdataSource: MatTableDataSource<any> | null;

  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(`Vessel L.O. Samples - Lab Testing`);
   }

  get visibleColumnsLOSampleLab () {
    return this.losamplelabcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.LOSampleLabdataSource = new MatTableDataSource();

      this.LOSampleLabFilterForm = this.fb.group({
        drpVessel:[''],
        drpSample_Name:[''],
        from_date:[''],
        to_date:[''],
        drpLab_Name:[''],
        drpSupplier_Name:[''],
        drpStage:[''],
        drpGrade:['']
      })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);   
    this.LOSampleLabdataSource.paginator = this.paginator;
    this.LOSampleLabdataSource.sort = this.sort;
  }
  
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
}
