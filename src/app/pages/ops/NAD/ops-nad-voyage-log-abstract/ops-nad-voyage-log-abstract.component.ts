import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-nad-voyage-log-abstract',
  templateUrl: './ops-nad-voyage-log-abstract.component.html',
  styleUrls: ['./ops-nad-voyage-log-abstract.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNADVoyageLogAbstractComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  AbstractLogFilterFormGroup: UntypedFormGroup;
 
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Voyage Abstract Log`);
     }
     @Input()
    
     assigncustomcolumns:ListColumn[] = [
      { property: "Towed_Barge", visible: true, name: "Towed_Barge" },
      { property: "Towed_Tug", visible: true, name: "Towed_Tug" },
      { property: "Voyage_No", visible: true, name: "Voyage_No" },
      { property: "Departure_Port", visible: true, name: "Departure_Port" },
      { property: "Arrived_Port", visible: true, name: "Arrived_Port" },
      { property: "Departure_Date", visible: true, name: "Departure_Date" },
      { property: "Finalized", visible: true, name: "Finalized" },
     
     
     ] as ListColumn[];
 
 
     @ViewChild("TABLE") table: ElementRef;
 
   
 
    
 
     @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
    
 
    
     AbstractLogdataSource :MatTableDataSource<any> | null;
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.AbstractLogFilterFormGroup = this.fb.group({
      txtKit: [""],
      drpLocation: [""],
      drpVessel: [""],
      drpPort: [""],
      drpStatus: [""]
      
    });
  
    this.AbstractLogdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
   
    this.AbstractLogdataSource.paginator = this.paginator;
  

   }

  get AbstractLogvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  
  addVoyageLog(buttonName:string){
    if(buttonName === 'OPS_NAD_Add_Voyage_Log'){
    this.router.navigate(['OPS/NAD/OPS_NAD_Add_Voyage_Log'])
    } 
    }
    TreeView(buttonName:string){
      if(buttonName === 'OPS_NAD_Voyage_Log_TreeView'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Voyage_Log_TreeView'])
      } 
      }

     

}
