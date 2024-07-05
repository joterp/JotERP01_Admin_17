import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWSignoffReasonAddComponent } from './crew-signoff-reason-add/crew-signoff-reason-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';

export interface SignOffReason {
  addedBy: string;
  addedByName: string;
  addedOnDate: string;
  editedBy: string;
  editedByName: string;
  editedOnDate: string;
  guid: string;
  id: number;
  isTransient: boolean;
  sign_Off_Reason: string;
  tenantId: string;
}

@Component({
  selector: 'fury-crew-signoff-reason',
  templateUrl: './crew-signoff-reason.component.html',
  styleUrls: ['./crew-signoff-reason.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWSignoffReasonComponent implements OnInit {
  pageSize = 10;
  
  dataSource: MatTableDataSource<SignOffReason>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  signoffReasonFormGroup: UntypedFormGroup;

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
    this.titleService.setTitle(`SignOff Reason`);
    this.dataSource = new MatTableDataSource();
  }

  @Input()
  columns: ListColumn[] = [
    { property: "sign_Off_Reason", visible: true, name: "SignoffReason" },
    { property: "action", visible: true, name: "action" },
  ] as ListColumn[];

  get signoffReasonVisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.fetchSignOffReasons();
    this.sidenavService.setCollapsed(true);
    this.signoffReasonFormGroup = this.fb.group({
      txtSignoff_reason: [""],
      drpStatus: ["1"]
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
    this.signoffReasonFormGroup.reset();
    this.signoffReasonFormGroup.get("drpStatus").patchValue("1");
    this.fetchSignOffReasons();
  }

  fetchSignOffReasons() {
    this.api.getGraphqlDataSignoff().subscribe(response => {
      const signOffReasons: SignOffReason[] = response.data.signOffReason;
      this.dataSource.data = signOffReasons;
    });
  }

  saveSignoffReason(data: object, isEdit: boolean) {
    const dialogRef = this.dialog.open(CREWSignoffReasonAddComponent, {
      width: "35%",
      maxHeight: "90%",
      disableClose: true,
    });
    dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.IsEdit = isEdit;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clearFilter();
      }
    });
  }

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
        this.api.DeleteDataService('v1/SignOffReason', id).subscribe(
          (res: any) => {
            if (Number.isInteger(res)) {
              this.common.ShowMessage("Signoff Deleted Successfully", "notify-success", 3000);
              this.fetchSignOffReasons();
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
