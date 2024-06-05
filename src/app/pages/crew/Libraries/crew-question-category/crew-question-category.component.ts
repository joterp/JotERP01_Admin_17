import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWRankCategoryAddComponent } from '../crew-rank-category/crew-rank-category-add/crew-rank-category-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-question-category',
  templateUrl: './crew-question-category.component.html',
  styleUrls: ['./crew-question-category.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWQuestionCategoryComponent implements OnInit {
  pageSize = 10;

  interviewQuestiondataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  interviewQuestionFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Interview Question Category`);
    }
    @Input()
    columns: ListColumn[] = [
     
      { property: "Category", visible: true, name: "Category" },
      { property: "Action", visible: true, name: "Action" }
    ] as ListColumn[];

    get interviewQuevisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.interviewQuestionFormGroup = this.fb.group({
      txtCategory: [""],
      drpStatus: ["1"]
    });
    this.interviewQuestiondataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.interviewQuestiondataSource.paginator = this.paginator;
    this.interviewQuestiondataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.interviewQuestionFormGroup.reset();
    this.interviewQuestionFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveIntQueCategory(data:object, IsEdit:boolean) {
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
