import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-cadet-log-training-plan-add',
  templateUrl: './crew-cadet-log-training-plan-add.component.html',
  styleUrls: ['./crew-cadet-log-training-plan-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogTrainingPlanAddComponent implements OnInit {
  IsEdit: boolean;
  pageSize = 10;
  panelOpenState = true;
  trainingPlandataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  trainingPlanFormGroup: UntypedFormGroup;
  selectTraineesFilterFormGroup:UntypedFormGroup

  constructor(private dialogRef: MatDialogRef<CREWCadetLogTrainingPlanAddComponent>,private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
     
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Staff_Code", visible: true, name: "Staff_Code" },
      { property: "LastFirst_Name", visible: true, name: "LastFirst_Name" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Nationality", visible: true, name: "Nationality" },
      { property: "DOB", visible: true, name: "DOB" },
      { property: "Age", visible: true, name: "Age" },
      { property: "Last_Vessel", visible: true, name: "Last_Vessel" },
      { property: "Status", visible: true, name: "Status" },
      { property: "CheckBox", visible: true, name: "CheckBox" },
    ] as ListColumn[];

    get cadetTrainingvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
   
    this.trainingPlanFormGroup = this.fb.group({
      drpVessel_Name: [""],
      txtTranining_Name: [""],
      txtIMEI_No: [""],
      drpTraining_Type: [""],
      Date_Form: [""],
    });

    this.selectTraineesFilterFormGroup = this.fb.group({
      txtStaff_Name: [""],
      drpRank: [""],
      radioNew_Supplier_Status: ["1"]
    });
    this.trainingPlandataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.trainingPlandataSource.paginator = this.paginator;
    this.trainingPlandataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.trainingPlanFormGroup.reset();
    this.trainingPlanFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
