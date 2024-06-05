import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWManningFeeTransactionAddComponent } from './crew-manning-fee-transaction-add/crew-manning-fee-transaction-add.component';
import { CREWSplitFeeModelComponent } from './crew-split-fee-model/crew-split-fee-model.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-manning-fee-transaction',
  templateUrl: './crew-manning-fee-transaction.component.html',
  styleUrls: ['./crew-manning-fee-transaction.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWManningFeeTransactionComponent implements OnInit {
  pageSize = 10;
  showRankCategoryTable : boolean = false;


  manningFeeStatementdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  manningFeeStatementFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Manning Fee Statement Index`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Manning_Office", visible: true, name: "Manning_Office" },
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Crew_Name", visible: true, name: "Crew_Name" },
      { property: "Month", visible: true, name: "Month" },
      { property: "Year", visible: true, name: "Year" },
      { property: "Split_Date", visible: true, name: "Split_Date" },
      { property: "Contract_Date", visible: true, name: "Contract_Date" },
      { property: "Sign_On_Date", visible: true, name: "Sign_On_Date" },
      { property: "Sign_Off_Date", visible: true, name: "Sign_Off_Date" },
      { property: "Fee_Type", visible: true, name: "Fee_Type" },
      { property: "Fee_Amount", visible: true, name: "Fee_Amount" },
      { property: "Payment_Status", visible: true, name: "Payment_Status" },
      { property: "Paid_Amount", visible: true, name: "Paid_Amount" },
      { property: "CheckBox", visible: true, name: "CheckBox" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get feeStatementvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
	
  ngOnInit(): void {
      
	 this.sidenavService.setCollapsed(true);
   this.manningFeeStatementFormGroup = this.fb.group({
    drpVessel_Manager: [""],
    drpManning_Office: [""],
    txtCrew: [""],
    drpVessel: [""],
    drpRank: [""],
    drpYear: [""],
    drpMonth: [""],
    drpFee_Type: [""],
    drpFee_Status: [""],
    drpInvoice:[""],
     drpStatus: ["1"]
   });
   this.manningFeeStatementdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.manningFeeStatementdataSource.paginator = this.paginator;
    this.manningFeeStatementdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.manningFeeStatementFormGroup.reset();
    this.manningFeeStatementFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewTransaction(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWManningFeeTransactionAddComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
    showRankTable(data:any,type:string) {
      if(type==='CustomFields') {
        this.showRankCategoryTable = true;
       
      }
    }

    saveSplitFee(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWSplitFeeModelComponent,
        {
          width: "35%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 

}
