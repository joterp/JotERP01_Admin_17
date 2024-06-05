import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQRiskAssessmentReviewFrequencyAddComponent } from './hseq-risk-assessment-review-frequency-add/hseq-risk-assessment-review-frequency-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-risk-assessment-review-frequency',
  templateUrl: './hseq-risk-assessment-review-frequency.component.html',
  styleUrls: ['./hseq-risk-assessment-review-frequency.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQRiskAssessmentReviewFrequencyComponent implements OnInit {
  pageSize = 10;

  reviewFrequencydataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  reviewFrequencyFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Risk Assess Work Acitivities Rating`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Review_Frequency", visible: true, name: "Review_Frequency" },
       { property: "Rating_Color", visible: true, name: "Rating_Color" },
       { property: "Action", visible: true, name: "Action" }
     ] as ListColumn[];


     get reviewFrequencyvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.reviewFrequencyFormGroup = this.fb.group({
      txtReview_Frequency: [""],
      drpRating_Color:[""],
      drpStatus: ["1"]
    });
    this.reviewFrequencydataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.reviewFrequencydataSource.paginator = this.paginator;
    this.reviewFrequencydataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.reviewFrequencyFormGroup.reset();
    this.reviewFrequencyFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewActivity(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQRiskAssessmentReviewFrequencyAddComponent,
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
