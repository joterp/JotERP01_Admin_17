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
  selector: 'fury-crew-rank-assignment',
  templateUrl: './crew-rank-assignment.component.html',
  styleUrls: ['./crew-rank-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankAssignmentComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  


  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) { 
      this.authGuard = this.auth;

      this.titleService.setTitle(`Doc Rank Assignment`);
    }
    @Input()
    

     
    docscolumns: ListColumn[] = [
     { property: "Document", visible: true, name: "Document" },
     { property: "Type", visible: true, name: "Type" },
      
    ] as ListColumn[];
  
    copydocscolumn: ListColumn[] = [
     { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
     { property: "Vessel_Flag", visible: true, name: "Vessel_Flag" },
     { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
  
    ] as ListColumn[];

    Notassigncolumn: ListColumn[] = [
     { property: "Rank", visible: true, name: "Rank" },
     { property: "Category", visible: true, name: "Category" },
     { property: "Button_Assign", visible: true, name: "Button_Assign" },
  
    ] as ListColumn[];

    assigncolumns:ListColumn[] = [
     { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
     { property: "Rank", visible: true, name: "Rank" },
     { property: "Category", visible: true, name: "Category" },
    ] as ListColumn[];

    assigndoccolumns:ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Document", visible: true, name: "Document" },
      { property: "Is_Course", visible: true, name: "Is_Course" },
      { property: "Is_Mandatory", visible: true, name: "Is_Mandatory" },
     ] as ListColumn[];


    @ViewChild("TABLE1") table1: ElementRef;
    @ViewChild("TABLE2") table2: ElementRef;
    @ViewChild("TABLE3") table3: ElementRef;
    @ViewChild("TABLE4") table4: ElementRef;
    @ViewChild("TABLE5") table5 :ElementRef;
  

   

    @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
    @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
    @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
    @ViewChild("fourthPaginator", { static: true }) paginator4: MatPaginator;
    @ViewChild("fifthPaginator", { static: true }) paginator5: MatPaginator;

    documentdataSource: MatTableDataSource<any> | null;
    copyDocumentsdataSource: MatTableDataSource<any> | null;
    NotAssignRanksdataSource :MatTableDataSource<any> | null;
    AssignedRanksdataSource :MatTableDataSource<any> | null;
    AssignedDocumentsdataSource :MatTableDataSource<any> | null;
   //  dataSourceVessels: MatTableDataSource<any> | null;
   
   //  assignCertificatedataSource: MatTableDataSource<any> | null;


    pageSize = 5;
   authGuard: AuthGuard;
   selectedItem: Array<any> = [];
   fleetFilterFormGroup:UntypedFormGroup;
   SPFormGroup:UntypedFormGroup;


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

   
    
    this.documentdataSource = new MatTableDataSource();
    this.copyDocumentsdataSource = new MatTableDataSource();
    this.NotAssignRanksdataSource = new MatTableDataSource();
    this.AssignedRanksdataSource = new MatTableDataSource();
    this.AssignedDocumentsdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.documentdataSource.paginator = this.paginator;
    this.copyDocumentsdataSource.paginator = this.paginator2;
    this.NotAssignRanksdataSource.paginator = this.paginator3;
    this.AssignedRanksdataSource.paginator = this.paginator4;
    this.AssignedDocumentsdataSource.paginator = this.paginator5;
   
   }
   get documentsvisibleColumns() {
    return this.docscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  get copydocsvisibleColumns() {
    return this.copydocscolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get NotAssignedRanksvisibleColumns() {
    return this.Notassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignRanksvisibleColumns() {
    return this.assigncolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get AssignedDocumentsvisibleColumns() {
    return this.assigndoccolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }


  VesselAssignment(buttonName:string){
    if(buttonName === 'RankVesselAssignment'){
    this.router.navigate(['CREW/Libraries/RankVesselAssignment'])
    } 
    }


}
