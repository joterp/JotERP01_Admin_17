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
import { OpsLibVesselPortcallChecklistEditComponent } from './ops-lib-vessel-portcall-checklist-edit/ops-lib-vessel-portcall-checklist-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-lib-vessel-portcall-checklist',
  templateUrl: './ops-lib-vessel-portcall-checklist.component.html',
  styleUrls: ['./ops-lib-vessel-portcall-checklist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSLIBVesselPortcallChecklistComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  PortcallChecklistFilterFormGroup: UntypedFormGroup;
 
 


  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) { 
      this.authGuard = this.auth;

      this.titleService.setTitle(`Vessel Port Call CheckList`);
    }
    @Input()
    
    assigncustomcolumns:ListColumn[] = [
     { property: "Department", visible: true, name: "Department" },
     { property: "CheckList_Name", visible: true, name: "CheckList_Name" },
     { property: "Document_Id", visible: true, name: "Document_Id" },
     { property: "Version", visible: true, name: "Version" },
     { property: "Date", visible: true, name: "Date" },
     { property: "Action", visible: true, name: "Action" },
    
    ] as ListColumn[];


    @ViewChild("TABLE") table: ElementRef;

  

   

    @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
   

   
    ChecklistdataSource :MatTableDataSource<any> | null;
    
   //  dataSourceVessels: MatTableDataSource<any> | null;
   
   //  assignCertificatedataSource: MatTableDataSource<any> | null;


    pageSize = 5;
   authGuard: AuthGuard;
   selectedItem: Array<any> = [];
   fleetFilterFormGroup:UntypedFormGroup;
   SPFormGroup:UntypedFormGroup;
  ngOnInit(): void {
    this.PortcallChecklistFilterFormGroup = this.fb.group({
      drpDepartment: [""],
      drpChecklist_Name: [""],
      txtDoc_TD: [""],
      Date_Form: [""],
      drpStatus: [""]
      
    });
  
    this.ChecklistdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
   
    this.ChecklistdataSource.paginator = this.paginator;
  
   
   }

  get ChecklistvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  saveNewCheckList(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsLibVesselPortcallChecklistEditComponent,
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
