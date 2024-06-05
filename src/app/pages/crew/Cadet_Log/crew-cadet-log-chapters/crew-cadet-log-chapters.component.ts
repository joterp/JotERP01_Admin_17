import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWCadetLogChaptersAddComponent } from './crew-cadet-log-chapters-add/crew-cadet-log-chapters-add.component';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-cadet-log-chapters',
  templateUrl: './crew-cadet-log-chapters.component.html',
  styleUrls: ['./crew-cadet-log-chapters.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogChaptersComponent implements OnInit {
  pageSize = 10;

  cadetLogChapterdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  loading: boolean;
  logChaptersFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Cadet Log Chapter`);
    }
    @Input()
    columns: ListColumn[] = [
     
      { property: "Cadet_Type", visible: true, name: "Cadet_Type" },
      { property: "Chapter_No", visible: true, name: "Chapter_No" },
      { property: "Chapter", visible: true, name: "Chapter" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];
  
    get logChaptervisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.logChaptersFormGroup = this.fb.group({
      txtCadet_Type: [""],
      txtChapter:[""],
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
    this.logChaptersFormGroup.reset();
    this.logChaptersFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveCadetLogType(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWCadetLogChaptersAddComponent,
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
