import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator} from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWInterviewGradeAddComponent } from './crewinterview-grade-add/crewinterview-grade-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-interview-grade',
  templateUrl: './crew-interview-grade.component.html',
  styleUrls: ['./crew-interview-grade.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWInterviewGradeComponent implements OnInit {
  pageSize = 10;

  crewRankdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  interviewGradeFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Interview Grading`);
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
 
     get interviewGradevisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.interviewGradeFormGroup = this.fb.group({
      txtGrade: [""],
      drpGrade_Type: [""],
      drpStatus: ["1"]
    });
    this.crewRankdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.crewRankdataSource.paginator = this.paginator;
    this.crewRankdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.interviewGradeFormGroup.reset();
    this.interviewGradeFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewGrade(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(CREWInterviewGradeAddComponent,
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
