import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-nad-lib-documents-vessel-assignment',
  templateUrl: './ops-nad-lib-documents-vessel-assignment.component.html',
  styleUrls: ['./ops-nad-lib-documents-vessel-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  documentFilterFormGroup: UntypedFormGroup;
  NotAssignFilterFormGroup : UntypedFormGroup;
  AssignFilterFormGroup :UntypedFormGroup;
  CustomFieldFilterFormGroup : UntypedFormGroup;
  
  showNotAssignVesselTable : boolean = false;
  showAssignVesselTable : boolean = false;

  selectAllChecked = false;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`NAD Document Vessel Assignment`);
     }
     customcolumns: ListColumn[] = [
      { property: "Document_Name", visible: true, name: "Document_Name" },
      { property: "Nad_Type", visible: true, name: "Nad_Type" },
      { property: "Cargo_State", visible: true, name: "Cargo_State" },
      { property: "Is_Mandatory", visible: true, name: "Is_Mandatory" },
       
     ] as ListColumn[];
   
     notassigncolumn: ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Assign_Button", visible: true, name: "Assign_Button" },
   
     ] as ListColumn[];
 
     assigncolumn: ListColumn[] = [
      { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
   
     ] as ListColumn[];

     assigncustomcolumns:ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
      { property: "Document_Name", visible: true, name: "Document_Name" },
     ] as ListColumn[];
 
 
     @ViewChild("TABLE1") table1: ElementRef;
     @ViewChild("TABLE2") table2: ElementRef;
     @ViewChild("TABLE3") table3: ElementRef;
     @ViewChild("TABLE4") table4: ElementRef;
 
   
 
    
 
     @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
     @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
     @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
     @ViewChild("fourthPaginator", { static: true }) paginator4: MatPaginator;
    

     DocumentdataSource: MatTableDataSource<any> | null;
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

    this.documentFilterFormGroup = this.fb.group({
      // txtDoc_Name: [""],
      // drpNAd_Type: [""],
      drpCargo_State: [""],
      drpMandatory: [""]
    });
    this.NotAssignFilterFormGroup = this.fb.group({
      drpVessel: [""]
    });
    this.AssignFilterFormGroup = this.fb.group({
      drpVessel: [""]
    });
    this.CustomFieldFilterFormGroup = this.fb.group({
      drpVessel_1: [""],
      drpVessel_2: [""],
      txtName: [""]
    });
    this.DocumentdataSource = new MatTableDataSource();
    this.NotAssignedsdataSource = new MatTableDataSource();
    this.AssignedsdataSource = new MatTableDataSource();
    this.AssignedCustomdataSource = new MatTableDataSource();
  
  
  }

  ngAfterViewInit() {
    this.DocumentdataSource.paginator = this.paginator;
    this.NotAssignedsdataSource.paginator = this.paginator2;
    this.AssignedsdataSource.paginator = this.paginator3;
    this.AssignedCustomdataSource.paginator = this.paginator4;
  
   
   }
   get documentvisibleColumns() {
    return this.customcolumns
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
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  VesselWiseAssignmentDocs(buttonName:string){
    if(buttonName === 'OPS_NAD_LIB_DOCUMENT_VESSEL_WISE_ASSIGNMENT'){
    this.router.navigate(['OPS/Library/OPS_NAD_LIB_DOCUMENT_VESSEL_WISE_ASSIGNMENT'])
    } 
  }
  
  showTableDocumentAssign(data:any,type:string) {
    if(type==='CustomFields') {
      this.showNotAssignVesselTable = true;
      this.showAssignVesselTable = true;
    }
  }
}
