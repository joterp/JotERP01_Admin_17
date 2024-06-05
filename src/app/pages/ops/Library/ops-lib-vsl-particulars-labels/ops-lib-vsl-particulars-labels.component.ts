import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OpsLibVslParticularsLabelsAddComponent } from './ops-lib-vsl-particulars-labels-add/ops-lib-vsl-particulars-labels-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-ops-lib-vsl-particulars-labels',
  templateUrl: './ops-lib-vsl-particulars-labels.component.html',
  styleUrls: ['./ops-lib-vsl-particulars-labels.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSLIBVSLPARTICULARSLABELSComponent implements OnInit {
  pageSize = 10;

  VesselLabeldataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  VesselLabelFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Vessel Particulars Labels`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Label_Name", visible: true, name: "Label_Name" },
      { property: "Linked_Question", visible: true, name: "Linked_Question" },
     
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get NADCustomFieldsvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.VesselLabelFilterFormGroup = this.fb.group({
      txtField_Name: [""],
      drpStatus: [""],
     
    });
    this.VesselLabeldataSource = new MatTableDataSource();
  
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.VesselLabeldataSource.paginator = this.paginator;
    this.VesselLabeldataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.VesselLabelFilterFormGroup.reset();
    this.VesselLabelFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewLabel(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsLibVslParticularsLabelsAddComponent,
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
