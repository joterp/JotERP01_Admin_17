import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCDepartmentAddComponent } from './purc-department-add/purc-department-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-purc-department',
  templateUrl: './purc-department.component.html',
  styleUrls: ['./purc-department.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCDepartmentComponent implements OnInit {
  pageSize = 10;

  departmentdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  departmentFilterFormGroup: UntypedFormGroup;



  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Purchase Department`);

     }

    @Input()
    columns: ListColumn[] = [
      { property: "Department", visible: true, name: "Department" },
      { property: "Department_Short_Code", visible: true, name: "Department_Short_Code" },
      { property: "Form_Type", visible: true, name: "Form_Type" },
      { property: "AC_Classification", visible: true, name: "AC_Classification" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get purcdeptvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.departmentFilterFormGroup = this.fb.group({
      txtDept_Name: [""],
      txtDept_Short_Code: [""],
      drpForm_Type: [""],
      txtAC_Classification: [""],
      drpStatus: ["1"]
    });
    this.departmentdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.departmentdataSource.paginator = this.paginator;
    this.departmentdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.departmentFilterFormGroup.reset();
    this.departmentFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveDepartment(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCDepartmentAddComponent,
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
