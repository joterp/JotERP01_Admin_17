import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCNewRFQTERMADDModalComponent } from './purc-new-rfq-term-add-modal/purc-new-rfq-term-add-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-purc-new-rfq-term',
  templateUrl: './purc-new-rfq-term.component.html',
  styleUrls: ['./purc-new-rfq-term.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCNewRFQTERMComponent implements OnInit {
  pageSize = 10;

  rfqTermsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  rfqFilterFormGroup: UntypedFormGroup;
  dialogRef: any;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 

      this.titleService.setTitle(`RFQ Terms`);
    }

    @Input()
    columns: ListColumn[] = [
      { property: "RFQ_Terms", visible: true, name: "RFQ_Terms" },
      { property: "Department", visible: true, name: "Department" },
      { property: "Is_Default", visible: true, name: "Is_Default" },
      { property: "CheckBox", visible: true, name: "CheckBox" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.rfqFilterFormGroup = this.fb.group({
      txtRFQ_Terms: [""],
      drpDepartment: [""],
     
      drpStatus: ["1"]
    });
    this.rfqTermsdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.rfqTermsdataSource.paginator = this.paginator;
    this.rfqTermsdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.rfqFilterFormGroup.reset();
    this.rfqFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveRFQTerms(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCNewRFQTERMADDModalComponent,
      {
        width: "60%",
        maxHeight: "80%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

    // saveData(): void {
    //   const dialogRef = this.dialog.open(PURCNewRFQTERMADDModalComponent,
    //     {
    //       width: "40%",
    //       maxHeight: "90%",
    //       disableClose: true,
         
    //     });
  
     
    //     dialogRef.afterClosed().subscribe(result => {
    //       console.log('Modal closed', result);
    //     });
    //   } 
    //   closeModal(): void {
    //     this.dialog.closeAll();
    //   }

}
