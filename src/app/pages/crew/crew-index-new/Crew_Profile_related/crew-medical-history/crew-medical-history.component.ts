import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWMedicalHistoryAddModalComponent } from './crew-medical-history-add-modal/crew-medical-history-add-modal.component';
import { CREWCOVIDVaccinationAddModalComponent } from './crew-covid-vaccination-add-modal/crew-covid-vaccination-add-modal.component';
import { CREWCOVIDTestAddModalComponent } from './crew-covid-test-add-modal/crew-covid-test-add-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-medical-history',
  templateUrl: './crew-medical-history.component.html',
  styleUrls: ['./crew-medical-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWMedicalHistoryComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  crewmedicalcolumns: ListColumn[] = [
    { property: "Case_Date", visible: true, name: "Case Date" },
    { property: "Case_Type", visible: true, name: "Case Type" },
    { property: "Details", visible: true, name: "Details" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Spent_Amount", visible: true, name: "Spent Amount" },
    { property: "Action", visible: true, name: "" },

  ] as ListColumn[];

  crewvaccinationcolumns: ListColumn[] = [
    { property: "Date_Done", visible: true, name: "Date Done" },
    { property: "Vaccine_Name", visible: true, name: "Vaccine Name" },
    { property: "Dose_Type", visible: true, name: "Dose Type" },

  ] as ListColumn[];

  crewcovidtestcolumns: ListColumn[] = [
  { property: "Date_Of_Test", visible: true, name: "Date Of Test" },
  { property: "Test_Name", visible: true, name: "Test Name" },
  { property: "Test_Result", visible: true, name: "Test Result" },

] as ListColumn[];

  pageSize = 10;
  CrewMedicaldataSource: MatTableDataSource<any> | null;
  CrewVaccinationdataSource: MatTableDataSource<any> | null;
  CrewCovidTestdataSource: MatTableDataSource<any> | null;


  constructor(private dialog:MatDialog) { }

  get CrewMedicalvisibleColumns() {
    return this.crewmedicalcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get CrewVaccinationvisibleColumns() {
    return this.crewvaccinationcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get CrewCovidTestvisibleColumns() {
    return this.crewcovidtestcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }


  ngOnInit(): void {
    this.CrewMedicaldataSource = new MatTableDataSource();
    this.CrewVaccinationdataSource = new MatTableDataSource();
    this.CrewCovidTestdataSource = new MatTableDataSource();
  }

  AddCrewMedical(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWMedicalHistoryAddModalComponent, {
      width: "50%",
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

  AddCOVIDVaccination(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWCOVIDVaccinationAddModalComponent, {
      width: "55%",
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

  AddCOVIDTest(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWCOVIDTestAddModalComponent, {
      width: "55%",
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
