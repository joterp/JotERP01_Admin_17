import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSADDNEWVOYAGECARGOComponent } from './ops-add-new-voyage-cargo/ops-add-new-voyage-cargo.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-cargo-log-main',
  templateUrl: './ops-cargo-log-main.component.html',
  styleUrls: ['./ops-cargo-log-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSCARGOLOGMAINComponent implements OnInit {
  pageSize = 10;

  customFieldsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  NADcustomFieldsFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Voyage Cargo Log`);
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

    get NADCustomFieldsvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.NADcustomFieldsFilterFormGroup = this.fb.group({
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
    this.NADcustomFieldsFilterFormGroup.reset();
    this.NADcustomFieldsFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewCargo(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OPSADDNEWVOYAGECARGOComponent,
      {
        width: "45%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
      
      
  
   
    });
    } 

}
