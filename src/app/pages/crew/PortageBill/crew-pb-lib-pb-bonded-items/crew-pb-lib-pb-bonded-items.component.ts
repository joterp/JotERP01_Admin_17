import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator} from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWPBLIBPBBONDEDITEMSAddComponent } from './crew-pb-lib-pb-bonded-items-add/crew-pb-lib-pb-bonded-items-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-pb-lib-pb-bonded-items',
  templateUrl: './crew-pb-lib-pb-bonded-items.component.html',
  styleUrls: ['./crew-pb-lib-pb-bonded-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWPBLIBPBBONDEDITEMSComponent implements OnInit {
  pageSize = 10;

  bondedItemsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  bondedItemsFormGroup: UntypedFormGroup;
  @ViewChild('select') select: MatSelect;
  allSelected=false;
  Vessel: any[] = [
    {value: 'Alexandre', viewValue: 'Alexandre'},
    {value: 'Marie', viewValue: 'Marie'},
    {value: 'yami', viewValue: 'Yami'}
    ];

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`PB Bonded Items`);
    
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Item_Name", visible: true, name: "Item_Name" },
      { property: "Item_Unit", visible: true, name: "Item_Unit" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get bondedItemsvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.bondedItemsFormGroup = this.fb.group({
      txtItem_Name: [""],
      drpStatus: ["1"]
    });
    this.bondedItemsdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.bondedItemsdataSource.paginator = this.paginator;
    this.bondedItemsdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.bondedItemsFormGroup.reset();
    this.bondedItemsFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveBondedItem(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWPBLIBPBBONDEDITEMSAddComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
