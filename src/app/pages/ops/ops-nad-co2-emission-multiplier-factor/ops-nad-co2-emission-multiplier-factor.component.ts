import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSNADCO2EmissionMultiplierFactorAddComponent } from './ops-nad-co2-emission-multiplier-factor-add/ops-nad-co2-emission-multiplier-factor-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-ops-nad-co2-emission-multiplier-factor',
  templateUrl: './ops-nad-co2-emission-multiplier-factor.component.html',
  styleUrls: ['./ops-nad-co2-emission-multiplier-factor.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADCO2EmissionMultiplierFactorComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Fuel_Type", visible: true, name: "Fuel Type" },
    { property: "CO2_Emission_Factor", visible: true, name: "CO2 Emission Factor" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  C02EmissionFactorFilterForm:UntypedFormGroup;
  
  constructor(private fb:UntypedFormBuilder, private titleService:Title, private sidenavService:SidenavService, private dialog:MatDialog) {
    this.titleService.setTitle(`CO2 Emission Multiplier Factor`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource();

      this.C02EmissionFactorFilterForm = this.fb.group({
        drpFuel_Type : [''],
        drpStatus : ['']
      })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  
  AddNewEmissionFactor(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSNADCO2EmissionMultiplierFactorAddComponent, {
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
