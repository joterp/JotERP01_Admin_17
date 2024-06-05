import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { PURCApproveSupplierAddContactModalComponent } from '../../purc-approve-supplier/purc-approve-supplier-add-contact-modal/purc-approve-supplier-add-contact-modal.component';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-purc-contract-module-edit',
  templateUrl: './purc-contract-module-edit.component.html',
  styleUrls: ['./purc-contract-module-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCContractModuleEditComponent implements OnInit {

  ContractModuleDetailsFormGroup:UntypedFormGroup;
  SelectedItemsFormGroup:UntypedFormGroup;
  ErrorMessage: string = "";

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  itemlibrarycolumns: ListColumn[] = [
    { property: "Department", visible: true, name: "Department" },
    { property: "Catalogue", visible: true, name: "Catalogue" },
    { property: "SubCatalogue", visible: true, name: "SubCatalogue" },
    { property: "Drawing_No", visible: true, name: "Drawing No" },
    { property: "Check-5", visible: true, name: "Check 5" }
 
  ] as ListColumn[];

  includeditemscolumns: ListColumn[] = [
    { property: "Department", visible: true, name: "Department" },
    { property: "Catalogue", visible: true, name: "Catalogue" },
    { property: "SubCatalogue", visible: true, name: "SubCatalogue" },
    { property: "Drawing_No", visible: true, name: "Drawing No" },
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Unit_Price", visible: true, name: "Unit Price" }
 
  ] as ListColumn[];

  pageSize = 10;
  ItemLibrarydataSource: MatTableDataSource<any> | null;
  IncludedItemsdataSource: MatTableDataSource<any> | null;

  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog: MatDialog) { }
  get visibleColumnsItemLibrary() {
    return this.itemlibrarycolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsIncludedItems() {
    return this.includeditemscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {

    this.ItemLibrarydataSource = new MatTableDataSource();
    this.IncludedItemsdataSource = new MatTableDataSource();

  this.ContractModuleDetailsFormGroup = this.fb.group({
    drpSupplier:['', Validators.required],
    drpPort:['', Validators.required],
    txtSupplier_Ref_No:['', Validators.required],
    valid_from:['', Validators.required],
    valid_to:['', Validators.required],
    txtRemark:['']
  });

  this.SelectedItemsFormGroup = this.fb.group({
      drpCurrency:[''],
      txtUnit_Price:['']
  })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.ItemLibrarydataSource.paginator = this.paginator;
    this.ItemLibrarydataSource.sort = this.sort;
    this.IncludedItemsdataSource.paginator = this.paginator;
    this.IncludedItemsdataSource.sort = this.sort;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(PURCApproveSupplierAddContactModalComponent, {
      width: "50%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }
}
