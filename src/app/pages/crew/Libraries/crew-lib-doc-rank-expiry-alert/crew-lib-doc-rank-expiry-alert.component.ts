import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWLIBDocRankExpiryAlertAddComponent } from './crew-lib-doc-rank-expiry-alert-add/crew-lib-doc-rank-expiry-alert-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-lib-doc-rank-expiry-alert',
  templateUrl: './crew-lib-doc-rank-expiry-alert.component.html',
  styleUrls: ['./crew-lib-doc-rank-expiry-alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWLIBDocRankExpiryAlertComponent implements OnInit {
  pageSize = 10;

  rankExpirydataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  rankExpiryFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Document-Rank Expiry Alert`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Document_Name", visible: true, name: "Document_Name" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Expiry_Month", visible: true, name: "Expiry_Month" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get rankExpiryAlertvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.rankExpiryFormGroup = this.fb.group({
      drpDocument_Name: [""],
      drpRank:[""],
      drpStatus: ["1"]
    });
    this.rankExpirydataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.rankExpirydataSource.paginator = this.paginator;
    this.rankExpirydataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.rankExpiryFormGroup.reset();
    this.rankExpiryFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveExpiryNotifications(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWLIBDocRankExpiryAlertAddComponent,
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
