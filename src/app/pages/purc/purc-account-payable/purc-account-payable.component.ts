import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { PURCAccountPayableGenerateLinkModalComponent } from './purc-account-payable-generate-link-modal/purc-account-payable-generate-link-modal.component';
import { Title } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-account-payable',
  templateUrl: './purc-account-payable.component.html',
  styleUrls: ['./purc-account-payable.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCAccountPayableComponent implements OnInit {

  departmentControl = new UntypedFormControl([]);
  departmentList: string[] = ['Management', 'Other Stored', 'Repairs', 'Services Rendered', 'Spare Parts', 'Stores'];
  
  AccountPayableFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  accountpayablecolumns: ListColumn[] = [
    { property: "PO#", visible: true, name: "PO #" },
    { property: "Date", visible: true, name: "Date" },
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Value", visible: true, name: "Value" },
    { property: "Acct_Code", visible: true, name: "Acct Code" },
    { property: "Invoice#", visible: true, name: "Invoice #" },
    { property: "CUR", visible: true, name: "CUR" },
    { property: "Value", visible: true, name: "Value" },
    { property: "Date", visible: true, name: "Date" },
    { property: "Updated_On", visible: true, name: "Updated On" },
    { property: "Due_Date", visible: true, name: "Due Date" },
    { property: "Payment_Planned_On", visible: true, name: "Payment Planned On" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Invoice_Type", visible: true, name: "Invoice Type" },
  
  ] as ListColumn[];

  pageSize = 10;
  AccountPayabledataSource:MatTableDataSource<any> | null;

  showSupplier:boolean=true;
  showVessel:boolean=false;
  
  constructor(private fb:UntypedFormBuilder,private sidenavService:SidenavService, private dialog:MatDialog,private titleService:Title) { 
    this.titleService.setTitle(`Account Payable Portal`);
  }

  get visibleColumnsaccountpayable(){
    return this.accountpayablecolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.AccountPayabledataSource = new MatTableDataSource();

    this.AccountPayableFilterForm=this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpDepartment:[''],
      drpSupplier:[''],
      drpAccountCode:[''],
      Invoice_Date_From:[''],
      Invoice_Due_Date_From:[''],
      Invoice_Date_From_To:[''],
      Invoice_Due_Date_From_To:[''],
      txtReq_PO_Invoice:[''],
      radioInvoice_Paid:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.AccountPayabledataSource.paginator = this.paginator;
    this.AccountPayabledataSource.sort = this.sort;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  Supplier(){
   this.showSupplier = true;
   this.showVessel = false;
  }
  Vessel(){
    this.showVessel = true;
    this.showSupplier = false;
    
  }
  SaveData() {
    const dialogRef = this.dialog.open(PURCAccountPayableGenerateLinkModalComponent, {
      width: "30%",
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

}
