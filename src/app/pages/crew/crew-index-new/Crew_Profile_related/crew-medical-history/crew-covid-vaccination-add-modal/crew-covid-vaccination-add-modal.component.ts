import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'fury-crew-covid-vaccination-add-modal',
  templateUrl: './crew-covid-vaccination-add-modal.component.html',
  styleUrls: ['./crew-covid-vaccination-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWCOVIDVaccinationAddModalComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  
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

  CrewVaccinationdataSource: MatTableDataSource<any> | null;
  CrewCovidTestdataSource: MatTableDataSource<any> | null;
  
  modeltitle:string="";
  modeltype:string;

  selectedFileName: string = '';
  COVIDVaccinationFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWCOVIDVaccinationAddModalComponent>) { }

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

    this.CrewVaccinationdataSource = new MatTableDataSource();
    this.CrewCovidTestdataSource = new MatTableDataSource();

    this.COVIDVaccinationFormGroup = this.fb.group({
      radioType:['', Validators.required],
      drpName:['', Validators.required],
      vaccination_date:['', Validators.required],
      drpDose_Type:['', Validators.required],
      txtRemark:['']
    })
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  removeUploadedFileadditem(): void {
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
