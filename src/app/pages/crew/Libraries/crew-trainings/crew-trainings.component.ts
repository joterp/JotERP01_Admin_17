import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWTrainingsAddComponent } from './crew-trainings-add/crew-trainings-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-trainings',
  templateUrl: './crew-trainings.component.html',
  styleUrls: ['./crew-trainings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWTrainingsComponent implements OnInit {
  pageSize = 10;

  crewTrainingdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;

  crewTrainingFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Trainings`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Tainings_Short_Name", visible: true, name: "ID" },
       { property: "Training_Name", visible: true, name: "Training_Name" },
       { property: "Training_details", visible: true, name: "Training_details" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get crewTrainingvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.crewTrainingFormGroup = this.fb.group({
      txtTraining_Short_Name: [""],
      txtTraining_Name: [""],
      drpStatus: ["1"],
      txtTraining_Details: [""],
    });
    this.crewTrainingdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.crewTrainingdataSource.paginator = this.paginator;
    this.crewTrainingdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.crewTrainingFormGroup.reset();
    this.crewTrainingFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveTraining(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWTrainingsAddComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
