import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OpsLibOmrProductEditComponent } from './ops-lib-omr-product-edit/ops-lib-omr-product-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-lib-omr-product',
  templateUrl: './ops-lib-omr-product.component.html',
  styleUrls: ['./ops-lib-omr-product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSLIBOMRPRODUCTComponent implements OnInit {
  pageSize = 10;

  OMRproductdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  OMRProductFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`OMR Product Name`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Product_Name", visible: true, name: "Product_Name" },
      { property: "Product_Unit", visible: true, name: "Product_Unit" },
      { property: "Adjust_sort_order", visible: true, name: "Adjust_sort_order" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get OMRProductvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.OMRProductFilterFormGroup = this.fb.group({
      txtProduct_Name: [""],
      txtProduct_Unit: [""],
      drpStatus: ["1"]
    });
    this.OMRproductdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.OMRproductdataSource.paginator = this.paginator;
    this.OMRproductdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.OMRProductFilterFormGroup.reset();
    this.OMRProductFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewProduct(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsLibOmrProductEditComponent,
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
