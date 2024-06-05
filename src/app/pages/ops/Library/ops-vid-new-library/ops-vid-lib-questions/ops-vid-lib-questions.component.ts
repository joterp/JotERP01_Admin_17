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
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-vid-lib-questions',
  templateUrl: './ops-vid-lib-questions.component.html',
  styleUrls: ['./ops-vid-lib-questions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDLIBQuestionsComponent implements OnInit {
  pageSize = 10;
  panelOpenState = true;



  VIDQueCategorydataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator:MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  VIDQuestionsFilterFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`VID Question`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "VID_Category", visible: true, name: "VID_Category" },
       { property: "Question", visible: true, name: "Question" },
       { property: "Question_No", visible: true, name: "Question_No" },
       { property: "Answer_Type", visible: true, name: "Answer_Type" },
       { property: "Answer_Nature", visible: true, name: "Answer_Nature" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get VIDQueCategoryvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.VIDQuestionsFilterFormGroup = this.fb.group({
      txtQuestion: [""],
      txtQuestion_No: [""],
      drpAnswer_Type: [""],
      drpAnswer_Nature: [""],
      drpStatus: [""],
      drpVID_Category: [""]
      
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
    this.VIDQuestionsFilterFormGroup.reset();
    this.VIDQuestionsFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveVIDQuestion(data:object, IsEdit:boolean,modeltitle:string) {
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
