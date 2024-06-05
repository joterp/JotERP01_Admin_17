import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-items-from-library-add',
  templateUrl: './ops-items-from-library-add.component.html',
  styleUrls: ['./ops-items-from-library-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSItemsFromLibraryAddComponent implements OnInit {
  IsEdit: boolean;

  ItemsLibFilterFormGroup: UntypedFormGroup;
  @Input()
    
  assigncustomcolumns:ListColumn[] = [
   { property: "Category", visible: true, name: "Category" },
   { property: "Item_Type", visible: true, name: "Item_Type" },
   { property: "Item_Name", visible: true, name: "Item_Name" },
   { property: "Model", visible: true, name: "Model" },
   { property: "Serial_Number", visible: true, name: "Serial_Number" },
   { property: "Item_Maker", visible: true, name: "Item_Maker" },
   { property: "Bought_On", visible: true, name: "Bought_On" },
   { property: "Loaned_From", visible: true, name: "Loaned_From" },
   { property: "Box_No", visible: true, name: "Box_No" },
   { property: "PO_Code", visible: true, name: "PO_Code" },
   { property: "PO_Date", visible: true, name: "PO_Date" },
   { property: "Quantity", visible: true, name: "Quantity" },
   { property: "CheckBox", visible: true, name: "CheckBox" },
  ] as ListColumn[];


  @ViewChild("TABLE") table: ElementRef;



 

  @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
 

 
  ItemsLibdataSource :MatTableDataSource<any> | null;
  

  constructor(private dialogRef: MatDialogRef<OPSItemsFromLibraryAddComponent>,
    private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.ItemsLibFilterFormGroup = this.fb.group({
      drpItemsCategory: [""],
      drpItemType: [""],
      txtItem_Name: [""],
   
      
    });
  
    this.ItemsLibdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
   
    this.ItemsLibdataSource.paginator = this.paginator;
  

   }
   get ItemsLibvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  CloseModal() {
    this.dialogRef.close(true);
  }



}
