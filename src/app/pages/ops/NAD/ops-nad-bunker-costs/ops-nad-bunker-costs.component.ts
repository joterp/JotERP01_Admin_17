import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSNADBunkerCostsAddComponent } from './ops-nad-bunker-costs-add/ops-nad-bunker-costs-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-ops-nad-bunker-costs',
  templateUrl: './ops-nad-bunker-costs.component.html',
  styleUrls: ['./ops-nad-bunker-costs.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADBunkerCostsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
   
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Fuel_Type", visible: true, name: "Fuel Type" },
    { property: "Date_Purchased", visible: true, name: "Date Purchased" },
    { property: "Qty_Purchased", visible: true, name: "Qty Purchased" },
    { property: "Bunker_Unit_Price", visible: true, name: "Bunker Unit Price" },
    { property: "Qty_Price", visible: true, name: "Qty Price" },
    { property: "ROB_Unit", visible: true, name: "ROB Unit" },
    { property: "ROB_Qty", visible: true, name: "ROB Qty" },
    { property: "ROB_Date", visible: true, name: "ROB Date" },
    { property: "ROB_Cost", visible: true, name: "ROB Cost" },
    { property: "Is_Opening_Balance", visible: true, name: "	Is Opening Balance" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  NADBunkerCostsFilterForm:UntypedFormGroup;

  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder, private dialog:MatDialog) { 
    this.titleService.setTitle(`Bunker ROBs, Consumptions, Costs`);
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }	

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.NADBunkerCostsFilterForm=this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpMonth:[''],
      drpYear:[''],
      drpFuel_Type:[''],
      radioOpening_Balance:[''],
      radioAll:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);    
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddNewOpeningBalance(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSNADBunkerCostsAddComponent, {
      width: "45%",
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
