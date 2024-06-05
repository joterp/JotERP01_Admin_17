import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-ops-agency-po',
  templateUrl: './ops-agency-po.component.html',
  styleUrls: ['./ops-agency-po.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSAgencyPOComponent implements OnInit {

  stringHtml: string = null;
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  AgencyPOForm:UntypedFormGroup;
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  agencypocolumns: ListColumn[] = [
 { property: "Dept", visible: true, name: "Dept" },
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Service_Details", visible: true, name: "Service Details" },
    { property: "Qty", visible: true, name: "Qty" },
    { property: "Unit_Price", visible: true, name: "Unit Price" },
    { property: "Total_Price", visible: true, name: "Total Price" },
    { property: "Approved", visible: true, name: "Approved" },
    { property: "Delivered", visible: true, name: "Delivered" },
    { property: "Comments", visible: true, name: "Comments" },
	
  ] as ListColumn[];

  pageSize = 10;
  AgencyPOdataSource: MatTableDataSource<any> | null;
  

  constructor(private dialogRef:MatDialogRef<OPSAgencyPOComponent>, private fb:UntypedFormBuilder) { }

  get visibleColumnsAgencyPO() {
    return this.agencypocolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  

  ngOnInit(): void {

    this.AgencyPOdataSource = new MatTableDataSource();

    this.AgencyPOForm = this.fb.group({
      drpVessel:['', Validators.required],
      drpTemplate_Type:['', Validators.required],
      drpDepartment:['', Validators.required],
      drpCatalogue:['', Validators.required],
      drpSupplier:['', Validators.required],
      drpAccount_Code:['', Validators.required],
      drpCurrency:['', Validators.required],
      txtDiscount:[''],
      txtPacking:[''],
      txtTruck:[''],
      txtReason_Packing:[''],
      txtBarge:[''],
      txtOther_Charges:[''],
      txtOther_Freight:[''],
      txtVAT_GST:[''],
      txtOther_Charges_Reason:[''],
      txtComments:['']
    });

  }

  ngAfterViewInit(){
    this.AgencyPOdataSource.paginator = this.paginator;
    this.AgencyPOdataSource.sort = this.sort;
	
  }

  CloseModal() {
    this.dialogRef.close(true);
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

}
