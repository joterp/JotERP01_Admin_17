import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSThresholdRemarkUpdateComponent } from './ops-threshold-remark-update/ops-threshold-remark-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-ops-nad-charter-party-cons-index',
  templateUrl: './ops-nad-charter-party-cons-index.component.html',
  styleUrls: ['./ops-nad-charter-party-cons-index.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADCHARTERPARTYCONSINDEXComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "HFO_CP", visible: true, name: "HFO" },
    { property: "MDO_CP", visible: true, name: "MDO" },
    { property: "MGO_CP", visible: true, name: "MGO" },
    { property: "THO_CP", visible: true, name: "THO" },
    { property: "HFO_NAD_Consumptions", visible: true, name: "HFO" },
    { property: "MDO_NAD_Consumptions", visible: true, name: "MDO" },
    { property: "MGO_NAD_Consumptions", visible: true, name: "MGO" },  
    { property: "THO_NAD_Consumptions", visible: true, name: "THO" },
    { property: "HFO_Savings", visible: true, name: "HFO" },  
    { property: "MDO_Savings", visible: true, name: "MDO" },  
    { property: "MGO_Savings", visible: true, name: "MGO" },  
    { property: "THO_Savings", visible: true, name: "THO" },  
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  CPConsumptionsIndexFilterForm: UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder, private dialog: MatDialog) {
    this.titleService.setTitle(`CP Consumptions' Index`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.CPConsumptionsIndexFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpVoyage:[''],
      drpCargo_State:[''],
      Report_From:[''],
      Report_To:[''],
      drpLocation:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
  }

  UpdateThresholdRemark(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSThresholdRemarkUpdateComponent, {
      width: "40%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.modeltitle = modeltitle;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

}
