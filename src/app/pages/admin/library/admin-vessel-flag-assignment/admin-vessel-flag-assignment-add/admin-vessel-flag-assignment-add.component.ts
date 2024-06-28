import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

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
  selector: 'fury-admin-vessel-flag-assignment-add',
  templateUrl: './admin-vessel-flag-assignment-add.component.html',
  styleUrl: './admin-vessel-flag-assignment-add.component.scss'
})
export class AdminVesselFlagAssignmentAddComponent {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  vesselMangerFilterFormGroup: UntypedFormGroup;
  unAssignFlagFilterFormGroup : UntypedFormGroup;
  AssignFlagFilterFormGroup :UntypedFormGroup;
  CustomFieldFilterFormGroup : UntypedFormGroup;


  EditData: object;
  IsEdit: boolean;


  constructor(private dialogRef: MatDialogRef<AdminVesselFlagAssignmentAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,
    private router: Router, private auth: AuthGuard,
     private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService,

    @Inject(MAT_DIALOG_DATA) public data: any) { } 
     
    
    

     @Input()
    
     vesselManagercolumns: ListColumn[] = [
      { property: "Vessel_Manager", visible: true, name: "Vessel_Manager" },
      
       
     ] as ListColumn[];
   
     unassignFlagcolumn: ListColumn[] = [
      { property: "Unassigned_flag", visible: true, name: "Unassigned_flag" },
      { property: "Assign_Button", visible: true, name: "Assign_Button" },
   
     ] as ListColumn[];
 
     assignFlagcolumn: ListColumn[] = [
      { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
      { property: "Assigned_Flag", visible: true, name: "Assigned_Flag" },
   
     ] as ListColumn[];

    
 
     @ViewChild("TABLE1") table1: ElementRef;
     @ViewChild("TABLE2") table2: ElementRef;
     @ViewChild("TABLE3") table3: ElementRef;
    
   
 
    
 
     @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
     @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
     @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
     @ViewChild("fourthPaginator", { static: true }) paginator4: MatPaginator;
    

     vesselManagerdataSource: MatTableDataSource<any> | null;
     unassignFlagdataSource: MatTableDataSource<any> | null;
     AssignedFlagdataSource :MatTableDataSource<any> | null;
     
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.vesselMangerFilterFormGroup = this.fb.group({
      txtName: [""]
    });
    this.unAssignFlagFilterFormGroup = this.fb.group({
      drpVessel: [""]
    });
    this.AssignFlagFilterFormGroup = this.fb.group({
      drpVessel: [""]
    });
    this.CustomFieldFilterFormGroup = this.fb.group({
      drpVessel_1: [""],
      drpVessel_2: [""],
      txtName: [""]
    });
    
    this.vesselManagerdataSource = new MatTableDataSource();
    this.unassignFlagdataSource = new MatTableDataSource();
    this.AssignedFlagdataSource = new MatTableDataSource();

  
  
  }

  ngAfterViewInit() {
    this.vesselManagerdataSource.paginator = this.paginator;
    this.unassignFlagdataSource.paginator = this.paginator2;
    this.AssignedFlagdataSource.paginator = this.paginator3;
  
  
   
   }
   get VesselManagervisibleColumns() {
    return this.vesselManagercolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  get UnAssignedFlagvisibleColumns() {
    return this.unassignFlagcolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignedFlagvisibleColumns() {
    return this.assignFlagcolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  VesselWiseAssignment(buttonName:string){
    if(buttonName === 'OPS_LIB_NAD_Custom_Fields_Vessel_Wise_Assignment'){
    this.router.navigate(['OPS/Library/OPS_LIB_NAD_Custom_Fields_Vessel_Wise_Assignment'])
    } 
  }
  // showTableVesselAssign(data:any,type:string) {
  //   if(type==='CustomFields') {
  //     this.showNotAssignVesselTable = true;
  //     this.showAssignVesselTable = true;
  //   }
  // }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
