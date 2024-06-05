import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSLibNadCustomFieldsAddComponent } from '../ops-lib-nad-custom-fields/ops-lib-nad-custom-fields-add/ops-lib-nad-custom-fields-add.component';
import { OpsNadLibDocumentsAddComponent } from './ops-nad-lib-documents-add/ops-nad-lib-documents-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-nad-lib-documents',
  templateUrl: './ops-nad-lib-documents.component.html',
  styleUrls: ['./ops-nad-lib-documents.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNADLIBDOCUMENTSComponent implements OnInit {
  pageSize = 10;

  NADDocumentdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  NADDocumentsFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`NAD Documnets`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Document_Name", visible: true, name: "Document_Name" },
       { property: "NAD_Type", visible: true, name: "NAD_Type" },
       { property: "NAD_Location", visible: true, name: "NAD_Location" },
       { property: "Cargo_State", visible: true, name: "Cargo_State" },
       { property: "Is_Mandatory", visible: true, name: "Is_Mandatory" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get NADDocumentsvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.NADDocumentsFilterFormGroup = this.fb.group({
      txtDocument_Name: [""],
      drpIs_Mandatory: [""],
      drpNAD_Type: [""],
      drpNAD_Location: [""],
      drpCargo_State: [""],
      drpStatus: [""]
    });
    this.NADDocumentdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.NADDocumentdataSource.paginator = this.paginator;
    this.NADDocumentdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.NADDocumentsFilterFormGroup.reset();
    this.NADDocumentsFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNADCustomFields(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsNadLibDocumentsAddComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 


}
