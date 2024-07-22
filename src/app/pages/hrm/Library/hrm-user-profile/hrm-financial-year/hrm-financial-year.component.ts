import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { HrmFinancialYearAddComponent } from './hrm-financial-year-add/hrm-financial-year-add.component';

@Component({
  selector: 'fury-hrm-financial-year',
  templateUrl: './hrm-financial-year.component.html',
  styleUrl: './hrm-financial-year.component.scss'
})
export class HrmFinancialYearComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  financialYearFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Financial Year`);
    }
  @Input()
  columns: ListColumn[] = [
   
    { property: "Company_Name", visible: true, name: "Company_Name" },
    { property: "Start_Date", visible: true, name: "Start_Date" },
    { property: "End_Date", visible: true, name: "End_Date" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.financialYearFormGroup = this.fb.group({
      txtCategory: [""],
      drpStatus: ["1"]
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
    this.financialYearFormGroup.reset();
    this.financialYearFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new  Error('Method not implemented.');
  }
  saveEvaluationQueCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmFinancialYearAddComponent,
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
