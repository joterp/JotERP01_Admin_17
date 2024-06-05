import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-offshore-mid-night-report-index',
  templateUrl: './ops-offshore-mid-night-report-index.component.html',
  styleUrls: ['./ops-offshore-mid-night-report-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSOffshoreMidNightReportIndexComponent implements OnInit {
  pageSize = 10;

  offshoreMidNightdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator:MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  MidnightReportFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router: Router) {
      this.titleService.setTitle(`Offshore Midnight Report`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Vessel", visible: true, name: "Vessel" },
       { property: "Report_Date", visible: true, name: "Report_Date" },
       { property: "Location", visible: true, name: "Location" },
       { property: "Master", visible: true, name: "Master" },
       { property: "Crewob", visible: true, name: "Crewob" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get NADDocumentsvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.MidnightReportFilterFormGroup = this.fb.group({
      drpVessel: [""],
      Date_Form: [""],
      Date_To: [""],
     
    });
    this.offshoreMidNightdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.offshoreMidNightdataSource.paginator = this.paginator;
    this.offshoreMidNightdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.MidnightReportFilterFormGroup.reset();
    this.MidnightReportFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  MidNightReport(buttonName:string){
    if(buttonName === 'OPS_Offshore_Mid_Night_Report_Individual'){
    this.router.navigate(['OPS/OPS_Offshore_Mid_Night_Report_Individual'])
    } 
    }
  

}
