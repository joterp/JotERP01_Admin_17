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
  selector: 'fury-ops-fam-ammunition-kit',
  templateUrl: './ops-fam-ammunition-kit.component.html',
  styleUrls: ['./ops-fam-ammunition-kit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSFAMAmmunitionKitComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  FireArmKitFilterFormGroup: UntypedFormGroup;
 
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Fire Arm Kits`);
     }
     @Input()
    
     assigncustomcolumns:ListColumn[] = [
      { property: "Kit", visible: true, name: "Kit" },
      { property: "Items_Iculuded", visible: true, name: "Items_Iculuded" },
      { property: "Current_Location", visible: true, name: "Current_Location" },
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Port_Name", visible: true, name: "Port_Name" },
      { property: "Placed_Date", visible: true, name: "Placed_Date" },
      { property: "Offlanded_Date", visible: true, name: "Offlanded_Date" },
      { property: "Status", visible: true, name: "Status" },
     
     ] as ListColumn[];
 
 
     @ViewChild("TABLE") table: ElementRef;
 
   
 
    
 
     @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
    
 
    
     FireArmKitdataSource :MatTableDataSource<any> | null;
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;
  ngOnInit(): void {
    this.FireArmKitFilterFormGroup = this.fb.group({
      txtKit: [""],
      drpLocation: [""],
      drpVessel: [""],
      drpPort: [""],
      drpStatus: [""]
      
    });
  
    this.FireArmKitdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
   
    this.FireArmKitdataSource.paginator = this.paginator;
  

   }

  get FireArmKitsvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  FireArmKitDetails(buttonName:string){
    if(buttonName === 'FAM_AmmunitionKit_Individual'){
    this.router.navigate(['OPS/FireArmsMovement/FAM_AmmunitionKit/FAM_AmmunitionKit_Individual'])
    } 
  }

}
