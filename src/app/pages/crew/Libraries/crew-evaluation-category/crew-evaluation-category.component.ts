import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWRankCategoryAddComponent } from '../crew-rank-category/crew-rank-category-add/crew-rank-category-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-evaluation-category',
  templateUrl: './crew-evaluation-category.component.html',
  styleUrls: ['./crew-evaluation-category.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CREWEvaluationCategoryComponent implements OnInit {
  pageSize = 10;

  evaluationsQuesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationsQuesFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Evaluation Question Category`);
    }
  @Input()
  columns: ListColumn[] = [
   
    { property: "Category", visible: true, name: "Category" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  get evaluationsQuesvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.evaluationsQuesFormGroup = this.fb.group({
      txtCategory: [""],
      drpStatus: ["1"]
    });
    this.evaluationsQuesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.evaluationsQuesdataSource.paginator = this.paginator;
    this.evaluationsQuesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.evaluationsQuesFormGroup.reset();
    this.evaluationsQuesFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveEvaluationQueCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWRankCategoryAddComponent,
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
