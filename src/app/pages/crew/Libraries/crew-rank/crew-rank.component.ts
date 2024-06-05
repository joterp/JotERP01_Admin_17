import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWRankAddComponent } from './crew-rank-add/crew-rank-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-rank',
  templateUrl: './crew-rank.component.html',
  styleUrls: ['./crew-rank.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankComponent implements OnInit {
  pageSize = 10;

  crewRankdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  crewRankFormGroup: UntypedFormGroup;


  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Rank`);
     }
     
    @Input()
    columns: ListColumn[] = [
      { property: "Department", visible: true, name: "Department" },
      { property: "Category", visible: true, name: "Category" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Rank_Short_Name", visible: true, name: "Rank_Short_Name" },
      { property: "Contract_Duration", visible: true, name: "Contract_Duration" },
      { property: "Adjust_Sort_Order", visible: true, name: "Adjust_Sort_Order" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get crewRankvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.crewRankFormGroup = this.fb.group({
      txtRank_Name: [""],
      txtRank_Short_Name: [""],
      drpCategory: [""],
      drpDepartment: [""],
      drpStatus: ["1"]
    });
    this.crewRankdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.crewRankdataSource.paginator = this.paginator;
    this.crewRankdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.crewRankFormGroup.reset();
    this.crewRankFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveNewRank(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWRankAddComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 



}
