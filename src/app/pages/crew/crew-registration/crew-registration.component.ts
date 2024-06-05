import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CrewRegistrationAddComponent } from './crew-registration-add/crew-registration-add.component';
import { CREWAddToCrewDetailsComponent } from './crew-add-to-crew-details/crew-add-to-crew-details.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-registration',
  templateUrl: './crew-registration.component.html',
  styleUrls: ['./crew-registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrewRegistrationComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Crew_Name", visible: true, name: "Crew Name" },
    { property: "DOB", visible: true, name: "DOB" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "Type_Of_Vessel", visible: true, name: "Type Of Vessel" },
    { property: "Available_Date", visible: true, name:"Available Date" },
    { property: "Reminder_Date", visible: true, name: "Reminder Date" },
    { property: "Date_Registered", visible: true, name: "Date Registered" },
    { property: "CV", visible: true, name: "CV" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  CrewRegistrationFilterForm:UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    
    this.CrewRegistrationFilterForm = this.fb.group({
      drpManning_Office:[''],
      drpRank:[''],
      drpNationality:[''],
      drpVessel_Type:[''],
      drpStatus:[''],
      Registered_From:[''],
      pickerRegistered_To:[''],
      txtCrew_Name:[''],
      radioAdded_To_Crew:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CrewRegistrationAddComponent, {
      width: "60%",
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

  
  AddToCrew(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWAddToCrewDetailsComponent, {
      width: "65%",
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
