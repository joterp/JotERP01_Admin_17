import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { Title } from '@angular/platform-browser';
import { ReplaySubject, Observable, Subject } from "rxjs";

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { AuthGuard } from "src/app/providers/auth/AuthGuard";
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';
import * as XLSX from "xlsx";

import { PURCUnitEditComponent } from '../purc-unit/purc-unit-edit/purc-unit-edit.component';
import { UnitsService } from 'src/app/services/units.service';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-purc-unit',
  templateUrl: './purc-unit.component.html',
  styleUrls: ['./purc-unit.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PURCUnitComponent implements OnInit {
  pageSize = 10;
  // displayedColumns = ['Unit_Name', 'Parent_Type', 'Unit_Short_Name', 'Conversion_Factor', 'action'];
  unitdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 

  loading: boolean;
  unitFilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  AllUnitsData: any = []




  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private _unitService: UnitsService) {


    this.titleService.setTitle(`UNIT PACKING`);
    // this.routeTitle = this.titleService.getTitle();



  }

  @Input()
  columns: ListColumn[] = [
    { property: "Unit_Name", visible: true, name: "Unit_Name" },
    { property: "Parent_Type", visible: true, name: "Parent_Type" },
    { property: "Unit_Short_Name", visible: true, name: "Unit_Short_Name" },
    { property: "Conversion_Factor", visible: true, name: "Conversion_Factor" },
  
    //  { property: "Active_Status", visible: true, name: "Status" },
    { property: "action", visible: true, name: "action" },
  ] as ListColumn[];


  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }




  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.unitFilterFormGroup = this.fb.group({
      txtUnit_Name: [""],
      txtParent_Type: [""],
      txtUnit_Short_Name: [""],
      drpStatus: ["1"]
    });

    this.unitdataSource = new MatTableDataSource();
    this.getUnits();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  saveData(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(PURCUnitEditComponent,
      {
        width: "50%",
        maxHeight: "70%",
        disableClose: true,
        data: data
      });

    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((data: any) => {

      this.getUnits();



    });
  }
  getUnits(url = 'units') {
    this.api.GetDataService1(url).subscribe({
      next: (res) => {
        console.log(res, "res")
        this.AllUnitsData = res;
        this.unitdataSource.data = this.AllUnitsData


      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  deleteUnits(id: number) {
    this._unitService.deleteUnits(id).subscribe(
      (response) => {
        console.log('Delete successful:', response);
        alert('Units Deleted ');
        this.getUnits()
      },
      (error) => {
        console.error('Error during delete:', error);
      }
    );
  }


  editUnits(data: any) {
    const dialogRef = this.dialog.open(PURCUnitEditComponent,
      {
        width: "50%",
        maxHeight: "80%",
        disableClose: true,
        data: data

      }); dialogRef.afterClosed().subscribe((data: any) => {

        this.getUnits();



      });
  }



  ngAfterViewInit() {
    this.unitdataSource.paginator = this.paginator;
    this.unitdataSource.sort = this.sort;
  }


  clearFilter() {
    this.loading = true;
    this.unitFilterFormGroup.reset();
    this.unitFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

}
