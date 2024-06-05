import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-purc-contract-module',
  templateUrl: './purc-contract-module.component.html',
  styleUrls: ['./purc-contract-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCContractModuleComponent implements OnInit {

  PurchaseContractFilterForm:UntypedFormGroup;

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Supplier", visible: true, name: "Supplier" },
    { property: "Port", visible: true, name: "Port" },
    { property: "Item_Count", visible: true, name: "Item (Count)" },
    { property: "Supplier_Ref_No", visible: true, name: "Supplier Ref No" },
    { property: "Valid_From", visible: true, name: "Valid From" },
    { property: "Vaid_To", visible: true, name: "Vaid To" },
    { property: "Pending_With", visible: true, name: "Pending With" },
    { property: "Approved", visible: true, name: "Approved" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor(private fb:UntypedFormBuilder, private sidenavService:SidenavService, private router:Router, private titleService:Title) {
    this.titleService.setTitle(`Purchase Contract`);
   }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.PurchaseContractFilterForm = this.fb.group({
      drpSupplier:[''],
      drpPort:[''],
      valid_from:[''],
      valid_from_to:[''],
      txtSupplier_Ref_No:[''],
      radioApproved:['']
    })

  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  gotoPURC_ContractDetails(buttonName:string){
    if(buttonName === 'PURC_Contract_Module_Details'){
     this.router.navigate(['PURC/PURC_Contract_Module_Details']);
    }
}

}
