import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { AccountsDRCQUOCompanyAddComponent } from './accounts-drc-quo-company-add/accounts-drc-quo-company-add.component';

@Component({
  selector: 'fury-accounts-drc-quo-company',
  templateUrl: './accounts-drc-quo-company.component.html',
  styleUrl: './accounts-drc-quo-company.component.scss'
})
export class AccountsDRCQUOCompanyComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  serviceprovidersFormGroup: UntypedFormGroup;

  constructor(
    private titleService: Title,
    private api: ApiService,
    private auth: AuthGuard,
    private sidenavService: SidenavService,
    private common: CommonService,
    private dialog: MatDialog,
    private fb: UntypedFormBuilder,
    private http: HttpClient
  ) {
    this.titleService.setTitle('Service Provider');
    this.dataSource = new MatTableDataSource();
  }

  @Input()
  columns: ListColumn[] = [
    { property: 'Service_Provider_Name', visible: true, name: 'Service_Provider_Name' },
    { property: 'Currency', visible: true, name: 'Currency' },
    { property: 'Country', visible: true, name: 'Country' },
    { property: 'Sales_Email', visible: true, name: 'Sales_Email' },
    { property: 'Phone', visible: true, name: 'Phone' }, 
    { property: 'Logo', visible: true, name: 'Logo' },
    { property: 'Chop_Image', visible: true, name: 'Chop_Image' },
    { property: 'action', visible: true, name: 'action' },
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    // this.fetchrankCategory();
    this.sidenavService.setCollapsed(true);
    this.serviceprovidersFormGroup = this.fb.group({
      Service_Name: [""],
      Currency: [""],
      Country: [""],
      drpStatus: ['1'],
    });
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
    this.serviceprovidersFormGroup.reset();
    this.serviceprovidersFormGroup.get('drpStatus').patchValue('1');
    // this.fetchrankCategory();
  }

  // fetchrankCategory() {
  //   this.api.getRanksCategoryData().subscribe(response => {
  //     const rankCategory: RankCategory[] = response.data.rankCategory;
  //     this.dataSource.data = rankCategory;
  //   });
  // }

  saveCode(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(AccountsDRCQUOCompanyAddComponent, {
      width: '35%',
      maxHeight: '90%',
      disableClose: true,
    });
    dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.clearFilter();
      }
    });
  }


 
  // changeStatus(data: any): void {
  //   if (!data || !data.id) {
  //     console.error('Invalid data or missing ID for deletion');
  //     return;
  //   }

  //   const id = data.id;
  //   const dialogRef = this.dialog.open(StatusChangeConfirmation, {
  //     disableClose: false,
  //     data: {
  //       title: data["ACTIVE_STATUS"] ? "Confirm Deletion" : "Confirm Restore",
  //       message: data["ACTIVE_STATUS"]
  //         ? "Are you sure you want to delete this record?"
  //         : "Are you sure you want to restore this record?"
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.api.DeleteDataService('v1/RankCategory', id).subscribe(
  //         (res: any) => {
  //           if (Number.isInteger(res)) {
  //             this.common.ShowMessage("Rank Category Deleted Successfully", "notify-success", 3000);
  //             this.fetchrankCategory();
  //           } else {
  //             this.common.ShowMessage(res["Message"], "notify-error", 6000);
  //           }
  //         },
  //         (error) => {
  //           console.error('Error deleting record', error);
  //           this.common.ShowMessage(error["Message"], "notify-error", 6000);
  //         }
  //       );
  //     }
  //   });
  // }

}
