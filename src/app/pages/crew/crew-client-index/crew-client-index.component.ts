import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWClientIndexAddComponent } from './crew-client-index-add/crew-client-index-add.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-client-index',
  templateUrl: './crew-client-index.component.html',
  styleUrls: ['./crew-client-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWClientIndexComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "DOB", visible: true, name: "DOB" },
    { property: "Manning_Agent", visible: true, name: "Manning Agent" },
    { property: "SignOn_Date", visible: true, name: "SignOn Date" },
    { property: "EOC", visible: true, name:"EOC" },
    { property: "SignOff_Date", visible: true, name: "SignOff Date" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  CrewClientIndexFilterForm: UntypedFormGroup;

  constructor(private sidenavService: SidenavService, private fb: UntypedFormBuilder, private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.CrewClientIndexFilterForm = this.fb.group({
      drpVessel:[''],
      drpRank:[''],
      txtStaff_Name:[''],
      txtManning_Agent:[''],
      radioShow:[''],
      radioSea_Staff:[''],
      txtSign_Off:[''],
      drpNationality:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWClientIndexAddComponent, {
      width: "40%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }


}
