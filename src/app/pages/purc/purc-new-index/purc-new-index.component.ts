import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { PURCNewRequisitionEditComponent } from './purc-new-requisition-edit/purc-new-requisition-edit.component';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-purc-new-index',
  templateUrl: './purc-new-index.component.html',
  styleUrls: ['./purc-new-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCNewIndexComponent implements OnInit {

  departmentControl = new UntypedFormControl([]);
  departmentList: string[] = ['Management', 'Other Stored', 'Repairs', 'Services Rendered', 'Spare Parts', 'Stores'];

  PurchaseIndexFilterForm: UntypedFormGroup;
  AdditionalFilterForm: UntypedFormGroup;
  selectedFileNameImport: string = '';
  panelOpenState = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Requisition#", visible: true, name: "Requisition #" },
    { property: "Rcvd_Date", visible: true, name: "Rcvd Date" },
    { property: "Qtn_Rcvd", visible: true, name: "Qtn Rcvd" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  constructor(private sidenavService: SidenavService, private fb: UntypedFormBuilder, private dialog: MatDialog,private router:Router, private titleService:Title) {

    this.titleService.setTitle(`Purchase Index`);

   }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.PurchaseIndexFilterForm = this.fb.group({
      drpVessel: [''],
      drpDepartment: [''],
      drpCatalogue: [''],
      txtReq_PO_Invoice: [''],
      txtRequisition_Title: [''],
      drpPending_With: [''],
      pickerpodatefrom: [''],
      pickerpodateto: [''],
      radioDelivered_To_Vessel: ['']
    });

    this.AdditionalFilterForm = this.fb.group({
      drpFleet: [''],
      drpSupplier_Type: [''],
      drpSupplier: [''],
      drpAcc_Code: [''],
      drpRequisition_Type: [''],
      radioNew_Reqsn_Status: [''],
      drpReqsn_Raised_by: [''],
      drpPort_Call: [''],
      drpPO_Type: [''],
      radioPO_Type: [''],
      drpInvoice_Status: [''],
      txtInvoice_Amount: [''],
      drpInvoice_Type: [''],
      drpShow_Invoice: [''],
      txtInvoice_Due_From: [''],
      txtInvoice_Due_To: [''],
      txtPayment_Planned_From: [''],
      txtPayment_Planned_To: ['']
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
  onFileSelectedImport(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameImport = inputElement.files[0].name;
    } else {
      this.selectedFileNameImport = '';
    }
  }
  removeUploadedFileimport(): void {
    this.selectedFileNameImport = null; // Reset the selectedFileNameImport
  }

  onDepartmentRemoved(department: string) {
    const departments = this.departmentControl.value as string[];
    this.removeFirst(departments, department);
    this.departmentControl.setValue(departments); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  CreateNewRequisition(data: object) {
    const dialogRef = this.dialog.open(PURCNewRequisitionEditComponent, {
      width: "50%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }
  
  gotoPURC_NewIndex(buttonName:string){
    if(buttonName === 'PURC_QuickRequisition'){
      this.router.navigate(['PURC/PURC_QuickRequisition']);
  }
  }
}
