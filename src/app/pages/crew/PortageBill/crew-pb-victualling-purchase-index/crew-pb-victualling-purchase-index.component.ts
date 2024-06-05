import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWPBVictuallingPurchaseIndexAddComponent } from './crew-pb-victualling-purchase-index-add/crew-pb-victualling-purchase-index-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-crew-pb-victualling-purchase-index',
  templateUrl: './crew-pb-victualling-purchase-index.component.html',
  styleUrls: ['./crew-pb-victualling-purchase-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWPBVictuallingPurchaseIndexComponent implements OnInit {
  pageSize = 10;

  purchaseIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  puchaseIndexFormGroup: UntypedFormGroup;

  @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`PB Victualling Mewl Index`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Purchase_Date", visible: true, name: "Purchase_Date" },
      { property: "Port_Name", visible: true, name: "Port_Name" },
      { property: "Purchase_Supplier", visible: true, name: "Purchase_Supplier" },
      { property: "Purchase_Type", visible: true, name: "Purchase_Type" },
      { property: "Purchase_Currency", visible: true, name: "Purchase_Currency" },
      { property: "Purchase_Price", visible: true, name: "Purchase_Price" },
      { property: "Purchase_Exch_Rate", visible: true, name: "Purchase_Exch_Rate" },
      { property: "Ship_Currency", visible: true, name: "Ship_Currency" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get purchaseIndexvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.puchaseIndexFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpPort_Name: [""],
      drpPurchase_Supplier: [""],
      drpPurchase_Currency: [""],
      drpStatus: ["1"]
    });
    this.purchaseIndexdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.purchaseIndexdataSource.paginator = this.paginator;
    this.purchaseIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.puchaseIndexFormGroup.reset();
    this.puchaseIndexFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
    }
    savePBVictuallingPurchase(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWPBVictuallingPurchaseIndexAddComponent,
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
