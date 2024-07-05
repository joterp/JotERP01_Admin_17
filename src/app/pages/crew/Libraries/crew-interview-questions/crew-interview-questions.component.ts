import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWInterviewQuestionsAddComponent } from './crew-interview-questions-add/crew-interview-questions-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';

export interface crewInterviewQuestions {
  active_STATUS:number;
  addedBy: string;
  addedByName: string;
  addedOnDate: string;
  answer:string;
  category_ID:number;
  editedBy: string;
  editedByName: string;
  editedOnDate: string;
  guid: string;
  id: number;
  interview_QUESTION: boolean;
  isTransient: string;
  tenantId: string;
}


@Component({
  selector: 'fury-crew-interview-questions',
  templateUrl: './crew-interview-questions.component.html',
  styleUrls: ['./crew-interview-questions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWInterviewQuestionsComponent implements OnInit {
  pageSize = 10;
  
  dataSource: MatTableDataSource<crewInterviewQuestions>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  interviewQuesFormGroup: UntypedFormGroup;


  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Interview Question`);
      this.dataSource = new MatTableDataSource();
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Interview_Question", visible: true, name: "Interview_Question" },
       { property: "Category", visible: true, name: "Category" },
      //  { property: "Question_option", visible: true, name: "Question_option" },
       { property: "Answer_Reference", visible: true, name: "Answer_Reference" },
       { property: "action", visible: true, name: "action" },
     ] as ListColumn[];
 
     get interviewQuesvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 
  ngOnInit(): void {
    this.fetchInterviewQuestions();
    this.sidenavService.setCollapsed(true);
    this.interviewQuesFormGroup = this.fb.group({
      txtInterview_Ques: [""],
      drpCategory: [""],
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
    this.interviewQuesFormGroup.reset();
    this.interviewQuesFormGroup.get("STATUS").patchValue("1");
    this.fetchInterviewQuestions();
  }
  fetchInterviewQuestions() {
    this.api.getGraphqlDataInterviewQues().subscribe(response => {
      const crewInterviewQuestions: crewInterviewQuestions[] = response.data.crewInterviewQuestions;
      this.dataSource.data = crewInterviewQuestions;
    });
  }

  saveNewInterviewQues(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(CREWInterviewQuestionsAddComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });
      dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
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
          this.api.DeleteDataService('v1/CrewInterviewQuestions', id).subscribe(
            (res: any) => {
              if (Number.isInteger(res)) {
                this.common.ShowMessage("Interview Question Deleted Successfully", "notify-success", 3000);
                this.fetchInterviewQuestions();
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
