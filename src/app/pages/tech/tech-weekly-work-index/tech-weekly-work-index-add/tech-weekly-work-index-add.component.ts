import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-weekly-work-index-add',
  templateUrl: './tech-weekly-work-index-add.component.html',
  styleUrls: ['./tech-weekly-work-index-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHWeeklyWorkIndexAddComponent implements OnInit {
  IsEdit: boolean;
  stringHtml: string = null;
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;
  WorkIndexDetilsFilterFormGroup: UntypedFormGroup;
  selectedFileName: string = '';
		
  WinchDetailsdataSource: MatTableDataSource<any> | null;
  NCRdataSource: MatTableDataSource<any> | null;
  DefectsdataSource: MatTableDataSource<any> | null;

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Shipyard Weekly Reports Details`);
    }

    @Input()
    columns: ListColumn[] = [
      // { property: "A", visible: true, name: "A" },
      // { property: "B", visible: true, name: "B" },
      { property: "Points", visible: true, name: "Points" },
      { property: "Details", visible: true, name: "Details" },
      // { property: "C", visible: true, name: "C" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

    @Input()
    NCRcolumns: ListColumn[] = [
    { property: "raised", visible: true, name: "raised" },
    { property: "action_token", visible: true, name: "action_token" },
    { property: "current_week", visible: true, name: "current_week" },
    { property: "last_week_balance", visible: true, name: "last_week_balance" },
   
   
  ] as ListColumn[];

  get NCRvisibleColumns() {
    return this.NCRcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  @Input()
  defectscolumns: ListColumn[] = [
  { property: "Department", visible: true, name: "Department" },
  { property: "Closed", visible: true, name: "action_token" },
  { property: "Open", visible: true, name: "Open" },
  { property: "Total", visible: true, name: "Total" },
 
 
] as ListColumn[];

get defectsvisibleColumns() {
  return this.defectscolumns
    .filter((column) => column.visible)
    .map((column) => column.property);
}
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.WorkIndexDetilsFilterFormGroup = this.fb.group({
      drpVessel: ["",Validators.required],
      Date_To: ["",Validators.required],
      txtYard_Report: ["",Validators.required],
      txtYard_Name: ["",Validators.required]
     
    });
    this.WinchDetailsdataSource = new MatTableDataSource();
    this.NCRdataSource = new MatTableDataSource();
    this.DefectsdataSource = new MatTableDataSource();
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }
  saveReportDetails(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(ReportDetailsComponent,
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
    onFileSelected(event: Event): void {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        this.selectedFileName = inputElement.files[0].name;
      } else {
        this.selectedFileName = '';
      }
      }
      removeUploadedFileadditem(): void {
      this.selectedFileName = null; // Reset the selectedFileNameCatalogue
      }

}
