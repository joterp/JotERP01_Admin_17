import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-ops-nad-cii-calculation-index',
  templateUrl: './ops-nad-cii-calculation-index.component.html',
  styleUrls: ['./ops-nad-cii-calculation-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADCIICalculationIndexComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  accountpayablecolumns: ListColumn[] = [
    { property: "HO", visible: true, name: "HO" },
    { property: "HO_LS", visible: true, name: "HO LS" },
    { property: "HO_VLS", visible: true, name: "HO VLS" },
    { property: "DO", visible: true, name: "DO" },
    { property: "DO_LS", visible: true, name: "DO LS" },
    { property: "DO_VLS", visible: true, name: "DO VLS" },
    { property: "MGO", visible: true, name: "MGO" },
    { property: "MGO_LS", visible: true, name: "MGO LS" },
    { property: "MGO_VLS", visible: true, name: "MGO VLS" },
    { property: "THO", visible: true, name: "THO" },
    { property: "THO_LS", visible: true, name: "THO LS" },
    { property: "THO_VLS", visible: true, name: "THO VLS" },
    { property: "LPG", visible: true, name: "LPG" },
    { property: "LNG", visible: true, name: "LNG" },
    { property: "Methanol", visible: true, name: "Methanol" },
    { property: "Ethanol", visible: true, name: "Ethanol" },
    { property: "HVO", visible: true, name: "HVO" },
    { property: "Other_Fuel", visible: true, name: "Other Fuel" },
  
  ] as ListColumn[];

  pageSize = 10;
  AccountPayabledataSource:MatTableDataSource<any> | null;
  
  CIICalculationIndexFilterForm:UntypedFormGroup;

  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(`CII Calculation Index`);
   }

   get visibleColumnsaccountpayable(){
    return this.accountpayablecolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.AccountPayabledataSource = new MatTableDataSource();

      this.CIICalculationIndexFilterForm = this.fb.group({
           drpFleet:[''],
           drpVessel:[''],
           from_date:[''],
           to_date:[''],
           drpRating_Year:[''],
           drpCargo_Status:['']
      })
  }

    ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.AccountPayabledataSource.paginator = this.paginator;
    this.AccountPayabledataSource.sort = this.sort;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
