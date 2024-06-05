import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { TECHWeeklyWorkIndexAddComponent } from './tech-weekly-work-index-add/tech-weekly-work-index-add.component';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-tech-weekly-work-index',
  templateUrl: './tech-weekly-work-index.component.html',
  styleUrls: ['./tech-weekly-work-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TECHWeeklyWorkIndexComponent implements OnInit {
  pageSize = 10;

  WeeklyWorkIndexdataSource: MatTableDataSource<any> | null;
 
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  
  loading: boolean;
  WeeklyWorkIndexFilterFormGroup: UntypedFormGroup;



  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router) {
      this.titleService.setTitle(`Shipyard Weekly Report`);
     }
     @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Date", visible: true, name: "Date" },
      { property: "Report", visible: true, name: "Report" },
      { property: "Yard_Name", visible: true, name: "Yard_Name" },
      { property: "Next_Week_Plan", visible: true, name: "Next_Week_Plan" },
      { property: "Notes", visible: true, name: "Notes" },
      { property: "Prepared_By", visible: true, name: "Prepared_By" },
      { property: "Approved_By", visible: true, name: "Approved_By" },
      { property: "Current_Status", visible: true, name: "Current_Status" },
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
  
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.WeeklyWorkIndexFilterFormGroup = this.fb.group({
      drpVessel_Name: [""],
      txtYard_Name: [""],
      Date_Form: [""],
      Date_To: [""],
      drpReport_Status: ["0"],
      drpStatus: ["2"]
    });
    this.WeeklyWorkIndexdataSource = new MatTableDataSource();
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.WeeklyWorkIndexdataSource.paginator = this.paginator;
    this.WeeklyWorkIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.WeeklyWorkIndexFilterFormGroup.reset();
    this.WeeklyWorkIndexFilterFormGroup.get("STATUS").patchValue("1");
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

    WeeklyWorkDetails(buttonName:string){
      if(buttonName === 'TECH_Weekly_Work_Details'){
       this.router.navigate(['TECH/TECH_Weekly_Work_Details'])
      } 
   }

   

}
