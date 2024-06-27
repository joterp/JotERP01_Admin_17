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
import { AdminCompanyBankAccountAddComponent } from './admin-company-bank-account-add/admin-company-bank-account-add.component';

@Component({
  selector: 'fury-admin-company-bank-account',
  templateUrl: './admin-company-bank-account.component.html',
  styleUrl: './admin-company-bank-account.component.scss'
})
export class AdminCompanyBankAccountComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  bankAccountFormGroup: UntypedFormGroup;

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
    this.titleService.setTitle('Company Bank Account');
    this.dataSource = new MatTableDataSource();
  }

  @Input()
  columns: ListColumn[] = [
    { property: 'Company_Name', visible: true, name: 'Company_Name' },
    { property: 'Bank_Name', visible: true, name: 'Bank_Name' },
    { property: 'Account_Number', visible: true, name: 'Account_Number' },
    { property: 'Currency', visible: true, name: 'Currency' },
    { property: 'Country', visible: true, name: 'Country' },
    { property: 'City', visible: true, name: 'City' },
    { property: 'Bank_Address', visible: true, name: 'Bank_Address' },
    { property: 'Swift_Code', visible: true, name: 'Swift_Code' },
    { property: 'Remarks', visible: true, name: 'Remarks' },
    { property: 'action', visible: true, name: 'action' },
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    // this.fetchrankCategory();
    this.sidenavService.setCollapsed(true);
    this.bankAccountFormGroup = this.fb.group({
      Company_Name: [""],
      Bank_Name: [""],
      AC_NO: [""],
      Country: [""],
      Currency: [""],
      Bank_Add: [""],
      drpStatus: ["1"],

   
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
    this.bankAccountFormGroup.reset();
    this.bankAccountFormGroup.get('drpStatus').patchValue('1');
    // this.fetchrankCategory();
  }

  // fetchrankCategory() {
  //   this.api.getRanksCategoryData().subscribe(response => {
  //     const rankCategory: RankCategory[] = response.data.rankCategory;
  //     this.dataSource.data = rankCategory;
  //   });
  // }

  saveVessel(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(AdminCompanyBankAccountAddComponent, {
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
