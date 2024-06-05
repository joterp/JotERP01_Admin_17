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

@Component({
  selector: 'fury-crew-interview-questions',
  templateUrl: './crew-interview-questions.component.html',
  styleUrls: ['./crew-interview-questions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWInterviewQuestionsComponent implements OnInit {
  pageSize = 10;

  interviewQuesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  interviewQuesFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Interview Question`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Interview_Question", visible: true, name: "Interview_Question" },
       { property: "Category", visible: true, name: "Category" },
       { property: "Question_option", visible: true, name: "Question_option" },
       { property: "Answer_Reference", visible: true, name: "Answer_Reference" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get interviewQuesvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.interviewQuesFormGroup = this.fb.group({
      txtInterview_Ques: [""],
      drpCategory: [""],
      drpStatus: ["1"]
    });
    this.interviewQuesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.interviewQuesdataSource.paginator = this.paginator;
    this.interviewQuesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.interviewQuesFormGroup.reset();
    this.interviewQuesFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewInterviewQues(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(CREWInterviewQuestionsAddComponent,
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
