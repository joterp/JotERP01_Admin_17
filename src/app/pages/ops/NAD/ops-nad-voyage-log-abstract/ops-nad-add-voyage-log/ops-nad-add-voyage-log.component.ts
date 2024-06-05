import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSAddDailyVoyageLogComponent } from './ops-add-daily-voyage-log/ops-add-daily-voyage-log.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-nad-add-voyage-log',
  templateUrl: './ops-nad-add-voyage-log.component.html',
  styleUrls: ['./ops-nad-add-voyage-log.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNADAddVoyageLogComponent implements OnInit {

  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
  loading: boolean;
  selectAllChecked = false;
  
  CompareReportFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router) {
      this.titleService.setTitle(`Add New Voyage Log`);
     }
     @Input()
    
     assigncustomcolumns:ListColumn[] = [
      { property: "pe", visible: true, name: "pe" },
      { property: "se", visible: true, name: "se" },
      { property: "me", visible: true, name: "me" },
      { property: "ae", visible: true, name: "ae" },
      
     
     
     ] as ListColumn[];
 
 
     @ViewChild("TABLE") table: ElementRef;
 
   
 
    
 
     @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
    
 
    
     alertareasdataSource :MatTableDataSource<any> | null;
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.CompareReportFilterFormGroup = this.fb.group({
      drpTowing_vessel: ["",Validators.required],
      drpTowed_Vessel: ["",Validators.required],
      txtVoyage_No: ["",Validators.required],
      Date_Form: ["",Validators.required],
      drpDeparture_Port: ["",Validators.required],
      drpArrival_Port: [""],
      txtDraft_Tug: [""],
      txtDraft_Tow: [""],
      txtTotal_Crew: [""],
      txtDept_Port: [""],
      txtArr_Port: [""],
      txtRemarks: [""],
      txtMGO: [""],
      txtLO: [""],
      txtHYD_OIL: [""],
      txtFW: [""],
      drpLoaded: [""],
      txtqty_Loaded: [""],
     
     
     
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
  ngAfterViewInit() {
   
    this.alertareasdataSource.paginator = this.paginator;
  

   }

  get alertAreasvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

 

ngOnDestroy() {
  this.sidenavService.setCollapsed(false);
}

saveDailyVoyageLog(data:object, IsEdit:boolean) {
  const dialogRef = this.dialog.open(OPSAddDailyVoyageLogComponent,
    {
      width: "90%",
      maxHeight: "90%",
      disableClose: true,
      data:data
    });

    dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
  });
  } 


}
