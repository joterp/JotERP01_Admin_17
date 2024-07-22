import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HrmDocumentsAddComponent } from './hrm-documents-add/hrm-documents-add.component';

@Component({
  selector: 'fury-hrm-documents',
  templateUrl: './hrm-documents.component.html',
  styleUrl: './hrm-documents.component.scss'
})
export class HrmDocumentsComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  documnetsFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Documents`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Doc_type", visible: true, name: "Doc_type" },
      { property: "Doc_Name", visible: true, name: "Doc_Name" },
      { property: "Doc_Short_Name", visible: true, name: "Doc_Short_Name" },
      { property: "Alarm_Days", visible: true, name: "Alarm_Days" },
      { property: "Is_Mandatory", visible: true, name: "Is_Mandatory" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.documnetsFilterFormGroup = this.fb.group({

      Doc_Type: [""],
      Doc_Name:[""],
      Designation_Short_Name: [""],
      Alarm_Days:[""],
      drpStatus: ["1"],
      Is_Mandatory:[""]

    });
    this.dataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.documnetsFilterFormGroup.reset();
    this.documnetsFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveDocument(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmDocumentsAddComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 



}
