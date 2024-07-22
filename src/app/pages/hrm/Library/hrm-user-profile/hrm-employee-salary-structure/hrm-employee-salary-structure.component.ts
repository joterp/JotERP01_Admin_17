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
import { HrmEmployeeSalaryStructureAddComponent } from './hrm-employee-salary-structure-add/hrm-employee-salary-structure-add.component';

@Component({
  selector: 'fury-hrm-employee-salary-structure',
  templateUrl: './hrm-employee-salary-structure.component.html',
  styleUrl: './hrm-employee-salary-structure.component.scss'
})
export class HrmEmployeeSalaryStructureComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationsQuesFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Employee Salary Structure`);
    }
  @Input()
  columns: ListColumn[] = [
   
    { property: "Parent", visible: true, name: "Parent" },
    { property: "Salary_Component", visible: true, name: "Salary_Component" },
    { property: "Auto_Calculation", visible: true, name: "Auto_Calculation" },
    { property: "Salary_Type", visible: true, name: "Salary_Type" },
    { property: "Sort_Order", visible: true, name: "Parent" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  get evaluationsQuesvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.evaluationsQuesFormGroup = this.fb.group({
      txtCategory: [""],
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
    this.evaluationsQuesFormGroup.reset();
    this.evaluationsQuesFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new  Error('Method not implemented.');
  }
  saveEvaluationQueCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmEmployeeSalaryStructureAddComponent,
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
