import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSAddReportsModelComponent } from './ops-add-reports-model/ops-add-reports-model.component';
import { OPSReportSFIsFilterComponent } from './ops-report-sfis-filter/ops-report-sfis-filter.component';
import { OPSVesselPortcallModelComponent } from './ops-vessel-portcall-model/ops-vessel-portcall-model.component';
import { OpsFollowupDetailsComponent } from './ops-followup-details/ops-followup-details.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-ops-rpt-report-index',
  templateUrl: './ops-rpt-report-index.component.html',
  styleUrls: ['./ops-rpt-report-index.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class OPSRPTReportIndexComponent implements OnInit {
  pageSize = 10;

  ReportIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: true }) sort: MatSort;

  loading: boolean;
  ReportIndexFilterFormGroup: UntypedFormGroup;

   
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
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router) { 
      this.titleService.setTitle(`Reports Index`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Department_Name", visible: true, name: "Department_Name" },
      { property: "Report_Name", visible: true, name: "Report_Name" },
      { property: "Report_Date", visible: true, name: "Report_Date" },
      { property: "Frequency", visible: true, name: "Frequency" },
      { property: "SFIs", visible: true, name: "SFIs" },
      { property: "Ref_No", visible: true, name: "Ref_No" },
      { property: "Vessel_Portcall", visible: true, name: "Vessel_Portcall" },
      { property: "Supplier_Used", visible: true, name: "Supplier_Used" },
      { property: "Ack_Reqd", visible: true, name: "Ack_Reqd" },
      { property: "Compare", visible: true, name: "Compare" },
      { property: "Followup", visible: true, name: "Followup" },
    ] as ListColumn[];

    get ReportIndexvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.ReportIndexFilterFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpReport_Name: [""],
      txtReport_Name: [""],
      Date_Form: [""],
      Date_To: [""],
      drpFrq_Months: [""],
      drpSupplier: [""],
      drpDepartment: [""],
      drpVessel_Portcall: [""],
      drpHas_Followup: [""],
      drpVerified: [""],
      drpStatus: [""],
      drpOverdue_Status: [""],
     
     
     
    });
    this.ReportIndexdataSource = new MatTableDataSource();
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.ReportIndexdataSource.paginator = this.paginator;
    this.ReportIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.ReportIndexFilterFormGroup.reset();
    this.ReportIndexFilterFormGroup.get("STATUS").patchValue("1");
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

    saveReports(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(OPSAddReportsModelComponent,
        {
          width: "35%",
        maxHeight: "80%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 

      OpenSFIsList(data: object) {
        const dialogRef = this.dialog.open(OPSReportSFIsFilterComponent, {
          width: "45%",
          maxHeight: "90%",
          disableClose: true,
        });
        // dialogRef.componentInstance.EditData = data;
    
        dialogRef.afterClosed().subscribe((data: any) => {
          if (data) {
            // this.onClickSubmit(this.filterFormGroup.value);
          }
        });
      }

      saveVesselPortcall(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(OPSVesselPortcallModelComponent,
          {
            width: "35%",
          maxHeight: "80%",
            disableClose: true,
            data:data
          });
    
          dialogRef.componentInstance.IsEdit= IsEdit;
        dialogRef.afterClosed().subscribe((data:any)=>{
         
        });
        } 

        saveFollowupDetails(data:object, IsEdit:boolean) {
          const dialogRef = this.dialog.open(OpsFollowupDetailsComponent,
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


          CompareReport(buttonName:string){
            if(buttonName === 'OPS_RPT_Compare_Report'){
            this.router.navigate(['OPS/VesselReport_Chng/OPS_RPT_Compare_Report'])
            } 
            }
}
