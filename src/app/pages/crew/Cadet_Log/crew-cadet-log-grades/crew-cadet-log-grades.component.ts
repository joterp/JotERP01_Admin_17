import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWCadetLogGradesAddComponent } from './crew-cadet-log-grades-add/crew-cadet-log-grades-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-cadet-log-grades',
  templateUrl: './crew-cadet-log-grades.component.html',
  styleUrls: ['./crew-cadet-log-grades.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CREWCadetLogGradesComponent implements OnInit {
  pageSize = 10;

  cadetLogGradedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  loading: boolean;
  logGradeFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
    this.titleService.setTitle(`Cadet Log Grades`);
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

  get logGradevisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.logGradeFormGroup = this.fb.group({
      txtGrade_Name: [""],
      drpStatus: ["1"]
    });
    this.cadetLogGradedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.cadetLogGradedataSource.paginator = this.paginator;
    this.cadetLogGradedataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.logGradeFormGroup.reset();
    this.logGradeFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveCadetLogGrade(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWCadetLogGradesAddComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
