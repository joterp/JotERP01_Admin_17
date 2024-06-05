import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator} from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCLIBSupplierDocumentsEditComponent } from './purc-lib-supplier-documents-edit/purc-lib-supplier-documents-edit.component';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-purc-lib-supplier-documents',
  templateUrl: './purc-lib-supplier-documents.component.html',
  styleUrls: ['./purc-lib-supplier-documents.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCLIBSupplierDocumentsComponent implements OnInit {
  pageSize = 10;

  DocumentTypedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  supplierDocFilterFormGroup: UntypedFormGroup;
  dialogRef: any;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Supplier Document Type`);
     }

    @Input()
    columns: ListColumn[] = [
      { property: "Documnet", visible: true, name: "Documnet" },
      { property: "Is_Mandatory", visible: true, name: "Is_Mandatory" },
      { property: "Is_Confidential", visible: true, name: "Is_Confidential" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.supplierDocFilterFormGroup = this.fb.group({
      txtDocumnet: [""],
      drpIs_Mandatory: [""],
      drpIs_Confidential: [""],
    
      drpStatus: ["1"]
    });
    this.DocumentTypedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.DocumentTypedataSource.paginator = this.paginator;
    this.DocumentTypedataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.supplierDocFilterFormGroup.reset();
    this.supplierDocFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveDocumentType(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCLIBSupplierDocumentsEditComponent,
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
