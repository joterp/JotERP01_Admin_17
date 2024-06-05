import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { PURCAddShipManagerCommissionComponent } from './purc-add-ship-manager-commission/purc-add-ship-manager-commission.component';
import { PURCInvoiceModalComponent } from './purc-invoice-modal/purc-invoice-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-ship-manager-commission',
  templateUrl: './purc-ship-manager-commission.component.html',
  styleUrls: ['./purc-ship-manager-commission.component.scss'], 
  encapsulation: ViewEncapsulation.None,
})
export class PURCShipManagerCommissionComponent implements OnInit {

  panelOpenState = false;
  AdditionalFilterForm:UntypedFormGroup;
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Requisition#", visible: true, name: "Requisition #" },
    { property: "Purchase_Date", visible: true, name: "Date" },
    { property: "Purchase_CUR", visible: true, name: "CUR" },
    { property: "Purchase_Value", visible: true, name: "Value" },
    { property: "Invoice_Date", visible: true, name: "Date" },
    { property: "Acct_Code", visible: true, name: "Acct Code" },
    { property: "Invoice#", visible: true, name: "Invoice" },
    { property: "Invoice_CUR", visible: true, name: "CUR" },
    { property: "Invoice_Value", visible: true, name: "Value" },
    { property: "Invoice_Date", visible: true, name: "Date" },
    { property: "%", visible: true, name: "%" },
    { property: "Amount", visible: true, name: "Amount" },
    { property: "Commission_CUR", visible: true, name: "CUR" },

    
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.AdditionalFilterForm = this.fb.group({
      drpVessel:[''],
      drpSupplier:[''],
      drpStages:[''],
      drpCase_Status:[''],
      PO_From:[''],
      PO_From_To:[''],
      Invoice_From:[''],
      Invoice_To:[''],
      txtReqsn_PO_INV:['']
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
  SaveData() {
    const dialogRef = this.dialog.open(PURCAddShipManagerCommissionComponent, {
      width: "35%",
      maxHeight: "60%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }
  ShowInvoiceData() {
    const dialogRef = this.dialog.open(PURCInvoiceModalComponent, {
      width: "30%",
      maxHeight: "60%",
      disableClose: true,
      panelClass:'icon-outside',
    });
    // dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

}
