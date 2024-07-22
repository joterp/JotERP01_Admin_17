import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OpsLibCustFeedbackQuestionAddComponent } from './ops-lib-cust-feedback-question-add/ops-lib-cust-feedback-question-add.component';

@Component({
  selector: 'fury-ops-lib-cust-feedback-question',
  templateUrl: './ops-lib-cust-feedback-question.component.html',
  styleUrl: './ops-lib-cust-feedback-question.component.scss'
})
export class OpsLibCustFeedbackQuestionComponent {
  pageSize = 10;

  OMRproductdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  feedbackquestionFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Customer Feedback Question`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Question", visible: true, name: "Question" },
      { property: "Question_No", visible: true, name: "Question_No" },
      { property: "Category", visible: true, name: "Category" },
      { property: "Question_Options", visible: true, name: "Question_Options" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.feedbackquestionFilterFormGroup = this.fb.group({
      Question: [""],
      Category: [""],
      drpStatus: ["1"]
    });
    this.OMRproductdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.OMRproductdataSource.paginator = this.paginator;
    this.OMRproductdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.feedbackquestionFilterFormGroup.reset();
    this.feedbackquestionFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveFeedbackQuestion(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsLibCustFeedbackQuestionAddComponent,
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
