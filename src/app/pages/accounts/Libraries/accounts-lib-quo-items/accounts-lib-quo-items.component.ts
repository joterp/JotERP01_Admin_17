import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { RankCategory } from 'src/app/pages/crew/Libraries/crew-rank-category/crew-rank-category.component';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { AccountsLibQUOItemsAddComponent } from './accounts-lib-quo-items-add/accounts-lib-quo-items-add.component';

@Component({
  selector: 'fury-accounts-lib-quo-items',
  templateUrl: './accounts-lib-quo-items.component.html',
  styleUrl: './accounts-lib-quo-items.component.scss'
})
export class AccountsLibQUOItemsComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  QuotationFormGroup: UntypedFormGroup;

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
    this.titleService.setTitle('Q&I Items');
    this.dataSource = new MatTableDataSource();
  }

  @Input()
  columns: ListColumn[] = [
    { property: 'Category', visible: true, name: 'Category' },
    { property: 'Parent_Item', visible: true, name: 'Parent_Item' },
    { property: 'Item', visible: true, name: 'Item' },
    { property: 'Unit', visible: true, name: 'Unit' },

    { property: 'Quantity', visible: true, name: 'Quantity' },
    { property: 'Unit_Rate', visible: true, name: 'Unit_Rate' },
    { property: 'Amount', visible: true, name: 'Amount' },
    { property: 'Currency', visible: true, name: 'Currency' },
    { property: 'Remarks', visible: true, name: 'Remarks' },
    { property: 'action', visible: true, name: 'action' },
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    // this.fetchrankCategory();
    this.sidenavService.setCollapsed(true);
    this.QuotationFormGroup = this.fb.group({
      Category: [""],
      Parent_Item: [""],
      Item: [""],
      Remark: [""],
      drpStatus: ['1']
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
    this.QuotationFormGroup.reset();
    this.QuotationFormGroup.get('drpStatus').patchValue('1');
    // this.fetchrankCategory();
  }

  // fetchrankCategory() {
  //   this.api.getRanksCategoryData().subscribe(response => {
  //     const rankCategory: RankCategory[] = response.data.rankCategory;
  //     this.dataSource.data = rankCategory;
  //   });
  // }

  saveItem(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(AccountsLibQUOItemsAddComponent, {
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
