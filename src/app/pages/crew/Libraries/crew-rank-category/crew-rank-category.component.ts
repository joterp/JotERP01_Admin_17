import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWRankCategoryAddComponent } from './crew-rank-category-add/crew-rank-category-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';

export interface RankCategory {
  id: number;
  rankCategory: string;
}

@Component({
  selector: 'fury-crew-rank-category',
  templateUrl: './crew-rank-category.component.html',
  styleUrls: ['./crew-rank-category.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankCategoryComponent implements OnInit {
  pageSize = 10;
  private apiUrl = 'http://localhost:5062/api/v1/RankCategory';
  private authToken = 'your-auth-token-here';
  dataSource: MatTableDataSource<RankCategory>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  rankCategoryFormGroup: UntypedFormGroup;

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
    this.titleService.setTitle('Rank Category');
    this.dataSource = new MatTableDataSource();
  }

  @Input()
  columns: ListColumn[] = [
    { property: 'ID', visible: true, name: 'ID' },
    { property: 'Category', visible: true, name: 'Category' },
    { property: 'action', visible: true, name: 'action' },
  ] as ListColumn[];

  get rankCategoryvisibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.fetchrankCategory();
    this.sidenavService.setCollapsed(true);
    this.rankCategoryFormGroup = this.fb.group({
      txtCategory: [""],
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
    this.rankCategoryFormGroup.reset();
    this.rankCategoryFormGroup.get('drpStatus').patchValue('1');
    this.fetchrankCategory();
  }

  fetchrankCategory() {
    this.api.getRanksCategoryData().subscribe(response => {
      const rankCategory: RankCategory[] = response.data.rankCategory;
      this.dataSource.data = rankCategory;
    });
  }

  saveRankCategory(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(CREWRankCategoryAddComponent, {
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

  // ChangeStatus(data: any): void {
  //   if (!data || !data.id) {
  //     console.error('Invalid data or missing ID for deletion');
  //     return;
  //   }

  //   const id = data.id;
  //   this.api.DeleteDataService('v1/RankCategory', id).subscribe(
  //     (res: any) => {
  //       if (Number.isInteger(res)) {
  //         this.common.ShowMessage('Rank Category Deleted Successfully', 'notify-success', 3000);
  //       } else {
  //         this.common.ShowMessage(res['Message'], 'notify-error', 6000);
  //       }
  //     },
  //     (error) => {
  //       console.error('Error deleting record', error);
  //       this.common.ShowMessage(error['Message'], 'notify-error', 6000);
  //     }
  //   );
  // }
  changeStatus(data: any): void {
    if (!data || !data.id) {
      console.error('Invalid data or missing ID for deletion');
      return;
    }

    const id = data.id;
    const dialogRef = this.dialog.open(StatusChangeConfirmation, {
      disableClose: false,
      data: {
        title: data["ACTIVE_STATUS"] ? "Confirm Deletion" : "Confirm Restore",
        message: data["ACTIVE_STATUS"]
          ? "Are you sure you want to delete this record?"
          : "Are you sure you want to restore this record?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.DeleteDataService('v1/RankCategory', id).subscribe(
          (res: any) => {
            if (Number.isInteger(res)) {
              this.common.ShowMessage("Rank Category Deleted Successfully", "notify-success", 3000);
              this.fetchrankCategory();
            } else {
              this.common.ShowMessage(res["Message"], "notify-error", 6000);
            }
          },
          (error) => {
            console.error('Error deleting record', error);
            this.common.ShowMessage(error["Message"], "notify-error", 6000);
          }
        );
      }
    });
  }
}
