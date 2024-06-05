import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-rpt-compare-report',
  templateUrl: './ops-rpt-compare-report.component.html',
  styleUrls: ['./ops-rpt-compare-report.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSRPTCompareReportComponent implements OnInit {

  CompareReportFilterFormGroup: UntypedFormGroup;
  loading: boolean;



  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router) { 
      this.titleService.setTitle(`Compare Report`);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.CompareReportFilterFormGroup = this.fb.group({
      drpVessel_Name: [""],
      txtDepartment_Name: [""],
      drpFrq_Months: [""],
      txtRef_Num: [""],
      txtSupplier: [""],
      drpReport_Name: [""],
      Date_Form: [""],
      txtSFIs: [""],
      txtVessel_Portcall: [""],
     
     
     
    });
  }
    clearFilter() {
      this.loading = true;
      this.CompareReportFilterFormGroup.reset();
      this.CompareReportFilterFormGroup.get("STATUS").patchValue("1");
      this.FetchAllData();
    }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
