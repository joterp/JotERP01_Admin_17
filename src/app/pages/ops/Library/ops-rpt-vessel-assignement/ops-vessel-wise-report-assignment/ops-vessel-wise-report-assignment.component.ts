import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CopyReportsComponent } from './copy-reports/copy-reports.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-vessel-wise-report-assignment',
  templateUrl: './ops-vessel-wise-report-assignment.component.html',
  styleUrls: ['./ops-vessel-wise-report-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVesselWiseReportAssignmentComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
  vesselReportFilterFormGroup: UntypedFormGroup;
  NotAssignFilterFormGroup : UntypedFormGroup;
  AssignFilterFormGroup :UntypedFormGroup;
  CustomFieldFilterFormGroup : UntypedFormGroup;

  showNotAssignVesselTable : boolean = false;
  showAssignVesselTable : boolean = false;

  selectAllChecked = false;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Vessel Wise Report Assignment`);
     }
     @Input()
    

     
     docscolumns: ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
       
     ] as ListColumn[];
   
     notassigncolumn: ListColumn[] = [
      { property: "UnAssigned_Report", visible: true, name: "UnAssigned_Report" },
      { property: "Assign_Button", visible: true, name: "Assign_Button" },
   
     ] as ListColumn[];
 
     assigncolumn: ListColumn[] = [
      { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
      { property: "Assigned_Reports", visible: true, name: "Assigned_Reports" },
   
     ] as ListColumn[];

     Assigncustomcolumns:ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
      { property: "Report_Name", visible: true, name: "Report_Name" },
     ] as ListColumn[];
 
 
     @ViewChild("TABLE1") table1: ElementRef;
     @ViewChild("TABLE2") table2: ElementRef;
     @ViewChild("TABLE3") table3: ElementRef;
     @ViewChild("TABLE4") table4: ElementRef;
 
   
 
    
 
     @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
     @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
     @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
     @ViewChild("fourthPaginator", { static: true }) paginator4: MatPaginator;
    

     VesselReportsdataSource: MatTableDataSource<any> | null;
     NotAssignedsdataSource: MatTableDataSource<any> | null;
     AssignedsdataSource :MatTableDataSource<any> | null;
     AssignedCustomdataSource :MatTableDataSource<any> | null;
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.vesselReportFilterFormGroup = this.fb.group({
      txtName :[""],
      drpVessel: [""]
    });
    this.NotAssignFilterFormGroup = this.fb.group({
      txtName: [""]
    });
    this.AssignFilterFormGroup = this.fb.group({
      txtName: [""]
    });
    this.CustomFieldFilterFormGroup = this.fb.group({
      drpVessel_1: [""],
      drpVessel_2: [""],
      txtName: [""]
    });
    
    this.VesselReportsdataSource = new MatTableDataSource();
    this.NotAssignedsdataSource = new MatTableDataSource();
    this.AssignedsdataSource = new MatTableDataSource();
    this.AssignedCustomdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.VesselReportsdataSource.paginator = this.paginator;
    this.NotAssignedsdataSource.paginator = this.paginator2;
    this.AssignedsdataSource.paginator = this.paginator3;
    this.AssignedCustomdataSource.paginator = this.paginator4;
  
   
   }
   get VesselReportsvisibleColumns() {
    return this.docscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  get NotAssignedvisibleColumns() {
    return this.notassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignedvisibleColumns() {
    return this.assigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignCustomvisibleColumns() {
    return this.Assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  showTableVesselAssign(data:any,type:string) {
    if(type==='CustomFields') {
      this.showNotAssignVesselTable = true;
      this.showAssignVesselTable = true;
    }
  }
  saveCopyReports(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CopyReportsComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 


}
