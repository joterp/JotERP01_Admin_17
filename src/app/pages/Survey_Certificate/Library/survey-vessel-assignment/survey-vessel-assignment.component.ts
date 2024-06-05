import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CopyCertificatesModelComponent } from './copy-certificates-model/copy-certificates-model.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'fury-survey-vessel-assignment',
  templateUrl: './survey-vessel-assignment.component.html',
  styleUrls: ['./survey-vessel-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SURVEYVesselAssignmentComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
  selectAllChecked = false;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) { 
      this.authGuard = this.auth;

      this.titleService.setTitle(`Survey Vessel Assignment`);
    }
    vesselcolumns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" }
    ] as ListColumn[];
  
    notassigncolumn: ListColumn[] = [
      { property: "Category", visible: true, name: "Category" },
      { property: "SurveyCertificate", visible: true, name: "SurveyCertificate" },
      { property: "AssignAll", visible: true, name: "AssignAll" },
  
    ] as ListColumn[];

    assigncolumn: ListColumn[] = [
      { property: "UnAssignAll", visible: true, name: "UnAssignAll" },
      { property: "Category", visible: true, name: "Category" },
      { property: "SurveyCertificate", visible: true, name: "SurveyCertificate" }
    
  
    ] as ListColumn[];


    @ViewChild("TABLE1") table1: ElementRef;
    @ViewChild("TABLE2") table2: ElementRef;
    @ViewChild("TABLE3") table3: ElementRef;
    

    @ViewChild('table1', { read: MatSort }) sortVessel: MatSort;
    @ViewChild('table2', { read: MatSort }) sortNotAssign: MatSort;
    @ViewChild('table3', { read: MatSort }) sortAssign: MatSort;

    @ViewChild('table2', { read: MatSort }) sortClient: MatSort;

    @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
    @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
    @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
    // @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;

    dataSourceVessels: MatTableDataSource<any> | null;
    notAssignCertificatedataSource: MatTableDataSource<any> | null;
    assignCertificatedataSource: MatTableDataSource<any> | null;


    pageSize = 5;
   authGuard: AuthGuard;
   selectedItem: Array<any> = [];
   fleetFilterFormGroup:UntypedFormGroup;
   SPFormGroup:UntypedFormGroup;

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.fleetFilterFormGroup = this.fb.group({
      drpVessel: [""],
      
    });
    this.dataSourceVessels = new MatTableDataSource();
    this.notAssignCertificatedataSource = new MatTableDataSource();
    this.assignCertificatedataSource = new MatTableDataSource();
  }


 ngAfterViewInit() {
  this.dataSourceVessels.paginator = this.paginator;
  this.notAssignCertificatedataSource.paginator = this.paginator2;
  this.assignCertificatedataSource.paginator = this.paginator3;

  this.dataSourceVessels.sort = this.sortVessel;
  this.notAssignCertificatedataSource.sort = this.sortNotAssign;
  this.assignCertificatedataSource.sort = this.sortAssign;

 }


 get visibleColumnsVessel() {
  return this.vesselcolumns
    .filter((column) => column.visible)
    .map((column) => column.property);
}

get visibleColumnsNotAssignCert() {
  return this.notassigncolumn
    .filter((column) => column.visible)
    .map((column) => column.property);
}
get visibleColumnsAssignCert() {
  return this.assigncolumn
    .filter((column) => column.visible)
    .map((column) => column.property);
}
copyCertificate(data:object, IsEdit:boolean) {
  const dialogRef = this.dialog.open(CopyCertificatesModelComponent,
    {
     minHeight:"50%",
      minWidth: "40%",
      disableClose: true,
      data:data
    });

    dialogRef.componentInstance.IsEdit= IsEdit;
  dialogRef.afterClosed().subscribe((data:any)=>{
   
    
    

 
  });
  } 

}
