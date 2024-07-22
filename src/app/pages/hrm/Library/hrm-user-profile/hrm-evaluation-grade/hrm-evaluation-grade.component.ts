import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { HrmEvaluationGradeAddComponent } from './hrm-evaluation-grade-add/hrm-evaluation-grade-add.component';

@Component({
  selector: 'fury-hrm-evaluation-grade',
  templateUrl: './hrm-evaluation-grade.component.html',
  styleUrl: './hrm-evaluation-grade.component.scss'
})
export class HrmEvaluationGradeComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationGradeFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Evaluation Grading`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Grade", visible: true, name: "Grade" },
       { property: "Grade_Type", visible: true, name: "Grade_Type" },
       { property: "Min_Score", visible: true, name: "Min_Score" },
       { property: "Max_Score", visible: true, name: "Max_Score" },
       { property: "No_of_options", visible: true, name: "No_of_options" },
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
    this.evaluationGradeFormGroup = this.fb.group({
      txtGrade: [""],
      drpGrade_Type: [""],
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
    this.evaluationGradeFormGroup.reset();
    this.evaluationGradeFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  
  saveEvaluationGrade(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(HrmEvaluationGradeAddComponent,
      {
        width: "30%",
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


