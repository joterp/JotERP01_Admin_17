import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { HrmEvaluationQuestionAddComponent } from '../hrm-evaluation-question/hrm-evaluation-question-add/hrm-evaluation-question-add.component';
import { HrmEvaluationQuestionSheetAddComponent } from './hrm-evaluation-question-sheet-add/hrm-evaluation-question-sheet-add.component';

@Component({
  selector: 'fury-hrm-evaluation-question-sheet',
  templateUrl: './hrm-evaluation-question-sheet.component.html',
  styleUrl: './hrm-evaluation-question-sheet.component.scss'
})
export class HrmEvaluationQuestionSheetComponent {
  pageSize = 10;

dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationSheetFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Interview Question Sheet`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "ID", visible: true, name: "ID" },
      { property: "Interview_Sheet", visible: true, name: "Interview_Sheet" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "No_of_Questions", visible: true, name: "No_of_Questions" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.evaluationSheetFormGroup = this.fb.group({
      txtInterview_Sheet: [""],
      drpRank: [""],
      drpStatus: ["1"]
    });
    this.dataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.evaluationSheetFormGroup.reset();
    this.evaluationSheetFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveEvaluationSheet(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmEvaluationQuestionSheetAddComponent,
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
