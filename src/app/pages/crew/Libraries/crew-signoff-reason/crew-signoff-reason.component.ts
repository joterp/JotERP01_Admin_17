import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWSignoffReasonAddComponent } from './crew-signoff-reason-add/crew-signoff-reason-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-signoff-reason',
  templateUrl: './crew-signoff-reason.component.html',
  styleUrls: ['./crew-signoff-reason.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWSignoffReasonComponent implements OnInit {
  pageSize = 10;

  signoffReasondataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  signoffReasonFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`SignOff Reason`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Signoff_Reason", visible: true, name: "Signoff_Reason" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get signoffReasonvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.signoffReasonFormGroup = this.fb.group({
      txtSignoff_reason: [""],
      drpStatus: ["1"]
    });
    this.signoffReasondataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.signoffReasondataSource.paginator = this.paginator;
    this.signoffReasondataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.signoffReasonFormGroup.reset();
    this.signoffReasonFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveSignoffReason(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWSignoffReasonAddComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
