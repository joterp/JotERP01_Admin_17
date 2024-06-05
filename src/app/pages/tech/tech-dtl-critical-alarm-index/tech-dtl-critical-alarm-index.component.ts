import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { TECHDTLCRITICALALARMINDEXAddComponent } from './tech-dtl-critical-alarm-index-add/tech-dtl-critical-alarm-index-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-dtl-critical-alarm-index',
  templateUrl: './tech-dtl-critical-alarm-index.component.html',
  styleUrls: ['./tech-dtl-critical-alarm-index.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TECHDTLCRITICALALARMINDEXComponent implements OnInit {
  pageSize = 10;

  dtlAlarmIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  
  loading: boolean;
  AlarmIndexFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Critical Alarm/Trip Test Record Log`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Machinery", visible: true, name: "Machinery" },
      { property: "Alarm", visible: true, name: "Alarm" },
      { property: "Date_Tested", visible: true, name: "Date_Tested" },
      { property: "Set_Value", visible: true, name: "Set_Value" },
      { property: "Permissible_Variance", visible: true, name: "Permissible_Variance" },
      { property: "Unit", visible: true, name: "Unit" },
      { property: "Obtained_Value", visible: true, name: "Obtained_Value" },
      { property: "Obtained_Variance", visible: true, name: "Obtained_Variance" },
      { property: "Obtained_Variance_Per", visible: true, name: "Obtained_Variance_Per" },
      { property: "SFI", visible: true, name: "SFI" },
      { property: "Remarks", visible: true, name: "Remarks" },
      { property: "Verified", visible: true, name: "Verified" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.AlarmIndexFilterFormGroup = this.fb.group({
      drpVessel: [""],
      drpMachinery: [""],
      drpAlarm: [""],
      drpSFI: [""],
      Date_Form: [""],
      Date_To: [""],
      drpStatus: ["2"]
    });
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
    this.AlarmIndexFilterFormGroup.reset();
    this.AlarmIndexFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewAlarmLog(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(TECHDTLCRITICALALARMINDEXAddComponent,
      {
        width: "40%",
      maxHeight: "80%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
