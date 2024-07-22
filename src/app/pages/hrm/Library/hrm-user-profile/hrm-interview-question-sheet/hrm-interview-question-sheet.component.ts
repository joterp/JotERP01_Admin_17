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
import { HrmInterviewQuestionSheetAddComponent } from './hrm-interview-question-sheet-add/hrm-interview-question-sheet-add.component';

@Component({
  selector: 'fury-hrm-interview-question-sheet',
  templateUrl: './hrm-interview-question-sheet.component.html',
  styleUrl: './hrm-interview-question-sheet.component.scss'
})
export class HrmInterviewQuestionSheetComponent {
  pageSize = 10;

  interviewSheetdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  interviewSheetFormGroup: UntypedFormGroup;
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

    get interviewSheetvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.interviewSheetFormGroup = this.fb.group({
      txtInterview_Sheet: [""],
      drpRank: [""],
      drpStatus: ["1"]
    });
    this.interviewSheetdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.interviewSheetdataSource.paginator = this.paginator;
    this.interviewSheetdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.interviewSheetFormGroup.reset();
    this.interviewSheetFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveInterviewSheet(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmInterviewQuestionSheetAddComponent,
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



