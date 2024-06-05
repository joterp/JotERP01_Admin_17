import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';;
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWPortageBillCashToMasterIndexAddComponent } from './crew-portage-bill-cash-to-master-index-add/crew-portage-bill-cash-to-master-index-add.component';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-portage-bill-cash-to-master-index',
  templateUrl: './crew-portage-bill-cash-to-master-index.component.html',
  styleUrls: ['./crew-portage-bill-cash-to-master-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWPortageBillCashToMasterIndexComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Requested_Date", visible: true, name: "Date" },
    { property: "Requested_Amount", visible: true, name: "Amount" },
    { property: "Requested_Delivery_At_Port", visible: true, name: "Delivery At Port" },
    { property: "Approved_Date", visible: true, name: "Date" },
    { property: "Approved_Amount", visible: true, name: "Amount" },
    { property: "Received_Date", visible: true, name: "Date" },
    { property: "Received_Amount", visible: true, name: "Amount" },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;	

  CashToMasterIndexFilterForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private sidenavService: SidenavService, private titleService: Title, private dialog:MatDialog, private router:Router) {
    this.titleService.setTitle(`Cash To Master Index`)
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.CashToMasterIndexFilterForm = this.fb.group({
      drpVessel: [''],
      drpAgent: [''],
      date_requested_on: [''],
      date_approved_on: [''],
      drpDeliver_at_Port: [''],
      drpActual_Delivery_Port: [''],
      drpStatus: ['']
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

  AddFormData(data: object, modeltitle: string, modeltype: string) {

    const dialogRef = this.dialog.open(CREWPortageBillCashToMasterIndexAddComponent, {
      width: "55%",
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
