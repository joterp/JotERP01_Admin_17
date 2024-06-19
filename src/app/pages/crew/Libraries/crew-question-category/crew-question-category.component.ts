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
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';
import { CrewQuestionCategoryAddComponent } from './crew-question-category-add/crew-question-category-add.component';
export interface crewInterviewQuestionsCategory {
  active_STATUS :number;
  addedBy: string;
  addedByName: string;
  addedOnDate: string;
  category_NAME :string;
  editedBy: string;
  editedByName: string;
  editedOnDate: string;
  guid: string;
  id: number;
  isTransient: boolean;
  tenantId: string;

}
@Component({
  selector: 'fury-crew-question-category',
  templateUrl: './crew-question-category.component.html',
  styleUrls: ['./crew-question-category.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWQuestionCategoryComponent implements OnInit {
  pageSize = 10;

  dataSource: MatTableDataSource<crewInterviewQuestionsCategory>;

  @ViewChild('TABLE') table: ElementRef;
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
      { property: "action", visible: true, name: "action" }
    ] as ListColumn[];

    get interviewQuevisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.fetchInterviewQuesCategory();
    this.sidenavService.setCollapsed(true);
    this.interviewQuestionFormGroup = this.fb.group({
      txtCategory: [""],
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
    this.interviewQuestionFormGroup.reset();
    this.interviewQuestionFormGroup.get("drpStatus").patchValue("1");
    this.fetchInterviewQuesCategory();
  }
 
  fetchInterviewQuesCategory() {
    this.api.getGraphqlDataInterviewQuesCategory().subscribe(response => {
      const crewInterviewQuestionsCategory: crewInterviewQuestionsCategory[] = response.data.crewInterviewQuestionsCategory;
      this.dataSource.data = crewInterviewQuestionsCategory;
    });
  }
  saveIntQueCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CrewQuestionCategoryAddComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });
      dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((result)=>{
      if (result) {
        this.clearFilter();
      }
    });
    } 
    changeStatus(data: any): void {
      if (!data || !data.id) {
        console.error('Invalid data or missing ID for deletion');
        return;
      }
  
      const id = data.id;
      const dialogRef = this.dialog.open(StatusChangeConfirmation, {
        disableClose: false,
        data: {
          title: data["ACTIVE_STATUS"] ? "Confirm Deletion" : "Confirm Restore",
          message: data["ACTIVE_STATUS"]
            ? "Are you sure you want to delete this record?"
            : "Are you sure you want to restore this record?"
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.api.DeleteDataService('v1/CrewInterviewQuestionsCategory', id).subscribe(
            (res: any) => {
              if (Number.isInteger(res)) {
                this.common.ShowMessage("Interview Question Deleted Successfully", "notify-success", 3000);
                this.fetchInterviewQuesCategory();
              } else {
                this.common.ShowMessage(res["Message"], "notify-error", 6000);
              }
            },
            (error) => {
              console.error('Error deleting record', error);
              this.common.ShowMessage(error["Message"], "notify-error", 6000);
            }
          );
        }
      });
    }

}
