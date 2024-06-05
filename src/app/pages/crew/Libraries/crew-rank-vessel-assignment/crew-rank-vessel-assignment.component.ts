import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CopyReportsComponent } from 'src/app/pages/ops/Library/ops-rpt-vessel-assignement/ops-vessel-wise-report-assignment/copy-reports/copy-reports.component';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService} from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-rank-vessel-assignment',
  templateUrl: './crew-rank-vessel-assignment.component.html',
  styleUrls: ['./crew-rank-vessel-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankVesselAssignmentComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;

  showRankCategoryTable : boolean = false;
  AssignedTable : boolean = false;
  showUnassignTable : boolean = false;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Doc Vesel - Rank Assignment`);
    }
    @Input()
    

     
    vesselcolumns: ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
     { property: "Vessel_Flag", visible: true, name: "Vessel_Flag" },
     { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
    ] as ListColumn[];
  
    rankcolumn: ListColumn[] = [
     { property: "Rank", visible: true, name: "Rank" },
     { property: "Category", visible: true, name: "Category" },
   
  
    ] as ListColumn[];

    Unassigncolumn: ListColumn[] = [
     { property: "UnAssign_Document", visible: true, name: "UnAssign_Document" },
     { property: "Type", visible: true, name: "Type" },
     { property: "Button_Assign", visible: true, name: "Button_Assign" },
  
    ] as ListColumn[];

    assigncolumns:ListColumn[] = [
     { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
     { property: "Assigned_Document", visible: true, name: "Assigned_Document" },
     { property: "Type", visible: true, name: "Type" },
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

    vesseldataSource: MatTableDataSource<any> | null;
    rankdataSource: MatTableDataSource<any> | null;
    UnAssignDocsdataSource :MatTableDataSource<any> | null;
    AssignedDocsdataSource :MatTableDataSource<any> | null;
    AssignedDocumentsVesselRankdataSource :MatTableDataSource<any> | null;
   //  dataSourceVessels: MatTableDataSource<any> | null;
   
   //  assignCertificatedataSource: MatTableDataSource<any> | null;


    pageSize = 5;
   authGuard: AuthGuard;
   selectedItem: Array<any> = [];


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

   
    
    this.vesseldataSource = new MatTableDataSource();
    this.rankdataSource = new MatTableDataSource();
    this.UnAssignDocsdataSource = new MatTableDataSource();
    this.AssignedDocsdataSource = new MatTableDataSource();
    this.AssignedDocumentsVesselRankdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.vesseldataSource.paginator = this.paginator;
    this.rankdataSource.paginator = this.paginator2;
    this.UnAssignDocsdataSource.paginator = this.paginator3;
    this.AssignedDocsdataSource.paginator = this.paginator4;
    this.AssignedDocumentsVesselRankdataSource.paginator = this.paginator5;
   
   }
   get vesselvisibleColumns() {
    return this.vesselcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  get rankvisibleColumns() {
    return this.rankcolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get UnAssignedDocsvisibleColumns() {
    return this.Unassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignDocsvisibleColumns() {
    return this.assigncolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get AssignedVesselRankvisibleColumns() {
    return this.assigndoccolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  showRankTable(data:any,type:string) {
    if(type==='CustomFields') {
      this.showRankCategoryTable = true;
     
    }
  }
  showAssignTable(data:any,type:string) {
    if(type==='Fields') {
    
      this.AssignedTable = true;
      this.showUnassignTable = true;
    }
  }
  saveCopyReports(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(CopyReportsComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
