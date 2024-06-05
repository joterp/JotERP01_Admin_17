import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWCadetLogTypeAddComponent } from './crew-cadet-log-type-add/crew-cadet-log-type-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-cadet-log-type',
  templateUrl: './crew-cadet-log-type.component.html',
  styleUrls: ['./crew-cadet-log-type.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogTypeComponent implements OnInit {
  pageSize = 10;

  cadetLogTypedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  loading: boolean;
  logTypeFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Cadet Log Type`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Cadet_Log_Name", visible: true, name: "Cadet_Log_Name" },
       { property: "Department", visible: true, name: "Department" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
   
     get logTypevisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.logTypeFormGroup = this.fb.group({
      txtCadet_Log_Name: [""],
      drpDepartment:[""],
      drpStatus: ["1"]
    });
    this.cadetLogTypedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.cadetLogTypedataSource.paginator = this.paginator;
    this.cadetLogTypedataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.logTypeFormGroup.reset();
    this.logTypeFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveCadetLogType(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWCadetLogTypeAddComponent,
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
