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
import { AccountsLibDrcAccCategorisationAddComponent } from './accounts-lib-drc-acc-categorisation-add/accounts-lib-drc-acc-categorisation-add.component';

@Component({
  selector: 'fury-accounts-lib-drc-acc-categorisation',
  templateUrl: './accounts-lib-drc-acc-categorisation.component.html',
  styleUrl: './accounts-lib-drc-acc-categorisation.component.scss'
})
export class AccountsLibDrcAccCategorisationComponent {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  groupFilterFormGroup: UntypedFormGroup;
  NotAssignFilterFormGroup : UntypedFormGroup;
  AssignFilterFormGroup :UntypedFormGroup;
  CustomFieldFilterFormGroup : UntypedFormGroup;

  showNotAssignVesselTable : boolean = false;
  showAssignVesselTable : boolean = false;


  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`DRC Report Account Categorisation`);
     }
     
     @Input()
    

     
     groupcolumns: ListColumn[] = [
      { property: "Parent", visible: true, name: "Parent" },
      { property: "Group_Name", visible: true, name: "Group_Name" },
      { property: "Adjust_Sort_Order", visible: true, name: "Adjust_Sort_Order" },
      
       
     ] as ListColumn[];
   
     notassigncolumn: ListColumn[] = [
      { property: "Group_Name", visible: true, name: "Group_Name" },
      { property: "Assign_Button", visible: true, name: "Assign_Button" },
   
     ] as ListColumn[];
 
     assigncolumn: ListColumn[] = [
      { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
      { property: "Group_Name", visible: true, name: "Group_Name" },
   
     ] as ListColumn[];

   
     @ViewChild("TABLE1") table1: ElementRef;
     @ViewChild("TABLE2") table2: ElementRef;
     @ViewChild("TABLE3") table3: ElementRef;
  
 
   
 
    
 
     @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
     @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
     @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
    
    

     groupFieldsdataSource: MatTableDataSource<any> | null;
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

    this.groupFilterFormGroup = this.fb.group({
      txtName: [""]
    });
    this.NotAssignFilterFormGroup = this.fb.group({
      drpVessel: [""]
    });
    this.AssignFilterFormGroup = this.fb.group({
      drpVessel: [""]
    });
   
    
    this.groupFieldsdataSource = new MatTableDataSource();
    this.NotAssignedsdataSource = new MatTableDataSource();
    this.AssignedsdataSource = new MatTableDataSource();
  
  
  
  }

  ngAfterViewInit() {
    this.groupFieldsdataSource.paginator = this.paginator;
    this.NotAssignedsdataSource.paginator = this.paginator2;
    this.AssignedsdataSource.paginator = this.paginator3;
  
  
   
   }
   get GroupvisibleColumns() {
    return this.groupcolumns
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
  

  VesselWiseAssignment(buttonName:string){
    if(buttonName === 'OPS_LIB_NAD_Custom_Fields_Vessel_Wise_Assignment'){
    this.router.navigate(['OPS/Library/OPS_LIB_NAD_Custom_Fields_Vessel_Wise_Assignment'])
    } 
  }
  showTableVesselAssign(data:any,type:string) {
    if(type==='CustomFields') {
      this.showNotAssignVesselTable = true;
      this.showAssignVesselTable = true;
    }
  }

  saveNewGroup(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(AccountsLibDrcAccCategorisationAddComponent, {
      width: '35%',
      maxHeight: '90%',
      disableClose: true,
    });
    dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((result) => {
      // if (result) {
      //   this.clearFilter();
      // }
    });
  }




}
