import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';



import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


import { InformationModelComponent } from './information-model/information-model.component';
import { CopyJobsModelComponent } from './copy-jobs-model/copy-jobs-model.component';
import { TECHLibraryPMSEditComponent } from './tech-library-pms-edit/tech-library-pms-edit.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-tech-library-pms',
  templateUrl: './tech-library-pms.component.html',
  styleUrls: ['./tech-library-pms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHLibraryPMSComponent implements OnInit {
  pageSize = 10;

  pmsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  pmsfilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Planned Maintenance Library`);
     }

    @Input()
    columns: ListColumn[] = [
      { property: "cadTrade.type", visible: true, name: "cadTrade.type" },
      { property: "cadTrade.value", visible: true, name: "cadTrade.value" },
     
      //  { property: "Active_Status", visible: true, name: "Status" },
     
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
    this.pmsfilterFormGroup = this.fb.group({
      drpFleet: [""],
      drpVessel:[""],
      drpMachinery: [""],
      drpSub_Component:[""],

      drpcms_jobs: [""],
      drpcritical_jobs:[""],
      drpcritical_Machinery: [""],
      drpInfrequent_use_machinery:[""],

      txtJob_Code: [""],
      txtJob_Title:[""],
      drpFrequency_Type: [""],
      txtFrequency_Value:[""],

      drpJob_Type: [""],
      drpDepartment:[""],
      drpRank: [""],

      drpStatus: ["1"]
    });
    this.pmsdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.pmsdataSource.paginator = this.paginator;
    this.pmsdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.pmsfilterFormGroup.reset();
    this.pmsfilterFormGroup.get("STATUS").patchValue("1");
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

    saveNewPmsJob(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(TECHLibraryPMSEditComponent,
        {
          width: "70%",
          maxHeight: "90%",
  
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
 
      });
      } 
    
      Information(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(InformationModelComponent,
          {
            width: "25%",
            maxHeight: "90%",
    
            disableClose: true,
            data:data
          });
    
          dialogRef.componentInstance.IsEdit= IsEdit;
        dialogRef.afterClosed().subscribe((data:any)=>{
   
        });
        } 

        CopyJobs(data:object, IsEdit:boolean) {
          const dialogRef = this.dialog.open(CopyJobsModelComponent,
            {
              width: "40%",
              maxHeight: "90%",
      
              disableClose: true,
              data:data
            });
      
            dialogRef.componentInstance.IsEdit= IsEdit;
          dialogRef.afterClosed().subscribe((data:any)=>{
     
          });
          } 
    

}
