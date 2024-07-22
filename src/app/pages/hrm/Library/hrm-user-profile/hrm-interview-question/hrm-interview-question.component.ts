import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HrmInterviewQuestionAddComponent } from './hrm-interview-question-add/hrm-interview-question-add.component';

@Component({
  selector: 'fury-hrm-interview-question',
  templateUrl: './hrm-interview-question.component.html',
  styleUrl: './hrm-interview-question.component.scss'
})
export class HrmInterviewQuestionComponent {
  pageSize = 10;
  
  dataSource: MatTableDataSource<HrmInterviewQuestionComponent>;

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
    // this.fetchInterviewQuestions();
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
    // this.fetchInterviewQuestions();
  }
  // fetchInterviewQuestions() {
  //   this.api.getGraphqlDataInterviewQues().subscribe(response => {
  //     const crewInterviewQuestions: crewInterviewQuestions[] = response.data.crewInterviewQuestions;
  //     this.dataSource.data = crewInterviewQuestions;
  //   });
  // }

  saveNewInterviewQues(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(HrmInterviewQuestionAddComponent,
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

}
