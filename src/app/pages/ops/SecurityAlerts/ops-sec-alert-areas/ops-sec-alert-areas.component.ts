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
import { OPSALertAreasModelComponent } from './ops-alert-areas-model/ops-alert-areas-model.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-sec-alert-areas',
  templateUrl: './ops-sec-alert-areas.component.html',
  styleUrls: ['./ops-sec-alert-areas.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSSECAlertAreasComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  // AlertListFilterFormGroup: FormGroup;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Manage High Risk Areas`);
     }
     @Input()
    
     assigncustomcolumns:ListColumn[] = [
      { property: "Area_Name", visible: true, name: "Area_Name" },
      { property: "Description", visible: true, name: "Description" },
      { property: "Colour", visible: true, name: "Colour" },
    
    
    
     ] as ListColumn[];
 
 
     @ViewChild("TABLE") table: ElementRef;
 
   
 
    
 
     @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
    
 
    
     AlertAreadataSource :MatTableDataSource<any> | null;
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;

  ngOnInit(): void {
    this.AlertAreadataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
   
    this.AlertAreadataSource.paginator = this.paginator;
  

   }

  get AlertListvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  saveAlertAreas(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OPSALertAreasModelComponent,
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
