import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OpsRptAddReportEditComponent } from './ops-rpt-add-report-edit/ops-rpt-add-report-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'fury-ops-rpt-add-report',
  templateUrl: './ops-rpt-add-report.component.html',
  styleUrls: ['./ops-rpt-add-report.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSRPTAddReportComponent implements OnInit {
  pageSize = 10;

  RPTReportdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  ReportListFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
    this.titleService.setTitle(`Reports`);
   }
  @Input()
  columns: ListColumn[] = [
    { property: "Department_Name", visible: true, name: "Department_Name" },
    { property: "Report_Name", visible: true, name: "Report_Name" },
    { property: "Frequency_Days", visible: true, name: "Frequency_Days" },
    { property: "Document_Vesrion", visible: true, name: "Document_Vesrion" },
    { property: "Document_Date", visible: true, name: "Document_Date" },
    { property: "Report_Table_Name", visible: true, name: "Report_Table_Name" },
    { property: "Form_Name", visible: true, name: "Form_Name" },
    { property: "Ack_Reqd_Frm_office", visible: true, name: "Ack_Reqd_Frm_office" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  get ReportListvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.ReportListFilterFormGroup = this.fb.group({
      drpDepartment_Name: [""],
      txtReport_Name: [""],
      txtReport_Table_Name: [""],
      txtForm_Name: [""],
      drpStatus: [""]
     
    });
    this.RPTReportdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.RPTReportdataSource.paginator = this.paginator;
    this.RPTReportdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.ReportListFilterFormGroup.reset();
    this.ReportListFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewReport(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsRptAddReportEditComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
