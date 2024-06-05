import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSVIDChaptersEditComponent } from '../ops-vid-chapters-edit/ops-vid-chapters-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-vid-lib-chapters',
  templateUrl: './ops-vid-lib-chapters.component.html',
  styleUrls: ['./ops-vid-lib-chapters.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDLIBChaptersComponent implements OnInit {
  pageSize = 10;
  panelOpenState = true;



  VIDChapterdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  VIDChapterFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`VID Chapters`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "VID_Questionnaires", visible: true, name: "VID_Questionnaires" },
      { property: "Chapter_No", visible: true, name: "Chapter_No" },
      { property: "Chapters", visible: true, name: "Chapters" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get VIDChaptersvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.VIDChapterFilterFormGroup = this.fb.group({
      drpVID_Ques: [""],
      txtChapters: [""],
      drpStatus: ["1"]
    });
    this.VIDChapterdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.VIDChapterdataSource.paginator = this.paginator;
    this.VIDChapterdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.VIDChapterFilterFormGroup.reset();
    this.VIDChapterFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveVIDChapter(data:object, IsEdit:boolean,modeltitle:string) {
    const dialogRef = this.dialog.open(OPSVIDChaptersEditComponent,
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
