import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { TECHLIBCRITICALALARMEditComponent } from './tech-lib-critical-alarm-edit/tech-lib-critical-alarm-edit.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-tech-lib-critical-alarm',
  templateUrl: './tech-lib-critical-alarm.component.html',
  styleUrls: ['./tech-lib-critical-alarm.component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class TECHLIBCRITICALALARMComponent implements OnInit {
  pageSize = 10;

  criticalAlarmdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  criticalAlarmfilterFormGroup: UntypedFormGroup;
  

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Critical Alarm/Trip Test Record Library`);
     }


     @Input()
    columns: ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Machinery", visible: true, name: "Machinery" },
      { property: "Alarm_Name", visible: true, name: "Alarm_Name" },
      { property: "Set_Value", visible: true, name: "Set_Value" },
      { property: "Unit", visible: true, name: "Unit" },
      { property: "Permissible_Variance", visible: true, name: "Permissible_Variance" },
      { property: "SFI", visible: true, name: "SFI" },
      { property: "Testing_Procedure", visible: true, name: "Testing_Procedure" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
    @ViewChild('select') select: MatSelect;
    allSelected=false;
    Vessel: any[] = [
      {value: 'Alexandre', viewValue: 'Alexandre'},
      {value: 'Marie', viewValue: 'Marie'},
      {value: 'yami', viewValue: 'Yami'}
      ];
      Machinery : any[] = [
        {value: 'A.E Fuel Oil Bypass Filter', viewValue: 'A.E Fuel Oil Bypass Filter'},
        {value: 'Air Dryer', viewValue: 'Air Dryer'},
        {value: 'AIS', viewValue: 'AIS'}
        ];

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.criticalAlarmfilterFormGroup = this.fb.group({
      drpVessel: [""],
      drpMachinery: [""],
      drpAlarm_Name: [""],
      drpSFI: [""],
      drpStatus: ["1"]
    });
    this.criticalAlarmdataSource = new MatTableDataSource();
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.criticalAlarmdataSource.paginator = this.paginator;
    this.criticalAlarmdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.criticalAlarmfilterFormGroup.reset();
    this.criticalAlarmfilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
    }

    optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
      newStatus = false;
      }
    });
    this.allSelected = newStatus;
    }

    saveNewAlarm(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(TECHLIBCRITICALALARMEditComponent,
        {
          width: "35%",
          maxHeight: "70%",
  
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
 
      });
      } 
    

}
