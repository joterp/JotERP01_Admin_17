import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
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
  selector: 'fury-crew-contract-template-vessel-assignment',
  templateUrl: './crew-contract-template-vessel-assignment.component.html',
  styleUrls: ['./crew-contract-template-vessel-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CREWContractTemplateVesselAssignmentComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;

 
  AssignedTable : boolean = false;
  showUnassignTable : boolean = false;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Crew Template Vesel Assignment`);
   
     }
     templatecolumns: ListColumn[] = [
      { property: "Template_Name", visible: true, name: "Template_Name" },

    ] as ListColumn[];
  
    notassigncolumn: ListColumn[] = [
     { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
     { property: "Button_Assign", visible: true, name: "Button_Assign" },
   
  
    ] as ListColumn[];

    assigncolumn: ListColumn[] = [
     { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
     { property: "Vessel_Name", visible: true, name: "Vessel_Name" },

  
    ] as ListColumn[];

    assignTempcolumns:ListColumn[] = [
     { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
     { property: "Template_Name", visible: true, name: "Template_Name" },
   
    ] as ListColumn[];




    @ViewChild("TABLE1") table1: ElementRef;
    @ViewChild("TABLE2") table2: ElementRef;
    @ViewChild("TABLE3") table3: ElementRef;
    @ViewChild("TABLE4") table4: ElementRef;
  Ref;
  

   

    @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
    @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
    @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
    @ViewChild("fourthPaginator", { static: true }) paginator4: MatPaginator;
  

    templatedataSource: MatTableDataSource<any> | null;
    notAssignVesseldataSource: MatTableDataSource<any> | null;
    unAssignVesseldataSource :MatTableDataSource<any> | null;
    assignedTemplatedataSource :MatTableDataSource<any> | null;
   
   //  dataSourceVessels: MatTableDataSource<any> | null;
   
   //  assignCertificatedataSource: MatTableDataSource<any> | null;


    pageSize = 5;
   authGuard: AuthGuard;
   selectedItem: Array<any> = [];



  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

   
    
    this.templatedataSource = new MatTableDataSource();
    this.notAssignVesseldataSource = new MatTableDataSource();
    this.unAssignVesseldataSource = new MatTableDataSource();
    this.assignedTemplatedataSource = new MatTableDataSource();
   
  }
  ngAfterViewInit() {
    this.templatedataSource.paginator = this.paginator;
    this.notAssignVesseldataSource.paginator = this.paginator2;
    this.unAssignVesseldataSource.paginator = this.paginator3;
    this.assignedTemplatedataSource.paginator = this.paginator4;
   
   
   }
   
   get templatevisibleColumns() {
    return this.templatecolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  get notAssignVesselvisibleColumns() {
    return this.notassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get unAssignVesselvisibleColumns() {
    return this.assigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get assignTemplatevisibleColumns() {
    return this.assignTempcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  showRankTable(data:any,type:string) {
    if(type==='CustomFields') {
     
      this.AssignedTable = true;
      this.showUnassignTable = true;
    }
  }
  

}
