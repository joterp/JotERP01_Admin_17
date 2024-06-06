import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCPOTermsModalComponent } from './purc-poterms-modal/purc-poterms-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-purc-poterms',
  templateUrl: './purc-poterms.component.html',
  styleUrls: ['./purc-poterms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCPOTermsComponent implements OnInit {
  pageSize = 10;

  poTermsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  poFilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`POTerms`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "PO_Terms", visible: true, name: "PO_Terms" },
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
    this.poFilterFormGroup = this.fb.group({
      txtPO_Terms: [""],
      drpDepartment: [""],
     
      drpStatus: ["1"]
    });
    this.poTermsdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.poTermsdataSource.paginator = this.paginator;
    this.poTermsdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.poFilterFormGroup.reset();
    this.poFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  savePOTerms(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCPOTermsModalComponent,
      {
        width: "50%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 


}
