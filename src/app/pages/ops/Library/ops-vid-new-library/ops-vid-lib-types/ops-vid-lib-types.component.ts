import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSVIDLIBTypesEditComponent } from './ops-vid-lib-types-edit/ops-vid-lib-types-edit.component';
import { OPSVIDQuestionnairesEditComponent } from '../ops-vid-questionnaires-edit/ops-vid-questionnaires-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-vid-lib-types',
  templateUrl: './ops-vid-lib-types.component.html',
  styleUrls: ['./ops-vid-lib-types.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDLIBTypesComponent implements OnInit {
  pageSize = 10;
  panelOpenState = true;



  VIDTypedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  VIDTypeFilterFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`VID Type`);

     }
     @Input()
     columns: ListColumn[] = [
       { property: "Department", visible: true, name: "Department" },
       { property: "VID_Questionnaires", visible: true, name: "VID_Questionnaires" },
      
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get VIDTypevisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.VIDTypeFilterFormGroup = this.fb.group({
      drpDepartment: [""],
      txtVID_Questionnaires: [""],
      drpStatus: ["1"]
    });
    this.VIDTypedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.VIDTypedataSource.paginator = this.paginator;
    this.VIDTypedataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.VIDTypeFilterFormGroup.reset();
    this.VIDTypeFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewVIDQues(data:object, IsEdit:boolean, modeltitle:string) {

    const dialogRef = this.dialog.open(OPSVIDQuestionnairesEditComponent,
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

