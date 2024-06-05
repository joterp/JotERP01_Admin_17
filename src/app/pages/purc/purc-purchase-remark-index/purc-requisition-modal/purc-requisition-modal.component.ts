import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { PURCRequisitionItemDescModalComponent } from '../purc-requisition-item-desc-modal/purc-requisition-item-desc-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-requisition-modal',
  templateUrl: './purc-requisition-modal.component.html',
  styleUrls: ['./purc-requisition-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCRequisitionModalComponent implements OnInit {


  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  pageSize = 10;

  requisitioncolumns: ListColumn[] = [
    { property: "SNo", visible: true, name: "S.No" },
    { property: "Part_Number", visible: true, name: "Part Number" },
    { property: "Item_Description", visible: true, name: "Item Description" },
    { property: "Subcatalogue", visible: true, name: "Subcatalogue" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "ROB", visible: true, name: "ROB" },
    { property: "Req_Qty", visible: true, name: "Req Qty" },
    { property: "Comments", visible: true, name: "Comments" },
  ] as ListColumn[];

  RequisitiondataSource: MatTableDataSource<any> | null;

  constructor(private dialogRef: MatDialogRef<PURCRequisitionModalComponent>,private api:ApiService,private dialog: MatDialog,) { }

  get visibleColumnsRequisition() {
    return this.requisitioncolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }


  ngOnInit(): void {

    this.RequisitiondataSource = new MatTableDataSource();
    
  }

  ngAfterViewInit() {
    this.RequisitiondataSource.paginator = this.paginator;
    this.RequisitiondataSource.sort = this.sort;
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

  RequisitionItemDesc(data: object) {
    const dialogRef = this.dialog.open(PURCRequisitionItemDescModalComponent, {
      maxWidth: "50%",
      maxHeight: "90%",
      // height: '350px', 
      disableClose: true,
      position: {left:'385px'} 
    });
    // dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }
  
}
