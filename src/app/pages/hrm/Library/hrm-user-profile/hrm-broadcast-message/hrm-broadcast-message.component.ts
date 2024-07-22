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
import { HrmBroadcastMessageAddComponent } from './hrm-broadcast-message-add/hrm-broadcast-message-add.component';
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter, NgxMatDateFormats } from '@angular-material-components/datetime-picker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomNgxDatetimeAdapter } from 'src/app/pages/Survey_Certificate/CustomNgxDatetimeAdapter';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "DD MMM YYYY HH:mm",
  },
  display: {
    dateInput: "DD MMM YYYY HH:mm",
    monthYearLabel: "MMM YYYY HH:mm",
    dateA11yLabel: "DD MMM YYYY HH:mm",
    monthYearA11yLabel: "MMMM YYYY HH:mm",
  },

}
		

@Component({
  selector: 'fury-hrm-broadcast-message',
  templateUrl: './hrm-broadcast-message.component.html',
  styleUrls: ['./hrm-broadcast-message.component.scss'],
  providers: [
      {
        provide: NgxMatDateAdapter,
        useClass: CustomNgxDatetimeAdapter,
        deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS],
      },
  
      { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    ],
})
export class HrmBroadcastMessageComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  broadcastMsgFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Broadcast Message`);
    }
  @Input()
  columns: ListColumn[] = [
    { property: "Department", visible: true, name: "Department" },
    { property: "BM_Code", visible: true, name: "BM_Code" },
    { property: "Date_Sent", visible: true, name: "Date_Sent" }, 
    { property: "Subject", visible: true, name: "Subject" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Sent_to_user", visible: true, name: "Sent_to_user" },
    { property: "Read_By_User", visible: true, name: "Read_By_User" },
    { property: "Actioned_By_User", visible: true, name: "Actioned_By_User" },
    { property: "Active", visible: true, name: "Active" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.broadcastMsgFormGroup = this.fb.group({
      Department: [""],
      Date_Sent:[""],
      BM_Code: [""],
      Subject:[""],
      Primary_Category: [""],
      Secondary_Category:[""],
      drpStatus: ["1"],
      Status:[""],
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
    this.broadcastMsgFormGroup.reset();
    this.broadcastMsgFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new  Error('Method not implemented.');
  }
  saveBroadcastMessage(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmBroadcastMessageAddComponent,
      {
        width: "65%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

    dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{

      });
    } 



}
