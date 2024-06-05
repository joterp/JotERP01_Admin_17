import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCASLSuppTypeDeptMappingEditComponent } from './purc-asl-supp-type-dept-mapping-edit/purc-asl-supp-type-dept-mapping-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-asl-supp-type-dept-mapping',
  templateUrl: './purc-asl-supp-type-dept-mapping.component.html',
  styleUrls: ['./purc-asl-supp-type-dept-mapping.component.scss'], 
  encapsulation: ViewEncapsulation.None,
})
export class PURCASLSuppTypeDeptMappingComponent implements OnInit {
  pageSize = 10;

  deptMappingdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  deptMappingfilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Supplier Type-Department Mapping`);
    }

    @Input()
    columns: ListColumn[] = [
      { property: "Supplier_Type", visible: true, name: "Supplier_Type" },
      { property: "Department", visible: true, name: "Department" },
      { property: "Email", visible: true, name: "Email" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.deptMappingfilterFormGroup = this.fb.group({
      drpSupplier_Type: [""],
      drpDepartment: [""],
      drpStatus: ["1"]
    });
    this.deptMappingdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.deptMappingdataSource.paginator = this.paginator;
    this.deptMappingdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.deptMappingfilterFormGroup.reset();
    this.deptMappingfilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveMapSupplierType(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCASLSuppTypeDeptMappingEditComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
    });
    } 

}
