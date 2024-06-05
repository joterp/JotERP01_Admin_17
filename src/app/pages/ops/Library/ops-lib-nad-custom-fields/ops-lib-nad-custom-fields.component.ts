import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSLibNadCustomFieldsAddComponent } from './ops-lib-nad-custom-fields-add/ops-lib-nad-custom-fields-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-lib-nad-custom-fields',
  templateUrl: './ops-lib-nad-custom-fields.component.html',
  styleUrls: ['./ops-lib-nad-custom-fields.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSLibNadCustomFieldsComponent implements OnInit {
  pageSize = 10;

  customFieldsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  customFieldsFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`NAD Custom Fields`);

    }
    @Input()
    columns: ListColumn[] = [
      { property: "Field_Name", visible: true, name: "Field_Name" },
      { property: "Field_Unit", visible: true, name: "Field_Unit" },
      { property: "Field_Type", visible: true, name: "Field_Type" },
      { property: "NAD_Type", visible: true, name: "NAD_Type" },
      { property: "NAD_Location", visible: true, name: "NAD_Location" },
      { property: "Remarks", visible: true, name: "Remarks" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get CustomFieldsvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.customFieldsFilterFormGroup = this.fb.group({
      txtField_Name: [""],
      txtField_Unit: [""],
      drpField_Type: [""],
      drpStatus: [""],
      drpNAD_Type: [""],
      drpNAD_Location: [""]
    });
    this.customFieldsdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.customFieldsdataSource.paginator = this.paginator;
    this.customFieldsdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.customFieldsFilterFormGroup.reset();
    this.customFieldsFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNADCustomFields(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OPSLibNadCustomFieldsAddComponent,
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
