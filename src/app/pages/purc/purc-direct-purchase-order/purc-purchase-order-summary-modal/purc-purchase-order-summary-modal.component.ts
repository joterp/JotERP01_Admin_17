import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-purc-purchase-order-summary-modal',
  templateUrl: './purc-purchase-order-summary-modal.component.html',
  styleUrls: ['./purc-purchase-order-summary-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCPurchaseOrderSummaryModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;
  ErrorMessage: string = "";
  showAddNewItem:boolean=false;
  showAddItemCatalogue:boolean=false;
  showImportExcelItems:boolean=false;
  selectedFileNameCatalogue: string = '';

  AddItemFormGroup:UntypedFormGroup;
  AddItemCatalogueFilterForm:UntypedFormGroup;
  dataSource: MatTableDataSource<any> | null;

  columns: ListColumn[] = [
    { property: "Drawing_Number", visible: true, name: "Drawing Number" },
    { property: "Part_Number", visible: true, name: "Part Number" },
    { property: "Sub_Catalogue", visible: true, name: "Sub Catalogue" },
    { property: "Item_Description", visible: true, name: "Item Description" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "Order_Qty", visible: true, name: "Order Qty" } ,
    { property: "Unit_Price", visible: true, name: "Unit Price" } 
  ] as ListColumn[];

  pageSize=10;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;
  constructor(private fb:UntypedFormBuilder, private dialogRef: MatDialogRef<PURCPurchaseOrderSummaryModalComponent>,) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
 this.dataSource = new MatTableDataSource();

    if(this.modeltype == "add_item"){
      this.showAddNewItem = true;
      this.showAddItemCatalogue = false;
      this.showImportExcelItems = false;
    }
    else if(this.modeltype == "add_item_from_catalogue"){
      this.showAddItemCatalogue = true;
      this.showAddNewItem = false;
      this.showImportExcelItems = false;
  }
  else if(this.modeltype == "import_excel_items"){
    this.showImportExcelItems = true;
    this.showAddItemCatalogue = false;
    this.showAddNewItem = false;    
  }

this.AddItemFormGroup = this.fb.group({
     txtDrawing_Number: [''],
     txtPart_Number: [''],
     txtItem_Name: ['', Validators.required],
     txtItem_Description:[''],
     drpUnit:['', Validators.required],
     txtReq_Quantity:['', Validators.required],
     txtUnit_Price:['', Validators.required],
     txtVAT_GST:[''],
     drpAccount_Code:[''],
     txtComments:['']

});
this.AddItemCatalogueFilterForm = this.fb.group({
  drpSubCatalogue:[''],
  txtItem_Details:[''],
  drpExpired:[''],
  txtDrawing:[''],
  txtPart:[''],
  expired_by_date:[''],
})
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

CloseModal() {
  this.dialogRef.close(null);
}

onFileSelectedcatalogue(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files && inputElement.files.length > 0) {
    this.selectedFileNameCatalogue = inputElement.files[0].name;
  } else {
    this.selectedFileNameCatalogue = '';
  }
}
removeUploadedFilecatalogue(): void {
  this.selectedFileNameCatalogue = null; // Reset the selectedFileNameCatalogue
}

}
