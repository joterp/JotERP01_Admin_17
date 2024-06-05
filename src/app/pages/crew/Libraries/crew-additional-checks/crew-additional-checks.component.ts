import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWAdditionalChecksAddComponent } from './crew-additional-checks-add/crew-additional-checks-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-additional-checks',
  templateUrl: './crew-additional-checks.component.html',
  styleUrls: ['./crew-additional-checks.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWAdditionalChecksComponent implements OnInit {
  pageSize = 10;

  crewTraitsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  crewTraitsFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Traits`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Detail_To_Check", visible: true, name: "Detail_To_Check" },
       { property: "Type", visible: true, name: "Type" },
       { property: "Unit", visible: true, name: "Unit" },
       { property: "Show_In_Profile", visible: true, name: "Show_In_Profile" },
       { property: "Remarks", visible: true, name: "Remarks" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get crewTraitsvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.crewTraitsFormGroup = this.fb.group({
      txtDetail_Check: [""],
      drpType: [""],
      drpUnit: [""],
      drpStatus: ["1"]
    });
    this.crewTraitsdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.crewTraitsdataSource.paginator = this.paginator;
    this.crewTraitsdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.crewTraitsFormGroup.reset();
    this.crewTraitsFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveFields(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWAdditionalChecksAddComponent,
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
