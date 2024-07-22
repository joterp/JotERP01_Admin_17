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

@Component({
  selector: 'fury-hrm-leaves-assignment',
  templateUrl: './hrm-leaves-assignment.component.html',
  styleUrl: './hrm-leaves-assignment.component.scss'
})
export class HrmLeavesAssignmentComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  leavesStdFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Leaves Assignment`);
    }
  @Input()
  columns: ListColumn[] = [
    { property: "Project", visible: true, name: "Project" },
    { property: "Employee", visible: true, name: "Employee" },
    { property: "Department", visible: true, name: "Department" },
    { property: "Stipulated_LastYear", visible: true, name: "Stipulated_LastYear" },
    { property: "Stipulated_ThisYear", visible: true, name: "Stipulated_ThisYear" },
    { property: "Year", visible: true, name: "Year" },
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
      Year: [""],
      Leave_Type:[""],
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
  }
}
