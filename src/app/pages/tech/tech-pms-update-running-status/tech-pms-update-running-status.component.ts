import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-tech-pms-update-running-status',
  templateUrl: './tech-pms-update-running-status.component.html',
  styleUrls: ['./tech-pms-update-running-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TECHPMSUpdateRunningStatusComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  pmsupdatestatuscolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Machinery", visible: true, name: "Machinery" },
    { property: "Current_Running_Hrs", visible: true, name: "Current Running Hrs" },
    { property: "Current_Date_Hrs_Read", visible: true, name: "Current Date Hrs Read" },
    { property: "New_Running_Hrs", visible: true, name: "New_Running_Hrs" },
 
  ] as ListColumn[];

  runninghourscolumns: ListColumn[] = [
    { property: "Record_Date", visible: true, name: "Record Date" },
    { property: "Running_Hours", visible: true, name: "Running Hours" },
  
  ] as ListColumn[];

  pageSize = 10;
  PMSUpdateStatusdataSource: MatTableDataSource<any> | null;
  RunningHoursdataSource:MatTableDataSource<any> | null;
  PMSUpdateStatusFilterForm:UntypedFormGroup;
  showRunningHours:boolean=false;

  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private titleService:Title) { 
    this.titleService.setTitle(`PMS Update Running Hours`);

  }

  get visibleColumnsPMSUpdateStatus () {
    return this.pmsupdatestatuscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsRunningHours(){
    return this.runninghourscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  ngOnInit(): void {
    this.PMSUpdateStatusdataSource = new MatTableDataSource();
    this.RunningHoursdataSource = new MatTableDataSource();

    this.PMSUpdateStatusFilterForm = this.fb.group({
      drpVessel:[''],
      drpMachinery:[''],
      record_date:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.PMSUpdateStatusdataSource.paginator = this.paginator;
    this.PMSUpdateStatusdataSource.sort = this.sort;
    this.RunningHoursdataSource.paginator = this.paginator;
    this.RunningHoursdataSource.sort = this.sort;

  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  showRunningH(){
    this.showRunningHours=true;
  }
}
