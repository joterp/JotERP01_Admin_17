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
import { OPSNewItemAddComponent } from '../ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-new-item-add/ops-new-item-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-FAMAmmunitionItemComponent',
  templateUrl: './ops-fam-ammunition-item.component.html',
  styleUrls: ['./ops-fam-ammunition-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSFAMAmmunitionItemComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  FireArmItemsFilterFormGroup: UntypedFormGroup;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Fire Arm Items`);
     }
     @Input()
    
     assigncustomcolumns:ListColumn[] = [
      { property: "Category", visible: true, name: "Category" },
      { property: "Item_Type", visible: true, name: "Item_Type" },
      { property: "Item_Name", visible: true, name: "Item_Name" },
      { property: "Model", visible: true, name: "Model" },
      { property: "Serial_Number", visible: true, name: "Serial_Number" },
      { property: "Item_Maker", visible: true, name: "Item_Maker" },
      { property: "Item_Condition", visible: true, name: "Item_Condition" },
      { property: "Kit", visible: true, name: "Kit" },
      { property: "Bought_On", visible: true, name: "Bought_On" },
      { property: "Box_No", visible: true, name: "Box_No" },
      { property: "Vessel_Name", visible: true, name: "Vessel_Name" },
      { property: "Loaned_From", visible: true, name: "Loaned_From" },
      { property: "Loan_Remarks", visible: true, name: "Loan_Remarks" },
      { property: "PO", visible: true, name: "PO" },
      { property: "PO_Date", visible: true, name: "PO_Date" },
      { property: "Remarks", visible: true, name: "Remarks" },
      { property: "Added_Report", visible: true, name: "Added_Report" },
      { property: "Quantity", visible: true, name: "Quantity" },
     
     ] as ListColumn[];
 
 
     @ViewChild("TABLE") table: ElementRef;
 
   
 
    
 
     @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
    
 
    
     FireArmItemsdataSource :MatTableDataSource<any> | null;
     
    //  dataSourceVessels: MatTableDataSource<any> | null;
    
    //  assignCertificatedataSource: MatTableDataSource<any> | null;
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
    fleetFilterFormGroup:UntypedFormGroup;
    SPFormGroup:UntypedFormGroup;
  ngOnInit(): void {
    this.FireArmItemsFilterFormGroup = this.fb.group({
      drpCategory: [""],
      drpItemType: [""],
      txtItem_Name: [""],
      txtModel_Name: [""],
      txtKit: [""]
      
    });
  
    this.FireArmItemsdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
   
    this.FireArmItemsdataSource.paginator = this.paginator;
  

   }

  get FireArmItemsvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  saveItem(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(OPSNewItemAddComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
