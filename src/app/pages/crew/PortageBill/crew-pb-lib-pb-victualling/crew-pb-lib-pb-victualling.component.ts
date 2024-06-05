import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWPBLIBPBVICTUALLINGAddComponent } from './crew-pb-lib-pb-victualling-add/crew-pb-lib-pb-victualling-add.component';
import { CREWCopyPBVictuallingModalComponent } from './crew-copy-pb-victualling-modal/crew-copy-pb-victualling-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-crew-pb-lib-pb-victualling',
  templateUrl: './crew-pb-lib-pb-victualling.component.html',
  styleUrls: ['./crew-pb-lib-pb-victualling.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWPBLIBPBVICTUALLINGComponent implements OnInit {
  pageSize = 10;

  PBStdRatesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  PBStdRatesFormGroup: UntypedFormGroup;
  @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`PB Victualling Std Rates`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Victualling_Account", visible: true, name: "Victualling_Account" },
      { property: "Victualling_Currency", visible: true, name: "Victualling_Currency" },
      { property: "Victualling_Amount", visible: true, name: "Victualling_Amount" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get PBStdRatesvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.PBStdRatesFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpVictualling_Account: [""],
      drpVictualling_Currency: [""],
      drpStatus: ["1"]
    });
    this.PBStdRatesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.PBStdRatesdataSource.paginator = this.paginator;
    this.PBStdRatesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.PBStdRatesFormGroup.reset();
    this.PBStdRatesFormGroup.get("STATUS").patchValue("1");
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
    saveMatrixRule(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWPBLIBPBVICTUALLINGAddComponent,
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
      savePBVictualling(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(CREWCopyPBVictuallingModalComponent,
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
