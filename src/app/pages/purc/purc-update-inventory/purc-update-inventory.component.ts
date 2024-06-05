import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidebarDirective } from 'src/@fury/shared/sidebar/sidebar.directive';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-purc-update-inventory',
  templateUrl: './purc-update-inventory.component.html',
  styleUrls: ['./purc-update-inventory.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCUpdateInventoryComponent implements OnInit {

  UpdateInventoryFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  updateinventorycolumns: ListColumn[] = [
    { property: "Drawing_No", visible: true, name: "Drawing No" },
    { property: "Part_No", visible: true, name: "Part No" },
    { property: "Short_Desciption", visible: true, name: "Short Desciption" },
    { property: "Current", visible: true, name: "Current" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "ROB", visible: true, name: "ROB" },
    { property: "Inventory_Remarks", visible: true, name: "Inventory Remarks" },
 
  ] as ListColumn[];

	  pageSize = 10;
  UpdateInventorydataSource: MatTableDataSource<any> | null;
  constructor(private fb:UntypedFormBuilder, private sidenavService:SidenavService, private titleService:Title) {
    this.titleService.setTitle(`Update Inventory`);
   }
  get visibleColumnsUpdateLibrary() {
    return this.updateinventorycolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {

    this.UpdateInventorydataSource = new MatTableDataSource();

   this.UpdateInventoryFilterForm = this.fb.group({
    drpVessel:[''],
    drpTemplate_Type:[''],
    drpDepartment:[''],
    txtDescription:[''],
    txtPart_Number:[''],
    txtDrawing_Number:[''],
    txtExpiring_In:[''],
    radioROB_Filter:['']
   })
  }
ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.UpdateInventorydataSource.paginator = this.paginator;
    this.UpdateInventorydataSource.sort = this.sort;
   
    
  }
  
   ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
}
