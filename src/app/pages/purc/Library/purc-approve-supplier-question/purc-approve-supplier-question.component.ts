import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCApproveSupplierQuestionAddNewQueComponent } from './purc-approve-supplier-question-add-new-que/purc-approve-supplier-question-add-new-que.component';
import { PURCApproveSupplierQuestionCopyQueModalComponent } from './purc-approve-supplier-question-copy-que-modal/purc-approve-supplier-question-copy-que-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-approve-supplier-question',
  templateUrl: './purc-approve-supplier-question.component.html',
  styleUrls: ['./purc-approve-supplier-question.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class PURCApproveSupplierQuestionComponent implements OnInit {
  pageSize = 10;

  aslevaluationdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  SupplierQueFilterFormGroup: UntypedFormGroup;
  dialogRef: any;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`ASL Evaluation Question`);
    }

    @Input()
    columns: ListColumn[] = [
      { property: "Scope", visible: true, name: "Scope" },
      { property: "Category", visible: true, name: "Category" },
      { property: "Question_Title", visible: true, name: "Question_Title" },
      { property: "Weightage", visible: true, name: "Weightage" },
      { property: "Min_Marks", visible: true, name: "Min_Marks" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.SupplierQueFilterFormGroup = this.fb.group({
      drpScope: [""],
      drpCategory: [""],
      txtQue_Title: [""],
    
      drpStatus: ["1"]
    });
    this.aslevaluationdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.aslevaluationdataSource.paginator = this.paginator;
    this.aslevaluationdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.SupplierQueFilterFormGroup.reset();
    this.SupplierQueFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveNewQuestions(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCApproveSupplierQuestionAddNewQueComponent,
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

    saveCopyQuestions(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(PURCApproveSupplierQuestionCopyQueModalComponent,
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

}
