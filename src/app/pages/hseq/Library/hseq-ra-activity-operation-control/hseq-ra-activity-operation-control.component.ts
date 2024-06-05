import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQRAActivityOperationControlAddComponent } from './hseq-ra-activity-operation-control-add/hseq-ra-activity-operation-control-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-ra-activity-operation-control',
  templateUrl: './hseq-ra-activity-operation-control.component.html',
  styleUrls: ['./hseq-ra-activity-operation-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQRAActivityOperationControlComponent implements OnInit {
  pageSize = 10;

  riskAssessmentActivitydataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  riskAssessmentActivityFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
    this.titleService.setTitle(`Risk-Assessment Activity/Hazard/Controls`);
  }
  @Input()
  columns: ListColumn[] = [

    { property: "Activity", visible: true, name: "Activity" },
    { property: "Activity_Operation", visible: true, name: "Activity_Operation" },
    { property: "Hazard_Impact", visible: true, name: "Hazard_Impact" },
    { property: "Controls_sefegards", visible: true, name: "Controls_sefegards" },
    { property: "SQA_Procedure", visible: true, name: "SQA_Procedure" },
    { property: "Action", visible: true, name: "Action" }
  ] as ListColumn[];

  get riskAssessmentActivityvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.riskAssessmentActivityFormGroup = this.fb.group({
      drpActivity: [""],
      txtOperation: [""],
      txtHazard_Impact: [""],
      txtControls: [""],
      drpStatus: ["1"],
      txtSQA_Procedure:[""]
    });
    this.riskAssessmentActivitydataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.riskAssessmentActivitydataSource.paginator = this.paginator;
    this.riskAssessmentActivitydataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.riskAssessmentActivityFormGroup.reset();
    this.riskAssessmentActivityFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveRiskAssessmentActivity(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQRAActivityOperationControlAddComponent,
      {
        width: "50%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
