import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';


import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { PURCInviteSupplierComponent } from './purc-invite-supplier/purc-invite-supplier.component';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fury-purc-approve-supplier',
  templateUrl: './purc-approve-supplier.component.html',
  styleUrls: ['./purc-approve-supplier.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCApproveSupplierComponent implements OnInit {
  title: string;

  routeTitle:string="";
  ApproveSupplierFilterForm:UntypedFormGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "ID", visible: true, name: "ID" },
    { property: "Code", visible: true, name: "Code" },
    { property: "Name", visible: true, name: "Name" },
    { property: "City", visible: true, name: "City" },
    { property: "Country", visible: true, name: "Country" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Internal_Reference", visible: true, name: "Internal Reference" },
    { property: "Current_Status", visible: true, name: "Current Status" },
    { property: "Pending_With", visible: true, name: "Pending With" },
    { property: "Expiry_Date", visible: true, name: "Expiry Date" },
    { property: "Last_Eval", visible: true, name: "Last Eval" },
    { property: "Eval_Next_Due", visible: true, name: "Eval Next Due" },
    { property: "Scopes", visible: true, name: "Scopes" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
 


  constructor(private titleService:Title, private dialog: MatDialog, private sidenavService: SidenavService,private fb:UntypedFormBuilder,private router: Router, private route: ActivatedRoute) {
    this.titleService.setTitle(`Approved Supplier List`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Received title:', params['title']);
      // Use the title parameter as needed
    });
    this.dataSource = new MatTableDataSource();
    this.routeTitle = this.titleService.getTitle();

    this.ApproveSupplierFilterForm = this.fb.group({
      txtSupplier_Code:[''],
      txtName:[''],
      txtCity:[''],
      txtInternal_Reference:[''],
      drpCountry:[''],
      drpCurrent_Status:[''],
      drpPending_With:[''],
      expiry_date:[''],
      drpScope:[''],
      drpShow:['1']
    })
   
  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  gotoPURC_SupplierApprove(buttonName:string){
         if(buttonName === 'PURC_Add_Supplier_Details_Short'){
          this.router.navigate(['PURC/PURC_Add_Supplier_Details_Short']);
         }else if(buttonName === 'PURC_ApproveSupplierView'){
          this.router.navigate(['PURC/PURC_ApproveSupplierView']);
         }
  }
  AddInviteSupplier(data: object) {
    const dialogRef = this.dialog.open(PURCInviteSupplierComponent, {
      width: "70%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

}
