import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSVIDCategoryEditComponent } from '../ops-vid-category-edit/ops-vid-category-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-ops-vid-lib-catagaries',
  templateUrl: './ops-vid-lib-catagaries.component.html',
  styleUrls: ['./ops-vid-lib-catagaries.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDLIBCatagariesComponent implements OnInit {
  pageSize = 10;
  panelOpenState = true;



  VIDQueCategorydataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  VIDQueCategoryFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`VID Questionnaire Category`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "VID_Questionnaires", visible: true, name: "VID_Questionnaires" },
      { property: "VID_Chapters", visible: true, name: "VID_Chapters" },
      { property: "Category_No", visible: true, name: "Category_No" },
      { property: "Category", visible: true, name: "Category" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get VIDQueCategoryvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.VIDQueCategoryFilterFormGroup = this.fb.group({
      drpVID_Ques: [""],
      drpVID_Chapters: [""],
      txtCategory: [""],
      drpStatus: ["1"]
    });
    this.VIDQueCategorydataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.VIDQueCategorydataSource.paginator = this.paginator;
    this.VIDQueCategorydataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.VIDQueCategoryFilterFormGroup.reset();
    this.VIDQueCategoryFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveVIDCatagory(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(OPSVIDCategoryEditComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
