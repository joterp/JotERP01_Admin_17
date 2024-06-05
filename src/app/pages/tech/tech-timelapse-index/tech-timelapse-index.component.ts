import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { ADDNEWTLComponent } from './add-new-tl/add-new-tl.component';
import { IMPORTDETAILSComponent } from './import-details/import-details.component';
import { EXPORTDETAILSComponent } from './export-details/export-details.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-timelapse-index',
  templateUrl: './tech-timelapse-index.component.html',
  styleUrls: ['./tech-timelapse-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TECHTimelapseIndexComponent implements OnInit {
  pageSize = 10;

  WeeklyWorkIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  panelOpenState = true;




  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  
  loading: boolean;
  TimeLapseIndexFilterFormGroup: UntypedFormGroup;
  disabled = false;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder,private router:Router,) { 
      this.titleService.setTitle(`TimeLapse`);
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
    this.TimeLapseIndexFilterFormGroup = this.fb.group({
      drpFleet: [""],
      drpVessel_Name: [""],
      drpSFI_Code: [""],
      txtSFI_Name: [""],
      drpCustom_Tags: [""],
      drpFile_Type :[""],
      Date_Form: [""],
      Date_To: [""],
      
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
    this.TimeLapseIndexFilterFormGroup.reset();
    this.TimeLapseIndexFilterFormGroup.get("STATUS").patchValue("1");
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

    saveNewTL(data:object) {
      const dialogRef = this.dialog.open(ADDNEWTLComponent,
        {
          width: "30%",
        maxHeight: "80%",
          disableClose: true,
          data:data
        });
  
        
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 
      saveImportDetails(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(IMPORTDETAILSComponent,
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
        saveExportDetails(data:object, IsEdit:boolean) {
          const dialogRef = this.dialog.open(EXPORTDETAILSComponent,
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

          CompareDetails(buttonName:string){
            if(buttonName === 'TL_Compare_List'){
             this.router.navigate(['TECH/TL_Compare_List'])
            } 
         }
        
       
}
