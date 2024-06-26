import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCLocationEditComponent } from './purc-location-edit/purc-location-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-purc-location',
  templateUrl: './purc-location.component.html',
  styleUrls: ['./purc-location.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCLocationComponent implements OnInit {
  pageSize = 10;

  locationdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator:MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  locationfilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Location`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Location", visible: true, name: "Location" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.locationfilterFormGroup = this.fb.group({
      txtLocation: [""],
      drpStatus: ["1"]
    });
    this.locationdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.locationdataSource.paginator = this.paginator;
    this.locationdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.locationfilterFormGroup.reset();
    this.locationfilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveLocation(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCLocationEditComponent,
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
