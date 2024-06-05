import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWRankSalaryAssignmentAddComponent } from './crew-rank-salary-assignment-add/crew-rank-salary-assignment-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-rank-salary-assignment',
  templateUrl: './crew-rank-salary-assignment.component.html',
  styleUrls: ['./crew-rank-salary-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CREWRankSalaryAssignmentComponent implements OnInit {
  pageSize = 10;

  dtlAlarmIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  
  loading: boolean;
  rankSalaryAssignmentFilterFormGroup: UntypedFormGroup;
  ImportFilterFormGroup:UntypedFormGroup
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Crew Rank Salary Assignment`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Salary_Name", visible: true, name: "Salary_Name" },
      { property: "Nationality", visible: true, name: "Nationality" },
      { property: "Vessel_Flag", visible: true, name: "Vessel_Flag" },
      { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Effective_Date_From", visible: true, name: "Effective_Date_From" },
      { property: "Effective_Date_To", visible: true, name: "Effective_Date_To" },
      { property: "Earning", visible: true, name: "Earning" },
      { property: "Deduction", visible: true, name: "Deduction" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.rankSalaryAssignmentFilterFormGroup = this.fb.group({
      drpSalary_Name: [""],
      drpNationality: [""],
      drpVessel_Flag: [""],
      drpVessel_Type: [""],
      drpRank: [""],
      Date_Form: [""],
      drpStatus: ["2"],
      Date_To: [""]
    });


    this.ImportFilterFormGroup = this.fb.group({
      radioNew_Reqsn_Status:["1"]

    })
    this.dtlAlarmIndexdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.dtlAlarmIndexdataSource.paginator = this.paginator;
    this.dtlAlarmIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.rankSalaryAssignmentFilterFormGroup.reset();
    this.rankSalaryAssignmentFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveSalaryStatement(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWRankSalaryAssignmentAddComponent,
      {
        width: "45%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
