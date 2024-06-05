import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SURVEYCertificateEditComponent } from './survey-certificate-edit/survey-certificate-edit.component';
import { SORTCertificateModelComponent } from './sort-certificate-model/sort-certificate-model.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-survey-certificate',
  templateUrl: './survey-certificate.component.html',
  styleUrls: ['./survey-certificate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SURVEYCertificateComponent implements OnInit {
  pageSize = 10;
  displayedColumns = ['Category_Name', 'Survey_Certificate_Name','Team','Window_Minus','Window_Plus', 'Action'];
  certificatedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;
 
 

  loading: boolean;
  certificatefilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  AllUnitsData:any= []
  

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 

      this.titleService.setTitle(`Survey/Certificate`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Category_Name", visible: true, name: "Category_Name" },
      { property: "Survey_Certificate_Name", visible: true, name: "Survey_Certificate_Name" },
      { property: "Team", visible: true, name: "Team" },
      { property: "Window_Minus", visible: true, name: "Window_Minus" },
      { property: "Window_Plus", visible: true, name: "Window_Plus" },
      //  { property: "Active_Status", visible: true, name: "Status" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.certificatefilterFormGroup = this.fb.group({
      drpCategory_Name: [""],
      txtSurveyCertificate_Name: [""],
      drpStatus: ["1"]
    });
    this.certificatedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.certificatedataSource.paginator = this.paginator;
    this.certificatedataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.certificatefilterFormGroup.reset();
    this.certificatefilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewCertificate(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(SURVEYCertificateEditComponent,
      {
       minHeight:"30%",
        minWidth: "40%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
      
      
  
   
    });
    } 
    saveSortCertificates(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(SORTCertificateModelComponent,
        {
         minHeight:"40%",
          minWidth: "40%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
        
        
    
     
      });
      } 

}
