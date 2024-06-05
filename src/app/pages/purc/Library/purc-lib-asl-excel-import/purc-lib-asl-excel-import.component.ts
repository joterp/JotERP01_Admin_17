import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PurcLibAslExcelImportAlertComponent } from './purc-lib-asl-excel-import-alert/purc-lib-asl-excel-import-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-purc-lib-asl-excel-import',
  templateUrl: './purc-lib-asl-excel-import.component.html',
  styleUrls: ['./purc-lib-asl-excel-import.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PURCLIBASLEXCELIMPORTComponent implements OnInit {
  pageSize = 10;

  aslexcelimportdataSource: MatTableDataSource<any> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 
  @ViewChild("TABLE2") table2: ElementRef;
  loading: boolean;
  filterFormGroup: UntypedFormGroup;
  dialogRef: any;
  aslImportFilterFormGroup: UntypedFormGroup;
  aslExcelFilterFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`ASL - Excel Import`);
     }
    columnsCat: ListColumn[] = [
      { property: "Supplier", visible: true, name: "Supplier" },
      { property: "Address1", visible: true, name: "Address1" },
      { property: "Address2", visible: true, name: "Address2" },
      { property: "Pin_Code", visible: true, name: "Pin_Code" },
      { property: "Reg", visible: true, name: "Reg" },
      { property: "Reg_Date", visible: true, name: "Reg_Date" },
      { property: "GST_VAT_Reg", visible: true, name: "GST_VAT_Reg" },
      { property: "Evaluation_Frequency", visible: true, name: "Evaluation_Frequency" },
      { property: "Credit_Terms", visible: true, name: "Credit_Terms" },
      { property: "ISO_Accreditations", visible: true, name: "ISO_Accreditations" },
      { property: "Supplier_Code", visible: true, name: "Supplier_Code" },
      { property: "Assigned_Traits", visible: true, name: "Assigned_Traits" },
     
      { property: "CheckBox", visible: true, name: "CheckBox" }
    ] as ListColumn[];

    get visibleColumnsCatalogue() {
      return this.columnsCat
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
  
    this.aslImportFilterFormGroup = this.fb.group({
      radioNew_Reqsn_Status:[""],
      drpImported_File: [""],
      drpType: ["", Validators.required],
      drpCountry: ["", Validators.required],
      drpCity: ["", Validators.required],
      drpCurrency: ["", Validators.required],
      radioNew_RFQ_Format: ["", Validators.required]
    });
    this.aslExcelFilterFormGroup = this.fb.group({
      txtSupplier: [""],
      txtSupplierCode: [""],
      txtEvaFrq: [""],
      txtCreditTerms: [""],
      radioNew_Supplier_Status: ["1"]
   
    });
    this.aslexcelimportdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.aslexcelimportdataSource.paginator = this.paginator;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  clearFilter() {
    this.loading = true;
    this.aslImportFilterFormGroup.reset();
    this.aslExcelFilterFormGroup.reset();


    this.aslImportFilterFormGroup.get("STATUS").patchValue("1");
    this.aslExcelFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  alertModal(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PurcLibAslExcelImportAlertComponent,
      {
        width: "20%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 



}
