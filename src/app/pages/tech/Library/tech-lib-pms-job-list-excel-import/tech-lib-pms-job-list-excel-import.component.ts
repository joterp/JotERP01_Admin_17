import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { TechLibPmsJobListExcelImportAlertComponent } from './tech-lib-pms-job-list-excel-import-alert/tech-lib-pms-job-list-excel-import-alert.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-lib-pms-job-list-excel-import',
  templateUrl: './tech-lib-pms-job-list-excel-import.component.html',
  styleUrls: ['./tech-lib-pms-job-list-excel-import.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TECHLIBPMSJOBLISTEXCELIMPORTComponent implements OnInit {
  pageSize = 10;

  pmsJobsdataSource: MatTableDataSource<any> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 
  @ViewChild("TABLE2") table2: ElementRef;

  
  loading: boolean;
 
;
  pmsImportFilterFormGroup: UntypedFormGroup;
  pmsCatalogueFilterFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`PMS JOB LIST - Excel Import`);
    }

    columnsCat: ListColumn[] = [
      { property: "cadTrade.type", visible: true, name: "cadTrade.type" },
      { property: "cadTrade.value", visible: true, name: "cadTrade.value" },
    ] as ListColumn[];

    get visibleColumnsCatalogue() {
      return this.columnsCat
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
  
    this.pmsImportFilterFormGroup = this.fb.group({
      radioNew_Reqsn_Status:["1"],
      drpImported_File: [""],
      drpVessel: [""],
      drpCatalogue: [""],
      drpSubCatalogue: [""],
     

     
    });
    this.pmsCatalogueFilterFormGroup = this.fb.group({
      txtJob_Code: [""],
      txtJob_Title: [""],
      radioNew_CMS_Jobs: ["1"],
      radioNew_Critical_Jobs: ["0"],
      radioNew_Job_Status: ["2"],
      radioNew_Catalogue_Selected: ["1"],
      radioNew_SubCatalogue_Selected: ["2"],
   

      
    });
    this.pmsJobsdataSource = new MatTableDataSource();

  }
  ngAfterViewInit() {
    this.pmsJobsdataSource.paginator = this.paginator;
    this.pmsJobsdataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  alertImportModel(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(TechLibPmsJobListExcelImportAlertComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
