import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQRiskAssessmentWorkActivitiesAddComponent } from './hseq-risk-assessment-work-activities-add/hseq-risk-assessment-work-activities-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-risk-assessment-work-activities',
  templateUrl: './hseq-risk-assessment-work-activities.component.html',
  styleUrls: ['./hseq-risk-assessment-work-activities.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQRiskAssessmentWorkActivitiesComponent implements OnInit {
  pageSize = 10;

  riskAssessmentdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  riskAssessmentFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Risk Assess Work Acitivities`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Category", visible: true, name: "Category" },
       { property: "Activity", visible: true, name: "Activity" },
       { property: "Last_Reviewed_On", visible: true, name: "Last_Reviewed_On" },
       { property: "Next_Review_On", visible: true, name: "Next_Review_On" },
       { property: "Office_Verification", visible: true, name: "Office_Verification" },
       { property: "Action", visible: true, name: "Action" }
     ] as ListColumn[];
 
     get riskAssessmentvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.riskAssessmentFormGroup = this.fb.group({
      drpCategory: [""],
      txtActivity:[""],
      Last_Review:[""],
      Next_Review:[""],
      drpStatus: ["1"]
    });
    this.riskAssessmentdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.riskAssessmentdataSource.paginator = this.paginator;
    this.riskAssessmentdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.riskAssessmentFormGroup.reset();
    this.riskAssessmentFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewActivity(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQRiskAssessmentWorkActivitiesAddComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
