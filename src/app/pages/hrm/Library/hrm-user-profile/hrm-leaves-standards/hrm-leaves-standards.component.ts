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
import { HrmLeavesStandardsAddComponent } from './hrm-leaves-standards-add/hrm-leaves-standards-add.component';

@Component({
  selector: 'fury-hrm-leaves-standards',
  templateUrl: './hrm-leaves-standards.component.html',
  styleUrl: './hrm-leaves-standards.component.scss'
})
export class HrmLeavesStandardsComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  leavesStdFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Leaves Standards`);
    }
  @Input()
  columns: ListColumn[] = [
    { property: "Company", visible: true, name: "Company" },
    { property: "Leaves_Type", visible: true, name: "Leaves_Type" },
    { property: "Standards_No_Of_Days", visible: true, name: "Standards_No_Of_Days" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.leavesStdFormGroup = this.fb.group({
      Company: [""],
      Leave_Type:[""],
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
    this.leavesStdFormGroup.reset();
    this.leavesStdFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new  Error('Method not implemented.');
  }
  saveEvaluationQueCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmLeavesStandardsAddComponent,
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
