import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQRiskAssessmentAdditionalControlsAddComponent } from './hseq-risk-assessment-additional-controls-add/hseq-risk-assessment-additional-controls-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'fury-hseq-risk-assessment-additional-controls',
  templateUrl: './hseq-risk-assessment-additional-controls.component.html',
  styleUrls: ['./hseq-risk-assessment-additional-controls.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQRiskAssessmentAdditionalControlsComponent implements OnInit {
  pageSize = 10;

  additionalControlsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  additionalControlsFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Risk-Assessment Additional Controls`);
     }
  @Input()
  columns: ListColumn[] = [

    { property: "Activity", visible: true, name: "Activity" },
    { property: "Activity_Operation_Controls", visible: true, name: "Activity_Operation_Controls" },
    { property: "Additional_Controls", visible: true, name: "Additional_Controls" },
    { property: "Responsible", visible: true, name: "Responsible" },
    { property: "Action", visible: true, name: "Action" }
  ] as ListColumn[];

  get additionalControlsvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.additionalControlsFormGroup = this.fb.group({
      txtActivity: [""],
      drpActivity_Controls: [""],
      drpStatus: ["1"],
      
    });
    this.additionalControlsdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.additionalControlsdataSource.paginator = this.paginator;
    this.additionalControlsdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.additionalControlsFormGroup.reset();
    this.additionalControlsFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }   
  saveNewAdditionalControl(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQRiskAssessmentAdditionalControlsAddComponent,
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
