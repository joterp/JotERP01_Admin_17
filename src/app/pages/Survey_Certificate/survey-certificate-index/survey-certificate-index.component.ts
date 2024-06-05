import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { Title } from '@angular/platform-browser';
import { ReplaySubject, Observable, Subject } from "rxjs";

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { AuthGuard } from "src/app/providers/auth/AuthGuard";
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';
import * as XLSX from "xlsx";

// import { PURCUnitEditComponent } from '../purc-unit/purc-unit-edit/purc-unit-edit.component';
import { UnitsService } from 'src/app/services/units.service';

import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

import { CreateLinkOpenComponent } from './create-link-open/create-link-open.component';
import { SendAttachmentModelComponent } from './send-attachment-model/send-attachment-model.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-survey-certificate-index',
  templateUrl: './survey-certificate-index.component.html',
  styleUrls: ['./survey-certificate-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SURVEYCertificateIndexComponent implements OnInit {

  pageSize = 10;
  form: UntypedFormGroup;
  // displayedColumns: string[] = [
   
  //   "cadTrade.total",
  //   "cadTrade.amount",
  //   "data2.total",
  //   "data2.amount",
  //   "data3.total",
   
  
  // ];
  indexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 
  @ViewChild('select') select: MatSelect;
  allSelected=false;
 Department: any[] = [
{value: 'Alexandre-0', viewValue: 'Alexandre'},
{value: 'BluePearl-1', viewValue: 'Blue Pearl'},
{value: 'Yami-2', viewValue: 'Yami'}
];



  loading: boolean;
  indexfilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  AllUnitsData:any= []
 
  

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private _unitService: UnitsService,
    private formBuilder: UntypedFormBuilder
    ) { 
      this.form = this.formBuilder.group({
        drpVessel: [[]] // Initialize the form control
      });
      
      
      this.titleService.setTitle(`Survey Certificates - Current Status`);
  



  }
  @Input()
  columns: ListColumn[] = [
    { property: "cadTrade.total", visible: true, name: "cadTrade.total" },
    { property: "cadTrade.amount", visible: true, name: "cadTrade.amount" },
    { property: "data2.total", visible: true, name: "data2.total" },
    { property: "data2.amount", visible: true, name: "data2.amount" },
    { property: "data3.total", visible: true, name: "data3.total" },
    //  { property: "Active_Status", visible: true, name: "Status" },
   
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.indexfilterFormGroup = this.fb.group({
      drpVessel: [""],
      drpDepartment: [""],
      drpCategory: [""],
      drpSurvey_Certificate: [""],
      txtMake_Model: [""],
      drpTenure: [""],
      Issued_Before: [""],
      Expired_Before: [""],
      Remind_Before: [""],
      drpExpired: [""],
      drpVerified: [""],
      drpShow: [""]
    });

    this.indexdataSource = new MatTableDataSource();
    
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  
  // saveData(data:object, IsEdit:boolean) {
  //   const dialogRef = this.dialog.open(PURCUnitEditComponent,
  //     {
  //       width: "50%",
  //       maxHeight: "80%",
  //       disableClose: true,
  //       data:data
  //     });

  //     dialogRef.componentInstance.IsEdit= IsEdit;
  //   dialogRef.afterClosed().subscribe((data:any)=>{
     
  //       this.getUnits();
      
  
   
  //   });
  //   }  
  
  SaveCreateLink(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(CreateLinkOpenComponent, {
      width: "40%",
      maxHeight: "90%",
      disableClose: true,
    });
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
     
    });
  }
  SaveAttachment(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(SendAttachmentModelComponent, {
      width: "60%",
      maxHeight: "90%",
      disableClose: true,
     
    });
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
     
    });
  }


 
  

  



  
  ngAfterViewInit() {
    this.indexdataSource.paginator = this.paginator;
    this.indexdataSource.sort = this.sort;
  }

  
  clearFilter() {
    this.loading = true;
    this.indexfilterFormGroup.reset();
    this.indexfilterFormGroup.get("STATUS").patchValue("1");
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
