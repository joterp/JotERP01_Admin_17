import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWEvaluationSheetAddComponent } from './crew-evaluation-sheet-add/crew-evaluation-sheet-add.component';
import { CREWAssignQuestionsComponent } from './crew-assign-questions/crew-assign-questions.component';
import { CREWAssignToVesselComponent } from './crew-assign-to-vessel/crew-assign-to-vessel.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-evaluation-sheet',
  templateUrl: './crew-evaluation-sheet.component.html',
  styleUrls: ['./crew-evaluation-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWEvaluationSheetComponent implements OnInit {
  pageSize = 10;

  evaluationSheetdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationSheetFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Evaluation Sheet`);
     }
     @Input()
    columns: ListColumn[] = [
      { property: "Evaluation_Sheet", visible: true, name: "Evaluation_Sheet" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "No_of_Questions", visible: true, name: "No_of_Questions" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get evaluationSheetvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
	

  ngOnInit(): void {
    
	 this.sidenavService.setCollapsed(true);
   this.evaluationSheetFormGroup = this.fb.group({
     txtEvaluation_Sheet: [""],
     drpRank: [""],
     drpStatus: ["1"]
   });
   this.evaluationSheetdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.evaluationSheetdataSource.paginator = this.paginator;
    this.evaluationSheetdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.evaluationSheetFormGroup.reset();
    this.evaluationSheetFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveEvaluationSheet(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWEvaluationSheetAddComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
    saveAssignQuestion(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWAssignQuestionsComponent,
        {
          width: "70%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 
      saveAssignToVessel(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(CREWAssignToVesselComponent,
          {
            width: "70%",
            maxHeight: "90%",
            disableClose: true,
            data:data
          });
    
          dialogRef.componentInstance.IsEdit= IsEdit;
        dialogRef.afterClosed().subscribe((data:any)=>{
         
        });
        } 

}
