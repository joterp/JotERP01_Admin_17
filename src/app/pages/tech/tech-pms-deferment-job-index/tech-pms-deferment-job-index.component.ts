import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-tech-pms-deferment-job-index',
  templateUrl: './tech-pms-deferment-job-index.component.html',
  styleUrls: ['./tech-pms-deferment-job-index.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHPMSDefermentJobIndexComponent implements OnInit {

  PMSDefermentLogFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef

  @Input()
  columns: ListColumn[] = [
    { property: "Value", visible: true, name: "Value" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Date", visible: true, name: "Date" },
    { property: "RHRS", visible: true, name: "RHRS" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog, private router:Router, private titleService:Title) {
    this.titleService.setTitle(`PMS Job Status`);

   }
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

        this.PMSDefermentLogFilterForm = this.fb.group({
          drpVessel:[''],
          drpMachinery:[''],
          drpSub_Component:[''],
          txtJobCode:[''],
          drpCMS:[''],
          drpCritical:[''],
          drpFrequency_Type:[''],
          drpDepartment:[''],
          drpRank:[''],
          drpMaintenance_Type:[''],
          drpVerified_Status:[''],
          drpActioned_Status:[''],
          last_done_date_from:[''],
          last_done_date_to:[''],
          next_due_date_from:[''],
          next_due_date_to:['']
          
        })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
   ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  SaveData(buttonName:string){
     if(buttonName === 'TECH_PMS_JobStatus_Edit'){
      this.router.navigate(['TECH/TECH_PMS_JobStatus_Edit'])
     }
  }

}
