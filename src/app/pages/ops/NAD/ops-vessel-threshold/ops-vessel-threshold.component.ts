import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSVesselThresholdAddComponent } from './ops-vessel-threshold-add/ops-vessel-threshold-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-vessel-threshold',
  templateUrl: './ops-vessel-threshold.component.html',
  styleUrls: ['./ops-vessel-threshold.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSVesselThresholdComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel_Name", visible: true, name: "Vessel Name" },
    { property: "Threshold_Type", visible: true, name: "Threshold Type" },
    { property: "State", visible: true, name: "State" },
    { property: "Speed_Upper_Limit", visible: true, name: "Speed Upper-Limit (Max)" },
    { property: "Min_Value", visible: true, name: "Min Value (In MT Or Ltrs) " },
    { property: "Max_Value", visible: true, name: "Max Value (In MT Or Ltrs)" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  VesselThresholdFilterForm:UntypedFormGroup;
  
  constructor(private titleService:Title, private sidenavService:SidenavService, private dialog:MatDialog) { 
    this.titleService.setTitle(`Vessel Threshold`);
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  AddNewThreshold(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSVesselThresholdAddComponent, {
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
