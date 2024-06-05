import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SurveyCategoriesEditComponent } from './survey-categories-edit/survey-categories-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-survey-categories',
  templateUrl: './survey-categories.component.html',
  styleUrls: ['./survey-categories.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SURVEYCategoriesComponent implements OnInit {
  pageSize = 10;
  // displayedColumns = ['Department_Name', 'Category_Name', 'Action'];
  categorydataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  loading: boolean;
  categoryfilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  AllUnitsData: any = []
  authGuard: AuthGuard;

 
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 

      this.authGuard = this.auth;
      this.titleService.setTitle(`Survey Catagories`);
    }




    @Input()
    columns: ListColumn[] = [
      { property: "Department_Name", visible: true, name: "Department_Name" },
      { property: "Category_Name", visible: true, name: "Category_Name" },
      { property: "Action", visible: true, name: "Action" },
    
    ] as ListColumn[];

    
    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.categoryfilterFormGroup = this.fb.group({
      drpDepartment_Name: [""],
      txtCategory_Name: [""],
      drpStatus: ["1"]
    });
    this.categorydataSource = new MatTableDataSource();

  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.categorydataSource.paginator = this.paginator;
    this.categorydataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.categoryfilterFormGroup.reset();
    this.categoryfilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveData(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(SurveyCategoriesEditComponent,
      {
        minHeight: "30%",
        minWidth: "40%",
        disableClose: true,
        data: data
      });

    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((data: any) => {

    });
  }

}
