import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { TECHDMMMeetingIndexAddComponent } from './tech-dmm-meeting-index-add/tech-dmm-meeting-index-add.component';
import { NavigationExtras, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-dmm-meeting-index',
  templateUrl: './tech-dmm-meeting-index.component.html',
  styleUrls: ['./tech-dmm-meeting-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TECHDMMMeetingIndexComponent implements OnInit {

  panelOpenState = true;
  DailyMeetingFilterForm:UntypedFormGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "ID", visible: true, name: "ID" },
    { property: "Date", visible: true, name: "Date" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Decription", visible: true, name: "Decription" },
    { property: "PIC-AR", visible: true, name: "PIC-AR" },
    { property: "Priority", visible: true, name: "Priority" },
    { property: "I-CAR", visible: true, name: "I-CAR" },
    { property: "Office_Department", visible: true, name: "Office Department" },
    { property: "Defect_ID", visible: true, name: "Defect ID" },
    { property: "Current_Status", visible: true, name: "Current Status" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
    
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder, private dialog: MatDialog,private router:Router) {
    this.titleService.setTitle(`Daily Meeting Module`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
	  
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.DailyMeetingFilterForm = this.fb.group({
      drpVessel_Name:[''],
      txtID:[''],
      drpDepartment:[''],
      drpPIC_AR:[''],
      drpPriority:[''],
      drpStatus:[''],

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

  AddMeetingIssue(data: object) {
    const dialogRef = this.dialog.open(TECHDMMMeetingIndexAddComponent, {
      width: "50%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }
  gotoTECH_Daily_Meeting(buttonName:string){
    if(buttonName === 'TECHDefectListIndividual'){     
      this.router.navigate(['TECH/TECH_DefectList_Individual']);
  }
  }
}


