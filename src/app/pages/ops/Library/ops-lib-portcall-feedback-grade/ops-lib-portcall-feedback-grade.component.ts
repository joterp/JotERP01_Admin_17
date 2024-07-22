import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
;
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'fury-ops-lib-portcall-feedback-grade',
  templateUrl: './ops-lib-portcall-feedback-grade.component.html',
  styleUrl: './ops-lib-portcall-feedback-grade.component.scss'
})
export class OpsLibPortcallFeedbackGradeComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  feedbackGradeFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Port-call Feedback Grade`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Grade_Name", visible: true, name: "Grade_Name" },
      { property: "Grade_Type", visible: true, name: "Grade_Type" },
      { property: "Min_Score", visible: true, name: "Min_Score" },
      { property: "Max_Score", visible: true, name: "Max_Score" },
      { property: "No_Of_Options", visible: true, name: "No_Of_Options" },
      { property: "Options", visible: true, name: "Options" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.feedbackGradeFilterFormGroup = this.fb.group({
      Grade: [""],
      Grade_Type: [""],
      drpStatus: ["2"]
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
    this.feedbackGradeFilterFormGroup.reset();
    this.feedbackGradeFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  // saveFeedbackGrade(data:object, IsEdit:boolean) {
  //   const dialogRef = this.dialog.open(OpsLibCustFeedbackGradeAddComponent,
  //     {
  //       width: "25%",
  //       maxHeight: "90%",
  //       disableClose: true,
  //       data:data
  //     });

  //     dialogRef.componentInstance.IsEdit= IsEdit;
  //   dialogRef.afterClosed().subscribe((data:any)=>{
     
  //   });
  //   } 


}
