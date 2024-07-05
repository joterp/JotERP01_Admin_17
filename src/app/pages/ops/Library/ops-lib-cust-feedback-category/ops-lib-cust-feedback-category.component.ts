import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

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
import { OpsLibCustFeedbackCategoryAddComponent } from './ops-lib-cust-feedback-category-add/ops-lib-cust-feedback-category-add.component';

@Component({
  selector: 'fury-ops-lib-cust-feedback-category',
  templateUrl: './ops-lib-cust-feedback-category.component.html',
  styleUrl: './ops-lib-cust-feedback-category.component.scss'
})
export class OpsLibCustFeedbackCategoryComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  feedbackCategoryFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Port-Call Feedback Category`);
    }
    @Input()
    columns: ListColumn[] = [
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
    this.feedbackCategoryFilterFormGroup = this.fb.group({
      Category_Name: [""],
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
    this.feedbackCategoryFilterFormGroup.reset();
    this.feedbackCategoryFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveFeedbackCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsLibCustFeedbackCategoryAddComponent,
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
