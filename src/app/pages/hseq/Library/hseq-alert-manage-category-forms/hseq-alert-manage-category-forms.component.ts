import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQAlertManageCategoryFormsAddComponent } from './hseq-alert-manage-category-forms-add/hseq-alert-manage-category-forms-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-alert-manage-category-forms',
  templateUrl: './hseq-alert-manage-category-forms.component.html',
  styleUrls: ['./hseq-alert-manage-category-forms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQAlertManageCategoryFormsComponent implements OnInit {
  pageSize = 10;

  manageCategoryFormdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  manageCategoryFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Manage Category Forms`);
    }
    @Input()
    columns: ListColumn[] = [
     
      { property: "Category", visible: true, name: "Category" }, 
      { property: "Form_Code", visible: true, name: "Form_Code" },
      { property: "Form_Name", visible: true, name: "Form_Name" },
      { property: "Form_File_Name", visible: true, name: "Form_File_Name" },
      { property: "Action", visible: true, name: "Action" }
    ] as ListColumn[];

    get manageCategoryvisibleColumns() {
     return this.columns
       .filter((column) => column.visible)
       .map((column) => column.property);
   }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.manageCategoryFormGroup = this.fb.group({
      drpCategory: [""],
      txtForm_Code:[""],
      txtForm_File_Name:[""],
      txtForm_Name:[""],
      drpStatus: ["1"]
    });
    this.manageCategoryFormdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.manageCategoryFormdataSource.paginator = this.paginator;
    this.manageCategoryFormdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.manageCategoryFormGroup.reset();
    this.manageCategoryFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveCategoryForm(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQAlertManageCategoryFormsAddComponent,
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
