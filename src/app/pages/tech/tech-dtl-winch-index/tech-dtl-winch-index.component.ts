import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { TechDtlWinchIndexAddOpenComponent } from './tech-dtl-winch-index-add-open/tech-dtl-winch-index-add-open.component';
import { LegendProcedureComponent } from './legend-procedure/legend-procedure.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-tech-dtl-winch-index',
  templateUrl: './tech-dtl-winch-index.component.html',
  styleUrls: ['./tech-dtl-winch-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHDTLWINCHIndexComponent implements OnInit {
  pageSize = 10;

  WinchIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator:MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  
  loading: boolean;
  WinchIndexFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Mooring Winches Index`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Winch_Name", visible: true, name: "Winch_Name" },
      { property: "Physical_Location", visible: true, name: "Physical_Location" },
      { property: "Date_Tested", visible: true, name: "Date_Tested" },
      { property: "Actual_BRL", visible: true, name: "Actual_BRL" },
      { property: "Rope_Dia", visible: true, name: "Rope_Dia" },
      { property: "Rope_MBL", visible: true, name: "Rope_MBL" },
      { property: "Design_BHC", visible: true, name: "Design_BHC" },
      { property: "Mooring_Drum_Dia", visible: true, name: "Mooring_Drum_Dia" },
      { property: "Rope_MBL_BRL", visible: true, name: "Rope_MBL_BRL" },
      { property: "Distance", visible: true, name: "Distance" },
      { property: "Hyd_Piston", visible: true, name: "Hyd_Piston" },
      { property: "PD", visible: true, name: "PD" },
      { property: "PA", visible: true, name: "PA" },
      { property: "Remarks", visible: true, name: "Remarks" },
      { property: "Verified", visible: true, name: "Verified" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.WinchIndexFilterFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpWinch_Name: [""],
      Date_Form: [""],
      Date_To: [""],
      drpMark_Verified: ["0"],
      drpStatus: ["2"]
    });
    this.WinchIndexdataSource = new MatTableDataSource();
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.WinchIndexdataSource.paginator = this.paginator;
    this.WinchIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.WinchIndexFilterFormGroup.reset();
    this.WinchIndexFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveBrakeHoldingTest(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(TechDtlWinchIndexAddOpenComponent,
      {
        width: "45%",
      maxHeight: "80%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

    LegProcedure(data: object, IsEdit: boolean) {
      const dialogRef = this.dialog.open(LegendProcedureComponent, {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
       
      });
      dialogRef.componentInstance.IsEdit = IsEdit;
      dialogRef.componentInstance.EditData = data;
  
      dialogRef.afterClosed().subscribe((data: any) => {
       
      });
    }
  
}
