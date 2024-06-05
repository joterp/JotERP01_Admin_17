import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSVOYAGECPLIBRARYEditComponent } from './ops-voyage-cp-library-edit/ops-voyage-cp-library-edit.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-voyage-cp-library',
  templateUrl: './ops-voyage-cp-library.component.html',
  styleUrls: ['./ops-voyage-cp-library.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSVOYAGECPLIBRARYComponent implements OnInit {

  VesselVoyageIndexFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Voyage_No", visible: true, name: "Voyage No" },
    { property: "Voyage_Start_Date", visible: true, name: "Voyage Start Date" },
    { property: "Voyage_End_Date", visible: true, name: "Voyage End Date" },
    { property: "Charterer", visible: true, name: "Charterer" },
    { property: "Broker", visible: true, name: "Broker" },
    { property: "Charterer_Type", visible: true, name: "Charterer Type" },
    { property: "Charterer_Terms", visible: true, name: "Charterer Terms" },
    { property: "Remarks", visible: true, name: "Remarks" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor(private titleService:Title, private sidenavService: SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog) {
    this.titleService.setTitle(`Vessel Voyage Index`);
   }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();

    this.VesselVoyageIndexFilterForm = this.fb.group({
      drpVessel:[''],
      txtVoyage_No:[''],
      Voyage_Start_Date_From:[''],
      Voyage_Start_Date_To:[''],
      Voyage_End_Date_From:[''],
      Voyage_End_Date_To:[''],
      txtCharterer:[''],
      txtBroker:[''],
      drpCharterer_Type:[''],
      drpStatus:['']
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

  AddNewVoyage(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSVOYAGECPLIBRARYEditComponent, {
      width: "50%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.modeltitle = modeltitle;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

}
