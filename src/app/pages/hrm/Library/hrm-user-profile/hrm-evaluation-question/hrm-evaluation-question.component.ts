import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator} from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { HrmEvaluationQuestionAddComponent } from './hrm-evaluation-question-add/hrm-evaluation-question-add.component';

@Component({
  selector: 'fury-hrm-evaluation-question',
  templateUrl: './hrm-evaluation-question.component.html',
  styleUrl: './hrm-evaluation-question.component.scss'
})
export class HrmEvaluationQuestionComponent {
  pageSize = 10;

  evaluationQuesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationQuesFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Evaluation Question`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Evaluation_Question", visible: true, name: "Evaluation_Question" },
       { property: "Category", visible: true, name: "Category" },
       { property: "Question_option", visible: true, name: "Question_option" },
       { property: "Answer_Reference", visible: true, name: "Answer_Reference" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get evaluationQuesvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.evaluationQuesFormGroup = this.fb.group({
      txtInterview_Ques: [""],
      drpCategory: [""],
      drpStatus: ["1"]
    });
    this.evaluationQuesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.evaluationQuesdataSource.paginator = this.paginator;
    this.evaluationQuesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.evaluationQuesFormGroup.reset();
    this.evaluationQuesFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewEvaluationQues(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(HrmEvaluationQuestionAddComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 


}
