import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-ops-bunker-robs-modal',
  templateUrl: './ops-bunker-robs-modal.component.html',
  styleUrls: ['./ops-bunker-robs-modal.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSBunkerROBsModalComponent implements OnInit {

  modeltitle:string="";

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  bunkerrobscolumns: ListColumn[] = [
    { property: "Vessel_Name", visible: true, name: "Vessel Name" },
    { property: "Fuel_Type", visible: true, name: "Fleet" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "ROB_Qty", visible: true, name: "ROB Qty" },
    { property: "ROB_Cost", visible: true, name: "ROB Cost" },
    { property: "Current_Month_Consumption", visible: true, name: "Current Month Consumption" },
    { property: "Consumption_Cost", visible: true, name: "Consumption Cost" },
 
  ] as ListColumn[];
  pageSize = 10;
  PortCallsHistrydataSource:MatTableDataSource<any> | null;
  constructor(private dialogRef:MatDialogRef<OPSBunkerROBsModalComponent>) { }

  get visibleColumnsBunkerROBs () {
    return this.bunkerrobscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
   
  ngOnInit(): void {
    this.PortCallsHistrydataSource = new MatTableDataSource();
  }

  CloseModal() {
    this.dialogRef.close(null);
  }	
    
}
