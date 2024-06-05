import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { PURCApproveSupplierAddContactModalComponent } from '../purc-approve-supplier-add-contact-modal/purc-approve-supplier-add-contact-modal.component';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-approve-supplier-edit',
  templateUrl: './purc-approve-supplier-edit.component.html',
  styleUrls: ['./purc-approve-supplier-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PURCApproveSupplierEditComponent implements OnInit {

  ErrorMessage: string = "";
  ApproveSupplierFormGroup:UntypedFormGroup;
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Department", visible: true, name: "Department" },
    { property: "Name", visible: true, name: "Name" },
    { property: "City", visible: true, name: "City" },
    { property: "Mobile", visible: true, name: "Mobile" },
    { property: "Email", visible: true, name: "Email" } 
  ] as ListColumn[];

  bankdetailcolumns: ListColumn[] = [
    { property: "Account_Number", visible: true, name: "Account Number" },
    { property: "Beneficiary_Name", visible: true, name: "Beneficiary Name" },
    { property: "Bank_Name", visible: true, name: "Bank Name" },
    { property: "Verified_By", visible: true, name: "Verified By" },
    { property: "Verified_On", visible: true, name: "Verified On" } 
  ] as ListColumn[];

  assignscopecolumns: ListColumn[] = [
    { property: "Scope", visible: true, name: "Scope" },
    { property: "Port", visible: true, name: "Port" },
  ] as ListColumn[];

  evaluationdetailscolumns: ListColumn[] = [
    { property: "cadTrade.total", visible: true, name: "cadTrade.total" },
    { property: "cadTrade.amount", visible: true, name: "cadTrade.amount" },
    { property: "data2.total", visible: true, name: "data2.total" },
  ] as ListColumn[];

  supplierdocumentscolumns:ListColumn[] = [
    { property: "Document_Type", visible: true, name: "Document Type" },
    { property: "Document_Ref_No", visible: true, name: "Document Ref No" },
    { property: "Date_of_Issue", visible: true, name: "Date of Issue" },
    { property: "Date_of_Expiry", visible: true, name: "Date of Expiry" },
    { property: "Expiry_NA", visible: true, name: "Expiry NA" },
    { property: "Is_Mandatory", visible: true, name: "Is Mandatory" },
    { property: "Is_Confidential", visible: true, name: "Is Confidential" },
    { property: "Attachment", visible: true, name: "Attachment" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  supplierfeedbackcolumns: ListColumn[] = [
    { property: "Date_time", visible: true, name: "Date time" },
    { property: "Reported_By", visible: true, name: "Reported By" },
    { property: "Category", visible: true, name: "Category" },
    { property: "Feedback", visible: true, name: "Feedback/Remarks" },
  ] as ListColumn[];

  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  BankDetaildataSource: MatTableDataSource<any> | null;
  AssignScopedataSource: MatTableDataSource<any> | null;
  EvaluationDetailsdataSource:MatTableDataSource<any> | null;
  SupplierDocumentsdataSource:MatTableDataSource<any> | null;
  SupplierFeedbackdataSource:MatTableDataSource<any> | null;

  constructor(private fb:UntypedFormBuilder, private dialog: MatDialog, private router:Router, private sidenavService:SidenavService) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsbankdetail() {
    return this.bankdetailcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsAssignScope() {
    return this.assignscopecolumns
    .filter((column) => column.visible)
    .map((column) => column.property);
}
get visibleColumnsevaluationdetails(){
  return this.evaluationdetailscolumns
    .filter((column) => column.visible)
    .map((column) => column.property);
}

get visibleColumnssupplierdocuments(){
  return this.supplierdocumentscolumns
    .filter((column) => column.visible)
    .map((column) => column.property);
}

get visibleColumnsSupplierFeedback(){
  return this.supplierfeedbackcolumns
    .filter((column) => column.visible)
    .map((column) => column.property);
}
  

  ngOnInit(): void {
 this.dataSource = new MatTableDataSource();
 this.BankDetaildataSource = new MatTableDataSource();
this.AssignScopedataSource = new MatTableDataSource();
this.EvaluationDetailsdataSource = new MatTableDataSource();
this.SupplierDocumentsdataSource = new MatTableDataSource();
this.SupplierFeedbackdataSource = new MatTableDataSource();

    this.ApproveSupplierFormGroup = this.fb.group({
      txtSupplier_Name:['', Validators.required],
      drpType:['', Validators.required],
      txtPassword:[''],
      txtRegistration_Number:['', Validators.required],
      date_registered:[''],
      txtGST_VATRegistration_Number:[''],
      txtEvaluation_frequency:['', Validators.required],
      txtCredit_terms:['', Validators.required],
      txtInternal_Reference:[''],
      drpCurrency:['', Validators.required],
      txtDraft:[''],
      radioPreferred_RFQ_Format:[''],
      radioPO_Confirm:[''],
      txtReference2:[''],
      txtAddress:[''],
      drpCountry:[''],
      drpCity:[''],
      txtPincode:[''],
      txtReference1:['']
    })
  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.BankDetaildataSource.paginator = this.paginator;
    this.BankDetaildataSource.sort = this.sort;
    this.AssignScopedataSource.paginator = this.paginator;
    this.AssignScopedataSource.sort = this.sort;
    this.EvaluationDetailsdataSource.paginator = this.paginator;
    this.EvaluationDetailsdataSource.sort = this.sort;
    this.SupplierDocumentsdataSource.paginator = this.paginator;
    this.SupplierDocumentsdataSource.sort = this.sort;
    this.SupplierFeedbackdataSource.paginator = this.paginator;
    this.SupplierFeedbackdataSource.sort = this.sort;

  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
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

  Save(data: object) {
    const dialogRef = this.dialog.open(PURCApproveSupplierAddContactModalComponent, {
      width: "50%",
      maxHeight: "100%",
      disableClose: true,
    });
    dialogRef.componentInstance.ContactData = data;
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

  CancelForm(){
    this.router.navigate(['PURC/PURC_ApproveSupplier']);
  }

}
