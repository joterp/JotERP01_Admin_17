import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWAdditionalChecksAddComponent } from './crew-additional-checks-add/crew-additional-checks-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';
export interface manningFields {
  addedBy: string;
  addedByName: string;
  addedOnDate: string;
  editedBy: string;
  editedByName: string;
  editedOnDate: string;
  guid: string;
  id: number;
  manninG_ID	: number;
  fields:	string
  shoW_IN_PROFILE	:number;
  activE_STATUS	:number;
  traiT_TYPE	:number
  traiT_UNIT	:number
  remark	:string
}


@Component({
  selector: 'fury-crew-additional-checks',
  templateUrl: './crew-additional-checks.component.html',
  styleUrls: ['./crew-additional-checks.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWAdditionalChecksComponent implements OnInit {
  pageSize = 10;
  
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE4NjgxNDA4LCJleHAiOjE3MTg3MTE0MDcsImlhdCI6MTcxODY4MTQwOCwiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.KoYEyDXqCwchcbXtiJMAW56Wy8DBSCa8EEz0RUx27UM  ';
  dataSource: MatTableDataSource<manningFields>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  loading: boolean;
  crewTraitsFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private http: HttpClient) {
      this.titleService.setTitle(`Crew Traits`);
      this.dataSource = new MatTableDataSource();
     }
     @Input()
     columns: ListColumn[] = [
      //  { property: "Detail_To_Check", visible: true, name: "Detail_To_Check" },
       { property: "Type", visible: true, name: "Type" },
       { property: "Unit", visible: true, name: "Unit" },
       { property: "Show_In_Profile", visible: true, name: "Show_In_Profile" },
       { property: "Remarks", visible: true, name: "Remarks" },
       { property: "action", visible: true, name: "action" },
     ] as ListColumn[];
 
     get crewTraitsvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

  ngOnInit(): void {
    this.fetchManningFields();
    this.sidenavService.setCollapsed(true);
    this.crewTraitsFormGroup = this.fb.group({
      txtDetail_Check: [""],
      drpType: [""],
      drpUnit: [""],
      drpStatus: ["1"]
    });
    this.dataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.crewTraitsFormGroup.reset();
    this.crewTraitsFormGroup.get("drpStatus").patchValue("1");
    this.fetchManningFields();
  }
  fetchManningFields() {
    this.api.getGraphqlDataAdditionalChecks().subscribe(response => {
      const manningFields: manningFields[] = response.data.manningFields;
      this.dataSource.data = manningFields;
    });
  }
 
  saveFields(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWAdditionalChecksAddComponent,
      {
        width: "50%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });
      dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
    changeStatus(data: any): void {
      if (!data || !data.id) {
        console.error('Invalid data or missing ID for deletion');
        return;
      }
  
      const id = data.id;
      const dialogRef = this.dialog.open(StatusChangeConfirmation, {
        disableClose: false,
        data: {
          title: data["ACTIVE_STATUS"] ? "Confirm Deletion" : "Confirm Restore",
          message: data["ACTIVE_STATUS"]
            ? "Are you sure you want to delete this record?"
            : "Are you sure you want to restore this record?"
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.api.DeleteDataService('v1/ManningFields', id).subscribe(
            (res: any) => {
              if (Number.isInteger(res)) {
                this.common.ShowMessage("Manning Fields Deleted Successfully", "notify-success", 3000);
                this.fetchManningFields();
              } else {
                this.common.ShowMessage(res["Message"], "notify-error", 6000);
              }
            },
            (error) => {
              console.error('Error deleting record', error);
              this.common.ShowMessage(error["Message"], "notify-error", 6000);
            }
          );
        }
      });
    }

}
