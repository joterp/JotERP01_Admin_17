import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator} from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWInterviewGradeAddComponent } from './crewinterview-grade-add/crewinterview-grade-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { StatusChangeConfirmation } from 'src/app/common-component/status-change-confirmation/status-change-confirmation.component';
import { DecimalPipe } from '@angular/common';

export interface crewInterviewGradingOption {
  active_STATUS:number;
  addedBy: string;
  addedByName: string;
  addedOnDate: string;
  editedBy: string;
  editedByName: string;
  editedOnDate: string;
  grade_ID:number;
  guid: string;
  id: number;
  isTransient: boolean;
  option_TEXT:string;
  option_VALUE:number;
  tenantId: string;
}
@Component({
  selector: 'fury-crew-interview-grade',
  templateUrl: './crew-interview-grade.component.html',
  styleUrls: ['./crew-interview-grade.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWInterviewGradeComponent implements OnInit {
  pageSize = 10;

  dataSource: MatTableDataSource<crewInterviewGradingOption>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  loading: boolean;
  interviewGradeFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private http: HttpClient) {
      this.titleService.setTitle(`Crew Interview Grading`);
      this.dataSource = new MatTableDataSource();
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Grade", visible: true, name: "Grade" },
       { property: "Grade_Type", visible: true, name: "Grade_Type" },
       { property: "Min_Score", visible: true, name: "Min_Score" },
       { property: "Max_Score", visible: true, name: "Max_Score" },
       { property: "No_of_options", visible: true, name: "No_of_options" },
       { property: "Options", visible: true, name: "Options" },
       { property: "action", visible: true, name: "action" },
     ] as ListColumn[];
 
     get interviewGradevisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 

  ngOnInit(): void {
    this.fetchInterviewGarde();
    this.sidenavService.setCollapsed(true);
    this.interviewGradeFormGroup = this.fb.group({
      txtGrade: [""],
      drpGrade_Type: [""],
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
    this.interviewGradeFormGroup.reset();
    this.interviewGradeFormGroup.get("STATUS").patchValue("1");
    this.fetchInterviewGarde();
  }
  fetchInterviewGarde() {
    this.api.getGraphqlDataInterviewGrade().subscribe(response => {
      const crewInterviewGradingOption: crewInterviewGradingOption[] = response.data.crewInterviewGradingOption;
      this.dataSource.data = crewInterviewGradingOption;
    });
  }
 
  saveNewGrade(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(CREWInterviewGradeAddComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });
      dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
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
          this.api.DeleteDataService('v1/CrewInterviewGradingOptions', id).subscribe(
            (res: any) => {
              if (Number.isInteger(res)) {
                this.common.ShowMessage("Grade Deleted Successfully", "notify-success", 3000);
                this.fetchInterviewGarde();
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
