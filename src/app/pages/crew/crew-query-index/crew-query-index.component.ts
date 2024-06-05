import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-query-index',
  templateUrl: './crew-query-index.component.html',
  styleUrls: ['./crew-query-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWQueryIndexComponent implements OnInit {
  pageSize = 10;

  queriesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  queriesFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Queries`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Raised_On", visible: true, name: "Raised_On" },
       { property: "Staff_Code", visible: true, name: "Staff_Code" },
       { property: "Staff_Name", visible: true, name: "Staff_Name" },
       { property: "Vessel", visible: true, name: "Vessel" },
       { property: "Rank", visible: true, name: "Rank" },
       { property: "Details", visible: true, name: "Details" },
       { property: "Type", visible: true, name: "Type" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
   
     get queriesvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.queriesFormGroup = this.fb.group({
      txtRaised_On: [""],
      txtStaff_Code: [""],
      txtStaff_Name: [""],
      drpVessel: [""],
      drpRank: [""],
      drpType: [""],
      drpStatus: ["1"]
    });
    this.queriesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.queriesdataSource.paginator = this.paginator;
    this.queriesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.queriesFormGroup.reset();
    this.queriesFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

}
