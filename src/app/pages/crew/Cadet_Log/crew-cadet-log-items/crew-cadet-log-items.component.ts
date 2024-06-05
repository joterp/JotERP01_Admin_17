import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWCadetLogItemsAddComponent } from './crew-cadet-log-items-add/crew-cadet-log-items-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-cadet-log-items',
  templateUrl: './crew-cadet-log-items.component.html',
  styleUrls: ['./crew-cadet-log-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogItemsComponent implements OnInit {
  pageSize = 10;

  cadetLogItemdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  loading: boolean;
  logItemFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Cadet Log Item`);
     }
     @Input()
     columns: ListColumn[] = [
   
       { property: "Category", visible: true, name: "Category" },
       { property: "Question_No", visible: true, name: "Question_No" },
       { property: "Question", visible: true, name: "Question" },
       { property: "Grade", visible: true, name: "Grade" },
       { property: "Grade_Type", visible: true, name: "Grade_Type" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
   
     get logItemvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.logItemFormGroup = this.fb.group({
      txtCategory: [""],
      txtQuestion_No: [""],
      txtQuestion_Name: [""],
      txtGrade: [""],
      drpStatus: ["1"]
    });
    this.cadetLogItemdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.cadetLogItemdataSource.paginator = this.paginator;
    this.cadetLogItemdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.logItemFormGroup.reset();
    this.logItemFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveCadetLogItem(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWCadetLogItemsAddComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
