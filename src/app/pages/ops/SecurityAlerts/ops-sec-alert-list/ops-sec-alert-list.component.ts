import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSSECAlertListAddComponent } from './ops-sec-alert-list-add/ops-sec-alert-list-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-sec-alert-list',
  templateUrl: './ops-sec-alert-list.component.html',
  styleUrls: ['./ops-sec-alert-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSSECAlertListComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  // AlertListFilterFormGroup: FormGroup;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Alert List`);
     }
     @Input()
    
     assigncustomcolumns:ListColumn[] = [
      { property: "Ref_No", visible: true, name: "Ref_No" },
      { property: "Date", visible: true, name: "Date" },
      { property: "Category", visible: true, name: "Category" },
      { property: "Location", visible: true, name: "Location" },
      { property: "Head_Line", visible: true, name: "Head_Line" },
      { property: "Source", visible: true, name: "Source" },
    
    
     ] as ListColumn[];
 
 
     @ViewChild("TABLE") table: ElementRef;
 
   
 
    
 
     @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
    
 
    
     AlertListdataSource :MatTableDataSource<any> | null;
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;
  ngOnInit(): void {
    // this.AlertListFilterFormGroup = this.fb.group({
    //   txtRef_No: [""],
    //   Date_Form :[""],
    //   drpCategory: [""],
    //   txtLocation: [""],
    //   txtHead_Line: [""],
    //   txtSource: [""]
      
    // });
  
    this.AlertListdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
   
    this.AlertListdataSource.paginator = this.paginator;
  

   }

  get AlertListvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  saveNewAlerts(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OPSSECAlertListAddComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
   
    });
    } 


}
