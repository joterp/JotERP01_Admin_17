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
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { HrmEvaluationPeriodAddComponent } from './hrm-evaluation-period-add/hrm-evaluation-period-add.component';

@Component({
  selector: 'fury-hrm-evaluation-period',
  templateUrl: './hrm-evaluation-period.component.html',
  styleUrl: './hrm-evaluation-period.component.scss'
})
export class HrmEvaluationPeriodComponent {
  pageSize = 10;

  evaluationsQuesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationPeriodFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Evaluation Period`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Period_Name", visible: true, name: "Period_Name" },
       { property: "Period_Days", visible: true, name: "Period_Days" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
   
     get evaluationsPeriodsvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.evaluationPeriodFormGroup = this.fb.group({
      txtPeriod_Name: [""],
      txtPeriod_Days: [""],
      drpStatus: ["1"]
    });
    this.evaluationsQuesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.evaluationsQuesdataSource.paginator = this.paginator;
    this.evaluationsQuesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.evaluationPeriodFormGroup.reset();
    this.evaluationPeriodFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveEvaluationQueCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HrmEvaluationPeriodAddComponent,
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
