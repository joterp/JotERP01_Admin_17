import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCLibCatalogueExcelImportModalComponent } from './purc-lib-catalogue-excel-import-modal/purc-lib-catalogue-excel-import-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-lib-catalouge-excel-import',
  templateUrl: './purc-lib-catalouge-excel-import.component.html',
  styleUrls: ['./purc-lib-catalouge-excel-import.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurcLibCatalougeExcelImportComponent implements OnInit {
  pageSize = 10;

  CatalogueImportdataSource: MatTableDataSource<any> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 
  @ViewChild("TABLE2") table2: ElementRef;
  loading: boolean;
  filterFormGroup: UntypedFormGroup;
  dialogRef: any;
  ImportFilterFormGroup: UntypedFormGroup;
  CatalogueFilterFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Catalogue - Excel Import`);
     }
   
  
    @Input()
    columnsCat: ListColumn[] = [
      { property: "Catalogue_Title", visible: true, name: "Catalogue_Title" },
      { property: "Catalogue_Details", visible: true, name: "Catalogue_Details" },
      { property: "Sets_Installed", visible: true, name: "Sets_Installed" },
      { property: "Catalogue_Model", visible: true, name: "Catalogue_Model" },
      { property: "Serial", visible: true, name: "Serial" },
      { property: "Motor_KW_Rating", visible: true, name: "Motor_KW_Rating" },
      { property: "Motor_Running_Current", visible: true, name: "Motor_Running_Current" },
      { property: "Bearing_Coupling_End", visible: true, name: "Bearing_Coupling_End" },
      { property: "Bearing_Free_End", visible: true, name: "Bearing_Free_End" },
      { property: "Assigned_Traits", visible: true, name: "Assigned_Traits" },
      { property: "Assigned_Traits", visible: true, name: "Assigned_Traits" },
      { property: "CheckBox", visible: true, name: "CheckBox" }
    ] as ListColumn[];
  
  
  
 
  
    get visibleColumnsCatalogue() {
      return this.columnsCat
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
  
    this.ImportFilterFormGroup = this.fb.group({

      drpImported_File: [""],
      radioNew_Reqsn_Status:[""],
      drpVessel: [""],
      drpMaker: [""],
      drpDepartment: [""],
      drpShipboard_PIC: [""],
      drpAccount_Code: [""]
    });
    this.CatalogueFilterFormGroup = this.fb.group({
      txtCatalogue: [""],
      txtCatalogue_Model: [""],
      txtSerial_No: [""],
      drpStatus: [""]
    });
    this.CatalogueImportdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.CatalogueImportdataSource.paginator = this.paginator;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  clearFilter() {
    this.loading = true;
    this.ImportFilterFormGroup.reset();
    this.CatalogueFilterFormGroup.reset();


    this.ImportFilterFormGroup.get("STATUS").patchValue("1");
    this.CatalogueFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  alertImportModel(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCLibCatalogueExcelImportModalComponent,
      {
        width: "20%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
