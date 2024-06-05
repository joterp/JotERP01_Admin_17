import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWCadetLogCategoriesAddComponent } from './crew-cadet-log-categories-add/crew-cadet-log-categories-add.component';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-cadet-log-categories',
  templateUrl: './crew-cadet-log-categories.component.html',
  styleUrls: ['./crew-cadet-log-categories.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogCategoriesComponent implements OnInit {
  pageSize = 10;

  cadetLogChapterdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  loading: boolean;
  logCategoryFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Cadet Log Categories`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Chapter", visible: true, name: "Chapter" },
       { property: "Category_No", visible: true, name: "Category_No" },
       { property: "Category", visible: true, name: "Category" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
   
     get logCategoryvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.logCategoryFormGroup = this.fb.group({
      txtChapter: [""],
      txtCategory:[""],
      drpStatus: ["1"]
    });
    this.cadetLogChapterdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.cadetLogChapterdataSource.paginator = this.paginator;
    this.cadetLogChapterdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.logCategoryFormGroup.reset();
    this.logCategoryFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveCadetLogCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWCadetLogCategoriesAddComponent,
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
