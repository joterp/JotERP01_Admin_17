import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { POSPortCallPurchaseOrderListComponent } from './pos-port-call-purchase-order-list/pos-port-call-purchase-order-list.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-ops-port-call-reports-history',
  templateUrl: './ops-port-call-reports-history.component.html',
  styleUrls: ['./ops-port-call-reports-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSPortCallReportsHistoryComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  purchasefollowupindexcolumns: ListColumn[] = [
    { property: "Vessel_Manager", visible: true, name: "Vessel Manager" },
    { property: "Fleet", visible: true, name: "Fleet" },
    { property: "Vessel_Name", visible: true, name: "Vessel Name" },
    { property: "Port", visible: true, name: "Port" },
    { property: "Voyage_Number", visible: true, name: "Voyage Number" },
    { property: "ETA", visible: true, name: "ETA" },
    { property: "ETB", visible: true, name: "ETB" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Checklist", visible: true, name: "Checklist" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" }
 
  ] as ListColumn[];
  pageSize = 10;
  PortCallsHistrydataSource: MatTableDataSource<any> | null;

  constructor(private titleService:Title, private sidenavService:SidenavService, private dialog:MatDialog) { 

    this.titleService.setTitle(`Vessel Port Calls History`);

  }

 get visibleColumnsPortCallsHistry () {
    return this.purchasefollowupindexcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
   
  

  ngOnInit(): void {

    this.PortCallsHistrydataSource = new MatTableDataSource();

  }
 
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);  
    this.PortCallsHistrydataSource.paginator = this.paginator;
    this.PortCallsHistrydataSource.sort = this.sort;
  }

  PortCallPurchaseOrderList(data: object){
    const dialogRef = this.dialog.open(POSPortCallPurchaseOrderListComponent, {
      width: "65%",
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


