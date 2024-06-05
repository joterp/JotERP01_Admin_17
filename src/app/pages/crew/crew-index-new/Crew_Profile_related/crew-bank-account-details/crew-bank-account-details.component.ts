import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWBankAccountDetailsAddModalComponent } from './crew-bank-account-details-add-modal/crew-bank-account-details-add-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-bank-account-details',
  templateUrl: './crew-bank-account-details.component.html',
  styleUrls: ['./crew-bank-account-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWBankAccountDetailsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Bank_Name", visible: true, name: "Bank Name" },
    { property: "Beneficiary_Name", visible: true, name: "Beneficiary Name" },
    { property: "Account_Number", visible: true, name: "Account Number" },
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Is_Default", visible: true, name: "Is Default?" },
    { property: "Is_Verified", visible: true, name: "Is Verified?" },
    { property: "Action", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  constructor(private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource()
  }

  
  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWBankAccountDetailsAddModalComponent, {
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
