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
  selector: 'fury-ops-vid-index',
  templateUrl: './ops-vid-index.component.html',
  styleUrls: ['./ops-vid-index.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSVIDIndexComponent implements OnInit {

  VIDIndexFilterForm:UntypedFormGroup;
  
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
  
  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder, private router:Router) {
    this.titleService.setTitle(`VID Index`);

   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.VIDIndexFilterForm = this.fb.group({
      drpVessel_Manager:[''],
      drpVessel:[''],
      drpVID_Type:[''],
      drpStatus:['']
    })
  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  gotoOPS_VIDIndexDetail(buttonName:string){
    if(buttonName === 'OPS_VID_Index_Detail'){
     this.router.navigate(['OPS/OPS_VID_Index_Detail']);
    }
}
}
