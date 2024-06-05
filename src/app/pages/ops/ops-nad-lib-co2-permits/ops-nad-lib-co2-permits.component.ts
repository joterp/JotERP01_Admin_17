import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSCO2PERMITSADDComponent } from './ops-co2-permits-add/ops-co2-permits-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-nad-lib-co2-permits',
  templateUrl: './ops-nad-lib-co2-permits.component.html',
  styleUrls: ['./ops-nad-lib-co2-permits.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADLIBCO2PERMITSComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Area", visible: true, name: "Area" },
    { property: "Permit_Date", visible: true, name: "Permit Date" },
    { property: "Price_Exchange_Rate", visible: true, name: "Price ($)(Exchange Rate*Price (€))" },
    { property: "Exchange_Rate", visible: true, name: "Exchange Rate" },
    { property: "Price", visible: true, name: "Price (€)" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  C02PermitsFilterForm:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private sidenavService:SidenavService, private titleService:Title, private dialog:MatDialog) { 
    this.titleService.setTitle(`CO2 Permits`);
  }
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

     this.C02PermitsFilterForm = this.fb.group({
      txtArea:[''],
      txtPrice:[''],
      drpStatus:['']
     })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  
  AddNewPermit(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSCO2PERMITSADDComponent, {
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


