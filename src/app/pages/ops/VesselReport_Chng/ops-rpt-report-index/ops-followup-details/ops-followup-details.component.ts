import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSFollowupDetailsModelComponent } from './ops-followup-details-model/ops-followup-details-model.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-followup-details',
  templateUrl: './ops-followup-details.component.html',
  styleUrls: ['./ops-followup-details.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OpsFollowupDetailsComponent implements OnInit {
  IsEdit: boolean;
  pageSize = 10;

  FollowupdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  VesselReportFilterFormGroup: UntypedFormGroup;

  @Input()
     columns: ListColumn[] = [
       { property: "On", visible: true, name: "On" },
       { property: "BY", visible: true, name: "BY" },
       { property: "Follow_Up", visible: true, name: "Follow_Up" },
     
    
     ] as ListColumn[];
  sidenavService: any;
 
     get FollowupvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  constructor(private dialogRef: MatDialogRef<OpsFollowupDetailsComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.FollowupdataSource = new MatTableDataSource();
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.FollowupdataSource.paginator = this.paginator;
    this.FollowupdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.VesselReportFilterFormGroup.reset();
    this.VesselReportFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveFollowupDetails(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OPSFollowupDetailsModelComponent,
      {
        width: "35%",
      maxHeight: "80%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
