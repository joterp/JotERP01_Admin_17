import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWVacanciesAddComponent } from './crew-manning-requirement-add/crew-vacancies-add.component';
import { Title } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-vacancies',
  templateUrl: './crew-vacancies.component.html',
  styleUrls: ['./crew-vacancies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWVcanciesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "OnBoard_But_Not_Yet_Assigned", visible: true, name: "OnBoard But Not Yet Assigned" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Before_EOC_Date", visible: true, name: "Before EOC Date" },
    { property: "Relieving_Date", visible: true, name: "Relieving Date" },
    { property: "Additional_Requirement", visible: true, name: "Additional Requirement" },
    { property: "Select", visible: true, name: "Select" },
    { property: "Action", visible: true, name: "" },

  ] as ListColumn[];

  Vacancies2columns: ListColumn[] = [
    { property: "Select", visible: true, name: "Select" },
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Proposed_Staff", visible: true, name: "Proposed Staff" },
    { property: "Manning_Office", visible: true, name: "Manning Office" },
    { property: "Last_Vessel", visible: true, name: "Last Vessel" },
    { property: "Current_Rank", visible: true, name: "Current Rank" },
    { property: "Proposed_On", visible: true, name: "Proposed On" },
    { property: "Available_Date", visible: true, name: "Available Date" },
    { property: "Proposed_Rank", visible: true, name: "Proposed Rank" },
  ] as ListColumn[];
  pageSize = 10;

  Vacancies4columns: ListColumn[] = [
    { property: "Port_Name", visible: true, name: "Port Name" },
    { property: "ETA", visible: true, name: "ETA" },
    { property: "ETB", visible: true, name: "ETB" },
    { property: "ETD", visible: true, name: "Manning Office" },

  ] as ListColumn[];

  Vacancies5columns: ListColumn[] = [
    { property: "Signing_Off_Staff_Code", visible: true, name: "Staff Code" },
    { property: "Signing_Off_Staff_Name", visible: true, name: "Staff Name" },
    { property: "Signing_Off_Rank", visible: true, name: "Rank" },
    { property: "Signing_Off_Vessel", visible: true, name: "Vessel" },
    { property: "Signing_Off_Actual_EOC", visible: true, name: "Actual EOC" },
    { property: "Joining_Staff_Code", visible: true, name: "Staff Code" },
    { property: "Joining_Staff_Name", visible: true, name: "Staff Name" },
    { property: "Joining_Off_Rank", visible: true, name: "Rank" },
    { property: "Joining_Off_Blank", visible: true, name: "" },
    { property: "Joining_Off_Vessel", visible: true, name: "Vessel" },
    { property: "Joining_Off_Available_Date", visible: true, name: "Available Date" },

  ] as ListColumn[];


  dataSource: MatTableDataSource<any> | null;
  Vacancies2dataSource: MatTableDataSource<any> | null;
  Vacancies4dataSource: MatTableDataSource<any> | null;
  Vacancies5dataSource: MatTableDataSource<any> | null;

  VacanciesFormGroup: UntypedFormGroup;
  constructor(private sidenavService: SidenavService, private fb: UntypedFormBuilder, private dialog: MatDialog, private titleService:Title) {
    this.titleService.setTitle(`Vacancies`);

   }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsVacancies2() {
    return this.Vacancies2columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsVacancies4() {
    return this.Vacancies4columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsVacancies5() {
    return this.Vacancies5columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.Vacancies2dataSource = new MatTableDataSource();
    this.Vacancies4dataSource = new MatTableDataSource();
    this.Vacancies5dataSource = new MatTableDataSource();

    this.VacanciesFormGroup = this.fb.group({
      radioVacancies: ['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {

    const dialogRef = this.dialog.open(CREWVacanciesAddComponent, {
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
