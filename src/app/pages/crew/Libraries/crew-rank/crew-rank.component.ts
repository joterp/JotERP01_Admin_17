import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWRankAddComponent } from './crew-rank-add/crew-rank-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';

interface ranks {
  activeStatus: number;
  addedBy: number;
  addedByName: string;
  addedOnDate: string;
  contractDuration: number;
  editedBy: number | null;
  editedByName: string | null;
  editedOnDate: string | null;
  guid: string;
  id: number;
  isCadet: number;
  isCadetSupervisor: number;
  rankCategory: number;
  rankName: string;
  rankShortCode: string;
  sortSequence: number;
  tenantId: number;
  vesselDepartmentID: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     id: 1,
//     rankName: 'String',
//     rankShortCode: 'Str',
//     sortSequence: 1,
//     rankCategory: 1,
//     vesselDepartmentID: 1,
//     contractDuration: 12,
//     isCadet: 0,
//     isCadetSupervisor: 1,
   
//   },
//   {
//     id: 2,
//     rankName: 'String1',
//     rankShortCode: 'Str11',
//     sortSequence: 2,
//     rankCategory: 2,
//     vesselDepartmentID: 2,
//     contractDuration: 12,
//     isCadet: 2,
//     isCadetSupervisor: 2,
   
//   },
//   // Add other elements here...
// ];

@Component({
  selector: 'fury-crew-rank',
  templateUrl: './crew-rank.component.html',
  styleUrls: ['./crew-rank.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankComponent implements OnInit {
  pageSize = 10;
 
  dataSource: MatTableDataSource<ranks>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  crewRankFormGroup: UntypedFormGroup;


  


  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private http: HttpClient) {
      this.titleService.setTitle(`Crew Rank`);
      this.dataSource = new MatTableDataSource();
     }
     
    @Input()
    columns: ListColumn[] = [
      { property: "Department", visible: true, name: "Department" },
      { property: "Category", visible: true, name: "Category" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Rank_Short_Name", visible: true, name: "Rank_Short_Name" },
      { property: "Contract_Duration", visible: true, name: "Contract_Duration" },
      // { property: "Adjust_Sort_Order", visible: true, name: "Adjust_Sort_Order" },
      { property: "action", visible: true, name: "action" },
    ] as ListColumn[];

    get crewRankvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


    ngOnInit(): void {
      this.fetchRankData();
      // this.FetchAllData();
      this.sidenavService.setCollapsed(true);
      this.crewRankFormGroup = this.fb.group({
        txtRank_Name: [""],
        txtRank_Short_Name: [""],
        drpCategory: [""],
        drpDepartment: [""],
        drpStatus: ["1"]
      });
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
      this.crewRankFormGroup.reset();
      this.crewRankFormGroup.get("drpStatus").patchValue("1");
      this.fetchRankData();
    }
    fetchRankData() {
      this.api.getRanksData().subscribe(response => {
        const ranks: ranks[] = response.data.ranks;
        this.dataSource.data = ranks;
      });
    }


  saveNewRank(data:object, IsEdit:boolean) {
    
    const dialogRef = this.dialog.open(CREWRankAddComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        
      });

      dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((result)=>{
      if (result) {
        console.log(data,"datatatatatat")
        this.clearFilter();
        // this.loadBunkerData();
        // this.getBunkeringFilterLibrary();
      }
     
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
          this.api.DeleteDataService('v1/Rank', id).subscribe(
            (res: any) => {
              if (Number.isInteger(res)) {
                this.common.ShowMessage("Rank Deleted Successfully", "notify-success", 3000);
                this.fetchRankData();
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
