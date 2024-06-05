import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-rpt-followup-index',
  templateUrl: './ops-rpt-followup-index.component.html',
  styleUrls: ['./ops-rpt-followup-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSRPTFOLLOWUPINDEXComponent implements OnInit {
  pageSize = 10;

  VesselReportdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  FollowupIndexFilterFormGroup: UntypedFormGroup;

   
  @ViewChild('select') select: MatSelect;
  allSelected=false;
  Vessel: any[] = [
    {value: 'Alexandre', viewValue: 'Alexandre'},
    {value: 'Marie', viewValue: 'Marie'},
    {value: 'yami', viewValue: 'Yami'}
    ];
  
    date = new UntypedFormControl(new Date());
    serializedDate = new UntypedFormControl((new Date()).toISOString());
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Reports/Forms Followup Index`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Vessel", visible: true, name: "Vessel" },
       { property: "Report_Name", visible: true, name: "Report_Name" },
       { property: "Report_Date", visible: true, name: "Report_Date" },
       { property: "No_of_Followup", visible: true, name: "No_of_Followup" },
    
     ] as ListColumn[];
 
     get VesselReportvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.FollowupIndexFilterFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpReport_Name: [""],
      Date_Form: [""],
      Date_To: [""],
      txtReport_Name: [""]
     
     
    });
    this.VesselReportdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.VesselReportdataSource.paginator = this.paginator;
    this.VesselReportdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.FollowupIndexFilterFormGroup.reset();
    this.FollowupIndexFilterFormGroup.get("STATUS").patchValue("1");
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

}
